import React from 'react';

export default function Store({name,website}) {
    return(
        <span className="inline-block mt-4 mr-4 text-xl border-2 border-[#020826] px-2 py-2">
            <a href={website}>{name}</a>
        </span>
        
    )
}