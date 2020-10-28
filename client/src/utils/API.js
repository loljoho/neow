import axios from 'axios';
// const BASE_URL = `http://127.0.0.1:5000`;

let API = {

  getRaces: () => {
    // return fetch(`${BASE_URL}/races`)
    return axios.get(`https://ergast.com/api/f1/current/races.json`)
      .then(response => response.data.MRData.RaceTable.Races);
  },



};

export default API;
