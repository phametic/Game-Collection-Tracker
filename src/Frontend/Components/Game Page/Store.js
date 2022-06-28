import React from 'react';

export default function Store({id,website}) {

    function storeName(id) {
        switch(id) {
            case 0:
                return <span>{id}</span>
            case 1:
                return <span>Steam</span>
            case 2:
                return <span>{id}</span>
            case 3:
                return <span>Playstation</span>
            case 4:
                return <span>Apple App Store</span>
            case 5:
                return <span>GoG</span>
            case 6:
                    return <span>Nintendo Store</span>
            case 8:
                    return <span>Play Store</span>
            case 11:
                return <span>Epic Games</span>
            default:
                return <span>N/A</span>
        }
    }

    return(
        <a 
            href={website}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 mr-4 text-xl font-bold border-2 border-[#020826] rounded-md px-2 py-2 hover:bg-[#8c7851] hover:text-[#fffffe]"
        >
            {storeName(id)}
        </a>
    
    )
}