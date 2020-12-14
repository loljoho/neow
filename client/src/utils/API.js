import axios from 'axios';
// const BASE_URL = `http://127.0.0.1:5000`;

let API = {

  getRaces: () => {
    // return fetch(`${BASE_URL}/races`)
    return axios.get(`https://ergast.com/api/f1/current/races.json`)
      .then(response => response.data.MRData.RaceTable.Races);
  },
  getNextRace: () => {
    return axios.get(`https://ergast.com/api/f1/current/next/races.json`)
      .then(response => response.MRData);
  },
  getResults: () => {
    // return fetch(`${BASE_URL}/results`)
    return axios.get(`https://ergast.com/api/f1/current/last/results.json`)
      .then(response => response.data.MRData.RaceTable.Races);
  },
  getRaceResults: () => {
    return axios.get(`http://ergast.com/api/f1/current/results.json?limit=500`)
      .then(response => response.data.MRData.RaceTable);
  }



};

export default API;
