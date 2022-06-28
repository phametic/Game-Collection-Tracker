import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../common/Api.js';
import Heading from './Heading.js';
import Info from './Info.js';
import Overview from './Overview.js';
import Store from './Store.js';
import Screenshot from './Screenshot.js';
import SameGameCard from './SameGameCard.js';

export default function GamePage(){
    const { gameId } = useParams();

    const [game, setGame] = useState({})
    const [screenshot, setScreenshot] = useState();
    const [store, setStore] = useState();
    const [similarGameData, setSimilarGameData] = useState();
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

    const getScreenshot = async() => {
        try {
            const response = await Api.getScreenshot(gameId);
            if(response) {
                setScreenshot(response.results);
                console.log("Screenshot data set.");
                console.log(screenshot);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getStores = async () => {
        try {
            const response = await Api.getStore(gameId);
            if(response) {
                setStore(response.results);
                console.log("Store data set.");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getSameSeries = async () => {
        try {
            const response = await Api.getSameSeries(gameId);
            if(response) {
                setSimilarGameData(response.results);
                console.log('Similar game data set.');
            }
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getGame();
        getScreenshot();
        getStores();
        getSameSeries();
    }, []);

    const stores = store?.map((item) => (
        <Store key={item.store_id} id={item.store_id} website={item.url}/>
    ));

    const screenshots = screenshot?.map((item) => (
        <Screenshot image_url={item.image} gameName={game.name} key={item.id}/>
    ));

    const similarGames = similarGameData?.map((game) => (
        <SameGameCard 
            key={game.id} 
            gameName={game.name}
            bgImage={game.background_image}
            platform={game.platforms}
        />
    ));

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
                    className="mx-2 mt-6 p-3 rounded-lg"
                    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(52, 58, 64, 0.9)), url("${game.background_image_additional}")`}}
                >
                    <img src={game.background_image} alt={game.name}/>
                    <article className="pt-4">
                        <h3 className="text-xl text-[#fffffe] font-bold mb-2">Game Info</h3>
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
                        <h3 className="text-xl text-[#fffffe] font-bold mb-2">Overview</h3>
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
                    <h3 className="text-[#020826] font-bold text-xl mb-3">Screenshots:</h3>
                     {screenshots}
                </section>
                <section className="mt-3 p-3">
                    <h3 className="text-[#020826] font-bold text-xl mb-4">Other Games In The Series:</h3>
                    <div className="flex flex-col md:items-center lg:flex-row lg:flex-wrap lg:gap-3 lg:justify-center">
                        {similarGames}
                    </div>
                    
                </section>
                </div>
            }
        </section>
    )
}