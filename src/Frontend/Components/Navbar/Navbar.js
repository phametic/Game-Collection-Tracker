import React from 'react';
import Searchbar from '../Search Bar/Searchbar.js'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <nav className="my-6 w-11/12 mx-auto">
            <Link to="/">
                <p className="text-[#020826] text-lg text-center">Video Game Collection</p>
            </Link>
            <Searchbar />
        </nav>
    )
}