import React from 'react';
import Banner from '../Banner/Banner';
import HappyClients from '../HappyClients/HappyClients';
import Tours from '../Tours/Tours/Tours';
import Subscribe from './Subscribe/Subscribe';
import WhySS from './WhySS/WhySS';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tours></Tours>
            <WhySS></WhySS>
            <HappyClients></HappyClients>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;