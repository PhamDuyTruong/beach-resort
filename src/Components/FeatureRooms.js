import React, { Component } from 'react';
import {RoomContext} from '../context';
import Title from './Title';
import Loading from './Loading';
import Room from './Room';


export default class FeatureRooms extends Component {

    static contextType = RoomContext
    render() {
        const {loading, featuredRooms: rooms} = this.context;
        this.rooms = rooms.map(room =>{
            return <Room key={room.id} room={room}/>
        })
        return (
            <section className="featured-rooms">
                <Title title="Features Room"/>
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : this.rooms}
                </div>
              
            </section>
        )
    }
}

