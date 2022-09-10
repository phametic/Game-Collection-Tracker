import React, {useEffect, useState} from 'react';
import SearchModal from './SearchModal';
import Api from '../../common/Api.js';
import { Link } from 'react-router-dom';

export default function Searchbar() {

    const [search, setSearch] = useState("");
    const [searchModal, setSearchModal] = useState(false);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    function onChange(event) {
        if(event.target.value !== "") {
            setSearch(event.target.value);
            if(!searchModal) {
                setSearchModal(!searchModal);
            }
        } else {
            setSearchModal(!searchModal);
            setSearch("");
        }
    }
    
    const getSearchedGames = async() => {
        try {
            setLoading(true);
            let response = await Api.getSearchedGames(search);
            if(response) {
                console.log("Searched Game data set.");
                console.log(response.results);
                setData(response.results);
                setLoading(false);
            }
        } catch(error) {
            console.log(error);
            setLoading(true);
        }
    }

    useEffect(() => {
        getSearchedGames();
    }, [search]);

    function loseFocus(event) {
        if(event.relatedTarget === null) {
            setSearchModal(false)
        }
    }
    
    function OnSubmit(event) {
        console.log("Data submitted.");
        <Link to={`/search?query=${search}`}>
        </Link>
    }

    return(
        <div>
            <form 
                className="flex justify-center my-4"
                action="/search"
                method="get"
                onSubmit={OnSubmit}
            >
            <input
                type="text"
                name="query"
                id="game-search"
                label="search"
                placeholder="Search For A Game"
                onChange={onChange}
                onBlur={loseFocus}
                onFocus={() => setSearchModal(true)}
                value={search}
            />
                <button type="submit" className="">Search</button>
            </form>
            <SearchModal tabindex={0} show={searchModal} 
                data={data} loading={loading} setSearchModal={setSearchModal}
                setVal={setSearch}
            />
        </div>
    )
}