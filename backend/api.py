from flask import Flask
from flask_restful import Resource, Api
from waitress import serve
from dotenv import load_dotenv
import os
import requests

load_dotenv()

app = Flask(__name__, static_folder='../build', static_url_path='')


@app.route('/')
def index():
    return app.send_static_file('index.html')


api = Api(app)


class ErgastRaceAPI(Resource):
    """
    Retrieve Race data from Ergast API
    """

    def get(self):
        r = requests.get('http://ergast.com/api/f1/current/last/races.json')
        return r.json()


class ErgastResultAPI(Resource):
    """
    Retrieve Race Results data from Ergast API
    """

    def get(self):
        r = requests.get('http://ergast.com/api/f1/current/last/result.json')
        return r.json()


class ErgastQualifyingAPI(Resource):
    """
    Retrieve Qualifying Results data from Ergast API
    """

    def get(self):
        r = requests.get(
            'http://ergast.com/api/f1/current/last/qualifying.json')
        return r.json()


class ErgastDriverAPI(Resource):
    """
    Retrieve Drivers data from Ergast API
    """

    def get(self):
        r = requests.get('http://ergast.com/api/f1/current/last/drivers.json')
        return r.json()


class ErgastTeamAPI(Resource):
    """
    Retrieve Teams data from Ergast API
    """

    def get(self):
        r = requests.get(
            'http://ergast.com/api/f1/current/last/constructors.json')
        return r.json()


class ErgastDriverStandingAPI(Resource):
    """
    Retrieve Driver Standings data from Ergast API
    """

    def get(self):
        r = requests.get(
            'http://ergast.com/api/f1/current/last/driverStandings.json')
        return r.json()


class ErgastConstructorStandingAPI(Resource):
    """
    Retrieve Constructor Standings data from Ergast API
    """

    def get(self):
        r = requests.get(
            'http://ergast.com/api/f1/current/last/constructorStandings.json')
        return r.json()


class ErgastCircuitAPI(Resource):
    """
    Retrieve Circuit data from Ergast API
    """

    def get(self):
        r = requests.get('http://ergast.com/api/f1/current/last/circuits.json')
        return r.json()


class ErgastStatusAPI(Resource):
    """
    Retrieve Status data from Ergast API
    """

    def get(self):
        r = requests.get('http://ergast.com/api/f1/current/last/status.json')
        return r.json()


# API Routes
api.add_resource(ErgastRaceAPI, '/api/races')
api.add_resource(ErgastResultAPI, '/api/results')
api.add_resource(ErgastQualifyingAPI, '/api/qualifying')
api.add_resource(ErgastDriverAPI, '/api/drivers')
api.add_resource(ErgastTeamAPI, '/api/teams')
api.add_resource(ErgastDriverStandingAPI, '/api/driverStandings')
api.add_resource(ErgastConstructorStandingAPI, '/api/constructorStandings')
api.add_resource(ErgastCircuitAPI, '/api/circuits')
api.add_resource(ErgastStatusAPI, '/api/status')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))

    env = os.environ.get('FLASK_ENV', 'development')
    if env == 'production':
        serve(app, port=port)
    else:
        app.run(debug=True, port=port)
