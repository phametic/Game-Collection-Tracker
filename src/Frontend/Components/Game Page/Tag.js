import React from 'react';

export default function Genre({tag}) {
    return(
        <span className="text-[#fffffe] text-sm font-bold bg-[#f25042] px-2 py-1 mt-2 mr-2 rounded-xl">
            {tag}
        </span>
    )
}