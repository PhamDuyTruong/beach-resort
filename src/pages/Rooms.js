import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom'
import RoomContainer from '../Components/RoomContainer';

export default function Rooms() {
    return (
        <>
        <Hero hero="roomsHero">
              <Banner title="Our Rooms" subtitle="">
                <Link to="/" className="btn-primary">
                   return Home
                </Link>
            </Banner>
        </Hero>
        <RoomContainer />
        </>
    )
}
