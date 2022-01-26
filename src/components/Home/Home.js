import React from 'react';
import AboutMe from '../About-Me/AboutMe';
import Banner from '../Banner/Banner';
import ContactMe from '../Contact-Me/ContactMe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* {/* <AboutMe></AboutMe> */}
            <ContactMe></ContactMe> 
        </div>
    );
};

export default Home;