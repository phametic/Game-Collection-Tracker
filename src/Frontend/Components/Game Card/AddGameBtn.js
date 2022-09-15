import React, {useState} from 'react';
import axios from 'axios';

export default function AddGameBtn({id, gameTitle, ownedStatus}) {

    const baseUrl = 'http://localhost:9000/api/games'

    //console.log("Owned status: " + ownedStatus);

    const [owned, setOwned] = useState(false);

    const gameData = [{
        gameId: id,
        title: gameTitle,
        owned: owned
    }]

    function handleOnClick() {
        if(!owned) {
            axios.post(`${baseUrl}/add`, gameData)
                .then(() => {
                    setOwned(true);
                    console.log(`Game ${gameTitle} - ID: ${id} added.`);
                })
                .catch(err => {
                    console.log("Error adding game.")
                })
        } else {
            axios.delete(`${baseUrl}/`+ id)
                .then(() => {
                    setOwned(false);
                    console.log(`Game ${gameTitle} - ID: ${id} deleted.`);
                })
                .catch(err => {
                    console.log("Error deleting game.")
                })
        }
    } 
    return(
        <button 
            className="text-[#fffffe] bg-[#2E2E2F] mt-2 rounded-lg px-2 py-1 font-bold"
            onClick={handleOnClick}
        >
            {owned ? "Remove Game" : "Add Game"}
        </button>
    )
}