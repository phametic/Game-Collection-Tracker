var express = require('express');
var router = express.Router();
const axios = require('axios');
require('dotenv').config();

const baseUrl = "https://api.rawg.io/api/games";

let getStores = async(id) => {
    let response;
    try {
        response = await axios(`${baseUrl}/${id}/stores?key=${process.env.RAWG_API_KEY}`)
        console.log("Getting stores for game " + id);
    } catch (e) {
        console.log(e);
    }
    return response;
}

module.exports = async(req, res) => {
    let response;
    const gameId = req.params.id;
    try {
        response = await getStores(gameId);
        
    } catch(e) {
        console.log(e);
    }
    res.send(response.data);
}