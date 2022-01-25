import React from 'react';
import './banner.css'
import Typewriter from 'typewriter-effect';


const Banner = () => {
    return (
        <div id='home' >
            <div className='banner-style'></div>

            <div className="content p-5 ">
                <div className=''>
                    <h4>Hello, My name is</h4>
                    <div className="my-name">
                        <h1>MD. SAJEDUL ISLAM</h1>
                    </div>
                    <div className='auto-type-design'>
                    <Typewriter
                        options={{
                            strings: ['Web Designer', 'Web Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                    </div>
                    <div>
                        <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                    </div>
                    <div>
                        <button className='btn btn-primary'>Download Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;