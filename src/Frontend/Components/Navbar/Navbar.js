import React from 'react';
import Searchbar from './Searchbar.js'

export default function Navbar() {
    return(
        <nav className="my-6 w-11/12 mx-auto">
            <p className="text-[#020826] text-lg text-center">Video Game Collection</p>
            <Searchbar />
        </nav>
    )
}