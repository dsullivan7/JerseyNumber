"""Initialize app and db."""
import os

from flask import Flask

from werkzeug.contrib.fixers import ProxyFix

app = Flask(__name__, static_url_path='')
app.wsgi_app = ProxyFix(app.wsgi_app)

import web_server.views
