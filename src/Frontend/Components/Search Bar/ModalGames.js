import React from 'react'
import Platform from '../Game Card/Platforms.js';
import { Link } from 'react-router-dom';

export default function ModalGames({id, gameName, platforms, image, setSearchModal, setVal}) {

    const platform = platforms?.map((plats) => (
        <Platform key={plats.platform.id} iconId={plats.platform.id}/>
    ));

    function handleClick() {
        setSearchModal(false);
        setVal("");
    }

    return(
        <Link to={`/game/${id}`} onClick={handleClick}>
            <div className="flex flex-row mb-8 items-center">
                <section className="w-16 h-full mr-4 inline-block my-auto">
                    <img src={image} alt={gameName} className="h-12"/>
                </section>
                <section className="">
                    <span className="font-bold flex flex-row">{platform}</span>
                    <h2 className="font-bold">{gameName}</h2>
                </section>
                
            </div>
        </Link>
        
    )
}