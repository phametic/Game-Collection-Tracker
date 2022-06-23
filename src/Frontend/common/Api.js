import axios from 'axios';

const baseUrl = 'http://localhost:9000/api/'

    const callNewestGame = async () => {
        const response = await axios.get(`${baseUrl}getNewestGames`); 
        return response.data;
    }

    const getGame = async (id) => {
        const response = await axios.get(`${baseUrl}getGame/${id}`);
        return response.data;
    }

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    callNewestGame,
    getGame
}