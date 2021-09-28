import React from 'react';
import FullImage from '../../images/full-image.jpg';
import './aboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import resume from '../../utilities/resume.pdf';

const AboutMe = () => {
    const downloadIcon = <FontAwesomeIcon icon={faChevronDown} />
    const downloadCv =()=>{

    }

    return (
        <div id="about" className="about-me">
            <h2 className="text-center mb-5 about-me-header">About Me</h2>

            <div className="container">
                <div className="row mx-2 ">
                    <div data-aos="fade-right" className="col d-flex justify-content-center align-items-center py-3">
                        <img className="image-style" src={FullImage} alt="" />
                    </div>
                    <div className="col d-flex justify-content-center py-3">
                        <div className="about-content" data-aos="fade-left">
                            <h4 className="about-name">I am <span>Sajedul</span></h4>
                            <p><b>A passionate web designer and Font-end Web developer</b></p>
                            <p className="">My expertise includes problem solving and critical thinking as well as creative and innovative thinking. I love to contribute to the society and learning from experience is my motto that's why I always looking forward for opportunities which will enhance my skills and help me build my future. As a technology lover I enjoy creating new things, solving complex problems by combining technology and computers to accomplish this end
                            </p>
                            <a className="btn-download" data-aos="fade-down" target="_blank" href={resume}>Resume {downloadIcon}</a>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};
AOS.init({
    duration: 600,
    offset: 100,
    easing: 'ease',
    once: false, 
    mirror: false, 
    anchorPlacement: 'top-bottom',
});
export default AboutMe;