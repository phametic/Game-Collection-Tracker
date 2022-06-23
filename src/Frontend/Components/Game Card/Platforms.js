import React from 'react';
import {AiFillWindows} from 'react-icons/ai'
import {SiPlaystation, SiXbox, SiNintendo, SiApple, SiLinux} from 'react-icons/si'

export default function Platforms({iconId}) {

    function renderIcon(iconId) {
        switch(iconId) {
            case 1:
                return <span><AiFillWindows/></span>
            case 2:
                return <span><SiPlaystation/></span>
            case 3:
                return <span><SiXbox/></span>
            case 5:
                return <span><SiApple/></span>
            case 6:
                return <span><SiLinux/></span>
            case 7:
                return <span><SiNintendo/></span>
            default:
                return <span>N/A</span>
        }
    }

    return(
        <span className="mr-2 my-2 text-lg text-[#020826]">
            {renderIcon(iconId)}
        </span>
    )
}