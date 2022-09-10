import React, {useState, useEffect} from 'react';
import Searchbar from '../Search Bar/Searchbar.js'
import { Link } from 'react-router-dom';
import Api from '../../common/Api.js';

export default function Navbar() {

    const [data, setData] = useState();

    const getNewestGames = async () => {
        try {
            const response = await Api.callNewestGame();
            if(response) {
                setData(response);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getNewestGames();
    }, [])

    if(!data || data.length < 0) {
        return <div>Loading...</div>
    }

    return(
        <nav className="my-6 w-11/12 mx-auto h-64 bg-cover" 
            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(52, 58, 64, 0.9)), url("${(data[0] || []).background_image}")`}}
        >
            <section className="flex flex-row justify-evenly items-center h-56">
                <Link to="/">
                    <p className="text-[#FFFFFF] text-lg">Video Game Collection</p>
                </Link>
                <Link to="">
                    <p className="text-[#FFFFFF] text-lg font-bold">My Games List</p>
                </Link>
            </section>
            
            <Searchbar />
        </nav>
    )
}