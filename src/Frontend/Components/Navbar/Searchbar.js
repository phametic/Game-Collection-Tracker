import React from 'react';

export default function Searchbar() {
    return(
        <form className="flex justify-center my-4">
           <input
            type="text"
            name="search"
            label="search"
            placeholder="Search Game"
            />
        </form>
    )
}