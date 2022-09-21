import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function AddGameBtn({id, gameTitle, ownedStatus, setOwnedStatus}) {

    const baseUrl = 'http://localhost:9000/api/games'

    //console.log("Owned status: " + ownedStatus);

    const gameData = [{
        gameId: id,
        title: gameTitle,
        owned: true
    }]
    
    function handleOnClick() {
        if(!ownedStatus) {
            setOwnedStatus(true);
            axios.post(`${baseUrl}/add`, gameData)
                .catch(err => {
                    console.log("Error adding game.")
                })
                console.log(`Game ${gameTitle} - ID: ${id} added.`);
                console.log("Owned Status: " + ownedStatus)
        } else {
            setOwnedStatus(false);
            axios.delete(`${baseUrl}/`+ id)
                .catch(err => {
                    console.log("Error deleting game.")
                })
                console.log(`Game ${gameTitle} - ID: ${id} deleted.`);
                console.log("Owned Status: " + ownedStatus)
        }
    } 
    return(
        <button 
            className="text-[#fffffe] bg-[#2E2E2F] mt-2 rounded-lg px-2 py-1 font-bold"
            onClick={handleOnClick}
        >
            {ownedStatus ? "Remove Game" : "Add Game"}
        </button>
    )
}