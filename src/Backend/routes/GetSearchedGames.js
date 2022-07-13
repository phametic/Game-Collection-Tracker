const axios = require("axios");
require('dotenv').config();

const baseUrl = "https://api.rawg.io/api/games";

let getSearchedGames = async (gameName) => {
    let response;
    try {
        response = await axios({
            method: "get",
            url: `${baseUrl}?key=${process.env.RAWG_API_KEY}&search=${gameName}`,
        });
        console.log("Searching game : " + gameName);
    } catch (error) {
        console.log(error);
    }
    return response;
}

module.exports = async(req, res) => {
    let response;
    const query = req.query.search;
    try {
        response = await getSearchedGames(query);
        console.log(query);
    } catch(error) {
        console.log(error);
    }
    res.send(response.data);
}