import React from 'react';
import ModalGames from './ModalGames.js';

export default function SearchModal({show, data}) {

    const searchGames = data?.map((game) => (
        <ModalGames key={game.id} gameName={game.name}/>
    ))

    return(
        <div className="w-full h-full bg-[#fffffe] z-10 overflow-auto">
           {show && 
            <div>
                <h1>Games {data.length}</h1>
                {searchGames}
            </div>
           }
        </div>
    )
}