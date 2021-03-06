import React from 'react';
import Platforms from './Platforms.js';
import Rating from './Rating.js'
import AddGameBtn from './AddGameBtn.js';
import Genres from './Genres.js';
import EsrbRating from './EsrbRating';
import { Link } from 'react-router-dom';

export default function GameCard({id, gameName, backgroundImage, platform, metacritic, released, genres, esrb_rating}) {
    //console.log(platform.map((item, index) => (item.platform.id + " " + item.platform.name)))
    
    const platforms = platform.map((item, index) => (
        <Platforms key={item.platform.id} iconId={item.platform.id}/>
    ));

    const genresList = genres.map((item, index) => (
        <span key={item.id}>
            {index > 0 && ", "}
            <Genres genres={item.name}/>
        </span>
    ));

    return(
        <div className="sm:w-96 md:max-w-lg bg-[#fffffe] rounded-lg mx-4 mb-4 Grow border-2 border-[#020826]">
            <img 
                src={backgroundImage}
                alt={gameName}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="px-2 py-2">
                <div className="flex justify-between">
                    <p className="flex">
                        {platforms}
                    </p>
                    <p className="border-2 py-1 px-3 border-[#020826] rounded-lg">
                        <Rating metacritic={metacritic}/>
                    </p>
                </div>
                <Link to={`/game/${id}`}>
                    <p className="text-[#020826] font-bold text-md md:text-[2vw] lg:text-xl">{gameName}</p>
                </Link>
                <AddGameBtn />
            </div>
            <div className="px-2 py-2">
                <div className="flex justify-between border-b-2 border-b-[#020826] pb-2">
                    <p className="text-[#020826]">Release Date: </p>
                    <p className="text-[#020826]">{released}</p>
                </div>
                <div className="flex justify-between border-b-2 border-b-[#020826] pb-2 mt-2">
                    <p className="text-[#020826]">Genres: </p>
                    <p className="text-[#020826]">{genresList}</p>
                </div>
                <div className="flex justify-between mt-2">
                    <p className="text-[#020826]">ESRB Rating: </p>
                    <p className="text-[#020826]"><EsrbRating esrb_rating={esrb_rating}/></p>
                </div>
            </div>
        </div>
    )
}