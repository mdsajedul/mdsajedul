import React from 'react';
import FullImage from '../../images/full-image.jpg';
import './aboutMe.css';

const AboutMe = () => {
    return (
        <div id="about">
            <h2 className="text-center mb-5">About Me</h2>

            <div className="container">
                <div className="row mx-2 ">
                    <div className="col d-flex justify-content-center align-items-center">
                        <img className="image-style" src={FullImage} alt="" />
                    </div>
                    <div className="col d-flex justify-content-center ">
                        <div className="about-content">
                            <p className="px-4">My expertise includes problem solving and critical thinking as well as creative and innovative thinking. I love to contribute to the society and learning from experience is my motto that's why I always looking forward for opportunities which will enhance my skills and help me build my future. As a technology lover I enjoy creating new things, solving complex problems by combining technology and computers to accomplish this end</p>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default AboutMe;