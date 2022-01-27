import React from 'react';
import AboutMe from '../About-Me/AboutMe';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import ContactMe from '../Contact-Me/ContactMe';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* {/* <AboutMe></AboutMe> */}
            <Projects></Projects>
            <Blogs></Blogs>
            <ContactMe></ContactMe> 
            
        </div>
    );
};

export default Home;