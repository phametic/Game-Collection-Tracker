import React from 'react';
import Platform from './Platform';

export default function SameGameCard({gameName, bgImage, platform}) {
    console.log(platform)
    const platforms = platform?.map((item, index) => (
        <Platform key={index} platformName={item.platform.name} fontSize={"sm"}/>
    ))
    return(
            <div 
                className="w-72 h-48 bg-cover bg-center mb-4"
                style={
                    {
                        backgroundImage: `url("${bgImage}")`,
                    }
                }
            >
                <h2 className="text-white font-bold text-lg text-center mt-4">{gameName}</h2>
                <section className="flex flex-wrap justify-center">
                    {platforms}
                </section>
            </div>  
    )
}