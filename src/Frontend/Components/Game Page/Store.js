import React from 'react';

export default function Store({name,website}) {
    return(
        <a 
            href={"https://" + website}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 mr-4 text-xl font-bold border-2 border-[#020826] rounded-md px-2 py-2 hover:bg-[#8c7851] hover:text-[#fffffe]"
        >
            {name}
        </a>
    
    )
}