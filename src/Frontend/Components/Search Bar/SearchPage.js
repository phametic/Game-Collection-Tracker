import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Api from '../../common/Api.js';
import GameCard from '../Game Card/GameCard.js'

export default function SearchPage() {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    const [gameData, setGameData] = useState();
    const [loading, setLoading] = useState(false);

    const getSearchedGames = async() => {
        try {
            let response;
            response = await Api.getSearchedGames(query.get("query"));
            setLoading(true);
            if(response) {
                console.log("Searched Game data set.");
                console.log(response.results);
                setGameData(response.results);
                setLoading(false);
            }
        } catch(error) {
            console.log(error);
            setLoading(true);
        }
    }

    useEffect(() => {
        getSearchedGames();
    }, []);

    console.log(gameData);

    const gameCards = (gameData || []).map((element) => (
        <GameCard 
            key={element.id} id={element.id} gameName={element.name}
            backgroundImage={element.background_image}
            platform={element.parent_platforms}
            metacritic={element.metacritic}
            released={element.released}
            genres={element.genres}
            esrb_rating={element.esrb_rating}
        />
    ));

    return(
        <div>
            <h1>Results: {query.get("query")}</h1>

            <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">
            {loading ? 
                <p className="text-[#020826] text-2xl">Data is loading...</p> 
              : 
                gameCards
            }
            </div>
        </div>
    )
}