import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../common/Api.js';
import Heading from './Heading.js';
import Info from './Info.js';
import Overview from './Overview.js';
import Store from './Store.js';

export default function GamePage(){
    const { gameId } = useParams();

    const [game, setGame] = useState({})
    const [loading, setLoading] = useState(true);

    const getGame = async() => {
        try {
            setLoading(true);
            const response = await Api.getGame(gameId);
            if(response) {
                setGame(response);
                console.log("Data set.");
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(true);
        }
    }

    useEffect(() => {
        getGame();
    }, []);

    const stores = game.stores.map((item) => (
        <Store name={item.store.name} key={item.store.id} website={item.store.domain}/>
    ))

    console.log(game.stores[0].store.name)

    return(
        <section className="">
            {loading ? 
            <p className="text-[#020826] text-2xl">Data is loading...</p> 
            : 
            <div>
                <section className="w-11/12 mx-auto">
                <Heading 
                    gameName={game.name}
                    released={game.released}
                    platform={game.parent_platforms}
                    background_image={game.background_image}
                    tag={game.tags}
                />
                </section>
                
                <section
                    className="mt-6 p-3 rounded-lg"
                    style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(52, 58, 64, 0.9)), url("https://media.rawg.io/media/screenshots/25c/25c5df2ef01c233f310c38a8b2e742ed.jpg")'}}
                >
                    <img src={game.background_image} alt={game.name}/>
                    <article className="pt-4">
                        <h3 className="text-[#fffffe] font-bold">Game Info</h3>
                        <Info 
                            developer={game.developers}
                            playTime={game.playtime}
                            genre={game.genres}
                            release={game.released}
                            metacritic={game.metacritic}
                            website={game.website}
                        />
                    </article>
                    <article className="py-4">
                        <h3 className="text-[#fffffe] font-bold">Overview:</h3>
                        <Overview 
                            description={game.description_raw}
                        />
                    </article>
                </section>
                <section className="mt-6 p-3">
                    <h3 className="text-[#020826] font-bold text-xl">Purchase:</h3>
                    {stores}
                </section>
                <section className="mt-3 p-3">
                    <h3 className="text-[#020826] font-bold text-xl">Screenshots:</h3>
                </section>
                <section className="mt-6 p-3">
                    <h3 className="text-[#020826] font-bold text-xl">Similar Titles:</h3>
                </section>
                </div>
            }
        </section>
    )
}