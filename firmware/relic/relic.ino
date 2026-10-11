// Amulith relic: Grove rotary knob (A0), Grove button (D2), Grove LED (D3, PWM).
// Serial 115200, line based. See firmware/README.md for the contract.

const uint8_t PIN_KNOB = A0;
const uint8_t PIN_BUTTON = 2;
const uint8_t PIN_LED = 3;

const unsigned long DEBOUNCE_MS = 25;
const unsigned long KNOB_MIN_GAP_MS = 40;
const int KNOB_DEADBAND = 8;
const unsigned long HEARTBEAT_MS = 1000;

enum Mode { IDLE, THINKING, NEAR, SOLID, OFF };
Mode mode = IDLE;
uint8_t level = 255;  // 0..255, used by NEAR (pulse speed) and SOLID (brightness)

int lastKnobSent = -100;
float knobSmooth = 0;
unsigned long lastKnobAt = 0;

bool buttonStable = false;   // true = pressed
bool buttonRaw = false;
unsigned long buttonChangedAt = 0;

unsigned long lastHeartbeat = 0;

char rx[24];
uint8_t rxLen = 0;

void setup() {
  pinMode(PIN_BUTTON, INPUT);  // Grove button drives HIGH when pressed
  pinMode(PIN_LED, OUTPUT);
  Serial.begin(115200);
  knobSmooth = analogRead(PIN_KNOB);
  Serial.println(F("R amulith-relic 1"));
}

void readKnob(unsigned long now) {
  knobSmooth = knobSmooth * 0.8 + analogRead(PIN_KNOB) * 0.2;
  int k = (int)(knobSmooth + 0.5);
  if (abs(k - lastKnobSent) >= KNOB_DEADBAND && now - lastKnobAt >= KNOB_MIN_GAP_MS) {
    lastKnobSent = k;
    lastKnobAt = now;
    Serial.print(F("K "));
    Serial.println(k);
  }
}

void readButton(unsigned long now) {
  bool raw = digitalRead(PIN_BUTTON) == HIGH;
  if (raw != buttonRaw) {
    buttonRaw = raw;
    buttonChangedAt = now;
  }
  if (raw != buttonStable && now - buttonChangedAt >= DEBOUNCE_MS) {
    buttonStable = raw;
    Serial.println(buttonStable ? F("B 1") : F("B 0"));
  }
}

void driveLed(unsigned long now) {
  int out = 0;
  switch (mode) {
    case IDLE: {  // slow breath, 4 s period
      float p = (now % 4000) / 4000.0;
      float t = p < 0.5 ? p * 2 : (1 - p) * 2;
      out = 10 + (int)(t * t * 140);
      break;
    }
    case THINKING: {  // irregular flicker
      out = ((now / 60) * 2654435761UL >> 24) % 200 + 40;
      break;
    }
    case NEAR: {  // pulse, faster as level rises
      unsigned long period = 1200 - (unsigned long)level * 4;  // 1200 ms down to ~180 ms
      out = (now % period) < period / 3 ? 255 : 20;
      break;
    }
    case SOLID: out = level; break;
    case OFF: out = 0; break;
  }
  analogWrite(PIN_LED, out);
}

void handleLine() {
  // "L <mode> <level>" where mode is i, t, n, s, o
  if (rxLen >= 3 && rx[0] == 'L' && rx[1] == ' ') {
    char m = rx[2];
    int lv = rxLen > 4 ? atoi(rx + 4) : 255;
    if (lv < 0) lv = 0;
    if (lv > 255) lv = 255;
    level = lv;
    if (m == 'i') mode = IDLE;
    else if (m == 't') mode = THINKING;
    else if (m == 'n') mode = NEAR;
    else if (m == 's') mode = SOLID;
    else if (m == 'o') mode = OFF;
  }
}

void readSerial() {
  while (Serial.available()) {
    char c = Serial.read();
    if (c == '\n' || c == '\r') {
      rx[rxLen] = 0;
      if (rxLen) handleLine();
      rxLen = 0;
    } else if (rxLen < sizeof(rx) - 1) {
      rx[rxLen++] = c;
    } else {
      rxLen = 0;  // oversize line: drop and resync
    }
  }
}

void loop() {
  unsigned long now = millis();
  readSerial();
  readKnob(now);
  readButton(now);
  driveLed(now);
  if (now - lastHeartbeat >= HEARTBEAT_MS) {
    lastHeartbeat = now;
    Serial.println(F("H"));
  }
}
