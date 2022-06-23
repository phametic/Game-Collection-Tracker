var express = require('express');
var router = express.Router();
const axios = require("axios");
require('dotenv').config();

const baseUrl = "https://api.rawg.io/api/games";

let getGame = async (id) => {
    let response;
    try {
        response = await axios(`${baseUrl}/${id}?key=${process.env.RAWG_API_KEY}`);
        console.log("Getting game id: " + id);
    } catch (error) {
        console.log(error);
    }
    return response;
}

/* GET single game by ID*/

module.exports = async(req, res) => {
    let response;
    const gameId = req.params.id;
    try {
        response = await getGame(gameId);
        //console.log(response.data);
        //console.log(`${baseUrl}/${req.params.id}?key=${process.env.RAWG_API_KEY}`);
    } catch (error) {
        console.log(error);
    }
    res.send(response.data);
}