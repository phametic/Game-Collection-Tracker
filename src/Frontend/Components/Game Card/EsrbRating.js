import React from 'react';

export default function EsrbRating({esrb_rating}) {
    function esrbRating(esrbRating) {
        if(esrbRating != null) {
            return <span>{esrbRating.name}</span>
        } else {
            return <span>N/A Rating</span>
        }
    }
    return(
        <span>{esrbRating(esrb_rating)}</span>
    )
}