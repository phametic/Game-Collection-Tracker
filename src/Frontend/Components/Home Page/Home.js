import React, { useEffect, useState } from "react";
import GameCard from "../Game Card/GameCard";
import Api from '../../common/Api.js';

export default function Home() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getNewestGames = async () => {
        try {
            setLoading(true);
            const response = await Api.callNewestGame();
            if(response) {
                setData(response);
                setLoading(false);
            }
        } catch (err) {
            console.log(err);
            setLoading(true);
        }
    }

    useEffect(() => {
        getNewestGames();
    }, [])
 
    const gameCards = data.map((element) => (
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
        <section>
            <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center z-1">
            {loading ? 
                <p className="text-[#FFFFFF] text-2xl">Data is loading...</p> 
              : 
                gameCards
            }
            </div>
              
        </section>
    )
}