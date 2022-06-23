var express = require('express');
var router = express.Router();
const axios = require("axios");
require('dotenv').config()

const baseUrl = "https://api.rawg.io/api/games";
const searchParams = "&page=1&page_size=10&ordering=-relevance&exclude_stores=9"


let getNewestGames = async () => {
    let response;
    let today = new Date();
    let priorDateUnconverted = new Date(new Date().setDate(today.getDate() - 30));
    let date = today.getFullYear()+'-'+ ("0" + (today.getMonth()+1)).slice(-2) +'-'+ ("0" + today.getDate()).slice(-2);
    let priorDate = priorDateUnconverted.getFullYear()+'-'
    +("0" + (priorDateUnconverted.getMonth()+1)).slice(-2) +'-'+ ("0" + priorDateUnconverted.getDate()).slice(-2);
    const searchLast30Days = `&dates=${priorDate},${date}`

    try {
        response = await axios(`${baseUrl}?key=${process.env.RAWG_API_KEY}${searchParams}${searchLast30Days}`);
        console.log(`${baseUrl}?key=${process.env.RAWG_API_KEY}${searchParams}${searchLast30Days}`)
    } catch (e) {
        console.log(e);
    }
    
    return response;
}

/* GET list of the newest games*/

module.exports = async (req, res) => {
    let responseGames;
    try {
        responseGames = await getNewestGames();
    } catch(e) {
        console.log(e);
    }
    res.send(responseGames.data.results)
}
