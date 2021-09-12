import React from 'react';
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default function Services() {

    const state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktail",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestias illo dolore accusantium facilis ducimus similique mollitia molestiae magni quis deserunt, odio corrupti numquam totam adipisci culpa assumenda, harum aliquam?"
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestias illo dolore accusantium facilis ducimus similique mollitia molestiae magni quis deserunt, odio corrupti numquam totam adipisci culpa assumenda, harum aliquam?"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestias illo dolore accusantium facilis ducimus similique mollitia molestiae magni quis deserunt, odio corrupti numquam totam adipisci culpa assumenda, harum aliquam?"
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestias illo dolore accusantium facilis ducimus similique mollitia molestiae magni quis deserunt, odio corrupti numquam totam adipisci culpa assumenda, harum aliquam?"
            }
        ]
    }
    return (
        <section className="services">
            <Title title="Services"/>
            <div className="services-center">
                {state.services.map((item, index) =>{
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
        </section>
    )
}
