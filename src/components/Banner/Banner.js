import React from 'react';
import './banner.css'
import Typewriter from 'typewriter-effect';
import banner from '../../images/banner.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import resume from '../../utilities/resume.pdf';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Banner = () => {
    const downloadIcon = <FontAwesomeIcon icon={faChevronDown} />
    return (
        <div id='home' >
           <div className="row gx-0 mt-3">
               <div className="col-lg-6">
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
                            <a className="btn-download-resume" data-aos="fade-down" target="_blank" rel="noreferrer" href={resume}>Resume {downloadIcon}</a>
                            </div>
                        </div>
                    </div>
               </div>
               <div className="col-lg-6">
                    <img className='banner-img container-fluid p-3' src={banner} alt="" />
               </div>
           </div>

           
        </div>
    );
};

export default Banner;