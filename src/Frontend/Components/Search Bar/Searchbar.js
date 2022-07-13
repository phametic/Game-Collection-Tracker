import React, {useEffect, useState} from 'react';
import SearchModal from './SearchModal';
import Api from '../../common/Api.js';

export default function Searchbar() {

    const [search, setSearch] = useState("");
    const [searchModal, setSearchModal] = useState(false);
    const [data, setData] = useState({});

    function onChange(event) {
        if(event.target.value !== "") {
            setSearch(event.target.value);
            if(!searchModal) {
                setSearchModal(!searchModal);
            }
        } else {
            setSearchModal(!searchModal);
        }
    }
    
    const getSearchedGames = async() => {
        try {
            let response;
            response = await Api.getSearchedGames(search);
            if(response) {
                console.log("Searched Game data set.");
                console.log(response.results);
                setData(response.results);
            }
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSearchedGames();
    }, [search])

    return(
        <div>
            <form 
                className="flex justify-center my-4"
                action="/"
                method="get"
            >
            <input
                type="text"
                name="search"
                id="game-search"
                label="search"
                placeholder="Search For A Game"
                onChange={onChange}
                
            />
                <button type="submit">Search</button>
            </form>
            <SearchModal show={searchModal} data={data}/>
        </div>
    )
}