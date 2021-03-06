import React from 'react';
import {AiFillWindows} from 'react-icons/ai';
import {SiPlaystation, SiXbox, SiNintendo, SiApple, SiLinux} from 'react-icons/si';
import {IoLogoGooglePlaystore} from 'react-icons/io5';
import {GrAppleAppStore} from 'react-icons/gr';
import {FaAppleAlt} from 'react-icons/fa';

export default function Platforms({iconId}) {

    function renderIcon(iconId) {
        switch(iconId) {
            case 1:
                return <span><AiFillWindows/></span>
            case 2:
                return <span><SiPlaystation/></span>
            case 3:
                return <span><SiXbox/></span>
            case 4:
                return <span><GrAppleAppStore/></span>
            case 5:
                return <span><SiApple/></span>
            case 6:
                return <span><SiLinux/></span>
            case 7:
                return <span><SiNintendo/></span>
            case 8:
                    return <span><IoLogoGooglePlaystore/></span>
            case 55:
                    return <span><FaAppleAlt/></span>
            default:
                return <span></span>
        }
    }

    return(
        <span className="mr-2 text-lg text-[#020826]">
            {renderIcon(iconId)}
        </span>
    )
}