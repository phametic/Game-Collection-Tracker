import React from 'react';

export default function Screenshot({image_url, gameName}) {
    return(
        <img 
            src={image_url} alt={gameName}
            className="mb-6 md:w-3/12"
        />
    )
}