import React from 'react';

export default function Rating({metacritic}) {
    
    function ratingColour(rating) {
        if(rating > 0 && rating < 50) {
            return <span className="text-red-500 font-bold">{rating}</span>
        } else if(rating > 50 && rating < 70) {
            return <span className="text-yellow-500 font-bold">{rating}</span>
        } else if(rating > 70) {
            return <span className="text-green-500 font-bold">{rating}</span>
        } else {
            return <span className="text-green-500 font-bold">N/A</span>
        }
    }

    return(
        <>{ratingColour(metacritic)}</>
    )
}