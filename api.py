from flask import Flask, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)
api = Api(app)


class ErgastRaceAPI(Resource):
    """
    Retrieve Race data from Ergast API
    """

    def get(self):
        r = requests.get('http://ergast.com/api/f1/current/races.json')
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
api.add_resource(ErgastRaceAPI, '/races')
api.add_resource(ErgastResultAPI, '/results')
api.add_resource(ErgastQualifyingAPI, '/qualifying')
api.add_resource(ErgastDriverAPI, '/drivers')
api.add_resource(ErgastTeamAPI, '/teams')
api.add_resource(ErgastDriverStandingAPI, '/driverStandings')
api.add_resource(ErgastConstructorStandingAPI, '/constructorStandings')
api.add_resource(ErgastCircuitAPI, '/circuits')
api.add_resource(ErgastStatusAPI, '/status')

if __name__ == '__main__':
    app.run(debug=True)
