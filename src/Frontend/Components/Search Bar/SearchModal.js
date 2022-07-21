import React from 'react';
import ModalGames from './ModalGames.js';
export default function SearchModal({show, data, loading, setSearchModal, setVal}) {

    const searchGames = data?.map((game) => (
        <ModalGames key={game.id} id={game.id} gameName={game.name} 
            image={game.background_image} platforms={game.parent_platforms}
            setSearchModal={setSearchModal} setVal={setVal}
        />
    ))

    return(
        <div className="w-full h-full bg-[#fffffe] z-10 overflow-auto">
           {show && 
            <div>
                {
                    loading 
                        ? 
                    <h2>Loading Data</h2> 
                        :
                    <section className="mx-4 my-4">
                        <h1 className="text-lg text-[#020826] font-bold">Games - <span className="text-[#f25042]">{data.length}</span></h1>
                            {searchGames}
                    </section>
                }
            </div>
           }
        </div>
    )
}