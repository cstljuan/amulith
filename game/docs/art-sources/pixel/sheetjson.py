"""Aseprite json-array export to the game's sheet.json (2x frames, 10 columns)."""
import json
import sys
frame = int(sys.argv[3]) if len(sys.argv) > 3 else 384
d = json.load(open(sys.argv[1]))
tags = {t['name']: list(range(t['from'], t['to'] + 1)) for t in d['meta']['frameTags']}
if 'idle_s' in tags and len(tags['idle_s']) > 1:  # hold the open-eye frame between blinks
    tags['idle_s'] = [tags['idle_s'][0]] * 25 + tags['idle_s'][1:]
json.dump({"frameWidth": frame, "frameHeight": frame, "columns": 10, "fps": 10, "animations": tags}, open(sys.argv[2], 'w'))
