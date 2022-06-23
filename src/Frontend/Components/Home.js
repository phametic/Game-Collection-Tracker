import React, { useEffect, useState } from "react";
import { dataContext, isLoadingContext } from "../common/APIUtils";
import GameCard from "./Game Card/GameCard";
import Api from '../common/Api.js';

export default function Home() {

    // const data = React.useContext(dataContext);
    // const isLoading = React.useContext(isLoadingContext)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log(data);

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
 
    const dataCards = data.map((element) => (
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
            <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">
            {loading ? 
                <p className="text-[#020826] text-2xl">Data is loading...</p> 
              : 
                dataCards
            }
            </div>
              
        </section>
    )
}