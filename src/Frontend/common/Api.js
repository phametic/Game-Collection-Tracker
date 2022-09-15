import axios from 'axios';

const baseUrl = 'http://localhost:9000/api/'

    const callNewestGame = async () => {
        const response = await axios.get(`${baseUrl}get-newest-games`); 
        return response.data;
    }

    const getGame = async (id) => {
        const response = await axios.get(`${baseUrl}get-game/${id}`);
        return response.data;
    }

    const getScreenshot = async(id) => {
        const response = await axios.get(`${baseUrl}get-screenshot/${id}`);
        return response.data;
    }

    const getStore = async(id) => {
        const response = await axios.get(`${baseUrl}get-stores/${id}`);
        return response.data;
    }

    const getSameSeries = async(id) => {
        const response = await axios.get(`${baseUrl}get-same-series/${id}`);
        return response.data;
    }

    const getSearchedGames = async(name) => {
        const response = await axios.get(`${baseUrl}get-searched-games/?search=${name}`);
        return response.data;
    }

    const getGamesListFromDB = async() => {
        const response = await axios.get(`${baseUrl}games/`);
        return response.data;
    } 

    const getAGameFromDB = async(id) => {
        const response = await axios.get(`${baseUrl}games/` + id);
        return response.data;
    }

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    callNewestGame,
    getGame,
    getScreenshot,
    getStore,
    getSameSeries,
    getSearchedGames,
    getGamesListFromDB,
    getAGameFromDB
}