import React from 'react';

export default function Platform({platformName, fontSize}) {
    return(
    <span className={`text-[#fffffe] text-${fontSize} font-bold bg-[#716040] px-3 py-1 mt-2 mr-2 rounded-xl`}>
        {platformName}
    </span>
    )
}