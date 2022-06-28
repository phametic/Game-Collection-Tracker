const axios = require('axios');
require('dotenv').config();

const baseUrl = "https://api.rawg.io/api/games";

let getSameSeries = async (id) => {
    let response;
    try {
        response = await axios(`${baseUrl}/${id}/game-series?key=${process.env.RAWG_API_KEY}`);
        console.log("Getting Same Series for ID: " + id);
    } catch(error) {
        console.log("Error getting same series.");
    }
    return response;
}

module.exports = async(req, res) => {
    let response;
    const gameId = req.params.id;
    try {
        response = await getSameSeries(gameId);
    } catch(error) {
        console.log(error);
    }
    res.send(response.data);
}