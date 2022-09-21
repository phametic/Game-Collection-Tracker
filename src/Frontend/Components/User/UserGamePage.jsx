import React, {useState, useEffect, useRef} from 'react';
import Api from '../../common/Api.js';
import GameCard from "../Game Card/GameCard";

export default function UserGamePage() {

    const [gameListDB, setGameListDB] = useState([]);
    const [gameListAPI, setGameListAPI] = useState([]);
    const [loading, setLoading] = useState(true);
    const [owned, setOwned] = useState(false);

    const getGameListDB = async() => {
        try {
            setLoading(true);
            const response = await Api.getGamesListFromDB();
            if(response) {
                setGameListDB(response);
                console.log("Game List Pulled from MongoDB.");
                setLoading(false);
            }
        } catch(error) {
            console.log(error);
            setLoading(true);
        }
    }

    const grabGamesFromAPI = async () => {
        setLoading(true);
        const data = gameListDB.map(async (data) => {
            let response; 
            try {
                response = await Api.getGame(data.gameId);
                console.log("Fetched data from rawg")
            } catch (err) {
                console.log(err)
                setLoading(false);
            }
            return response;
        })
        setLoading(false);
        const results = await Promise.all(data);
        setGameListAPI(results);
    }

    async function grabData() {
        await getGameListDB();
        await grabGamesFromAPI();
    }

    useEffect(() => {
        console.log("UseEffect called")
        grabData();
    }, [owned]) 

    const gameCards = (gameListAPI || []).map(element => (
        <GameCard 
            key={element.id} id={element.id} gameName={element.name}
            backgroundImage={element.background_image}
            platform={element.parent_platforms}
            metacritic={element.metacritic}
            released={element.released}
            genres={element.genres}
            esrb_rating={element.esrb_rating}
            owned={owned}
            setOwned={setOwned}
        />
    ))

    if(loading || !gameListDB || gameListDB.length < 0) {
        return <h1 className="text-3xl text-white">Loading.... Please Wait.</h1>
    }
    
    return(
        <div>
            <h1 className="text-white text-3xl">List of Added Games</h1>
            {gameCards}
        </div>
        
    )
}