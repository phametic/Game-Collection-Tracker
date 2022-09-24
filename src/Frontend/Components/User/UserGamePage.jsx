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
        console.log("Grabbing data from Rawg with DB ids.")
        setLoading(true);
        const data = gameListDB.map(async(data) => {
            console.log("Entered data map.")
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

    useEffect(() => {
        console.log("Grabbed data from DB.");
        getGameListDB();
    },[])

    useEffect(() => {
        if(!gameListDB || !gameListDB.length) {
            return;
        }
        grabGamesFromAPI()
    }, [gameListDB]) 

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

    if(loading || !gameListDB || gameListDB.length < 0 || !gameListAPI || !gameListAPI.length) {
        return <h1 className="text-3xl text-white">Loading.... Please Wait.</h1>
    }
    
    return(
        <div>
            <h1 className="text-white text-3xl">List of Added Games</h1>
            {gameCards}
        </div>
        
    )
}