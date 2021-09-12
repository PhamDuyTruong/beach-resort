import React from 'react';
import Hero from '../Components/Hero'
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import Services from '../Components/Services'
import FeatureRooms from '../Components/FeatureRooms';

export default function Home() {
    return (
        <>
          <Hero hero="defaultHero">
                  <Banner title="Luxirous rooms" subtitle="Deluxe rooms starting at $299">
                        <Link to="/rooms" className="btn-primary">
                            Our rooms
                        </Link>
                  </Banner>
          </Hero>
          <Services />
          <FeatureRooms />
        </>
    )
}
