import React from 'react';

export default function Info({developer, playTime, genre, release, metacritic, website}) {
    
    const genres = genre.map((item, index) => (
        <span key={item.id}> {item.name} </span>
    ));

    const headingStyle = "font-bold text-[#fffffe]";
    const infoStyle = "text-[#fffffe]"
    return(
        <div>
            <p className={infoStyle}><span className={headingStyle}>Company:</span> {developer[0].name}</p>
            <p className={infoStyle}><span className={headingStyle}>Playtime:</span> {playTime}</p>
            <p className={infoStyle}><span className={headingStyle}>Genre:</span> {genres}</p>
            <p className={infoStyle}><span className={headingStyle}>Release:</span> {release}</p>
            <p className={infoStyle}><span className={headingStyle}>Metacritic:</span> {metacritic}</p>
            <p className={`truncate ${infoStyle} md:whitespace-normal`}><span className={headingStyle}>Website:</span> {website}</p>
        </div>
    )
}