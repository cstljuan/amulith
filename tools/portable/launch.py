"""Launch the bundled game on this computer. Python 3, no packages or internet."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Timer
import webbrowser

root = Path(__file__).resolve().parent / 'www'
if not (root / 'play' / 'index.html').is_file():
    raise SystemExit('Use the complete Amulith portable download. Its www folder is missing.')
server = ThreadingHTTPServer(('127.0.0.1', 0), partial(SimpleHTTPRequestHandler, directory=str(root)))
url = f'http://127.0.0.1:{server.server_port}/play/'
print(f'Amulith is ready: {url}\nKeep this window open while playing. Press Ctrl+C to stop.')
Timer(0.3, lambda: webbrowser.open(url)).start()
try:
    server.serve_forever()
except KeyboardInterrupt:
    pass
finally:
    server.server_close()
