import React, {useState, useEffect} from 'react';
import Api from '../../common/Api.js';

export default function UserGamePage() {

    const [gameList, setGameList] = useState();
    const [loading, setLoading] = useState(true);

    const getGameList = async() => {
        try {
            setLoading(true);
            const response = await Api.getGamesListFromDB();
            if(response) {
                console.log(response)
                setGameList(response.data);
                console.log("Game List Pulled from MongoDB.");
                setLoading(false);
            }
        } catch(error) {
            console.log(error);
            setLoading(true);
        }
    }

    useEffect(() => {
        getGameList();
    }, []) 

    if(loading || !gameList || gameList.length < 0) {
        return <h1 className="text-3xl text-white">Loading.... Please Wait.</h1>
    }
    
    return(
        <div>
            <h1 className="text-white text-3xl">List of Added Games</h1>
        </div>
        
    )
}