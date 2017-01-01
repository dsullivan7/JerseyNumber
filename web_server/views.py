"""Webserver views for the app."""

from flask import jsonify
from flask import request

import sports_info

from web_server import app


@app.route('/athlete')
def letter():
    """Return player based on passed in info."""
    number = request.args.get('number')

    athlete = sports_info.get_athlete(number=number)

    return jsonify(athlete=athlete)


@app.route('/')
def index():
    """Direct to the home screen."""
    return app.send_static_file('index.html')


@app.after_request
def add_header(response):
    """Add headers to stop caching."""
    response.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    response.headers['Cache-Control'] = 'public, max-age=0'
    return response
