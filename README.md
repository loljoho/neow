# neow

haha f1 car go neow

Please join the [Discord server](https://discord.gg/WbNGX6zVGJ)!

## Overview

Frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) & backend is a Python Flask app with [Flask-RESTful](https://flask-restful.readthedocs.io/). The files are located in `client/` and `server/`, respectively.

This application uses data from the [Ergast Developer API](http://ergast.com/mrd/).

## Getting Stated

_Note: currently the Docker setup is botched._

Install frontend dependencies with `npm` and backend dependencies with `pip`:

```sh
cd client/
npm install
cd ../server/
pip install -r requirements.txt
```

Start the Flask backend:

```sh
python api.py
```

Open another terminal instance to start the React frontend:

```sh
cd client/
npm start
```
