import React from 'react';
import Platform from './Platform.js';
import Tag from './Tag.js';

export default function Header({gameName, released, platform, tag, background_image}) {
    const year = released.substring(0,4);

    const platforms = platform.map((item, index) => (
        <Platform key={index} platformName={item.platform.name}/>
    ))

    const tags = tag.map((item, index) => (
        <Tag key={item.id} tag={item.name}/>
    ))

    return(
        <header className="">
            <h1 className="text-4xl text-left">{gameName} ({year})</h1>
            <section className="flex justify-start flex-wrap mt-2">
                {platforms}
            </section>
            <section className="mt-6 flex flex-wrap">
                {tags}
            </section>
        </header>
    )
}