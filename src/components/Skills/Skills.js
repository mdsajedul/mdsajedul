import React from 'react';
import { Icon } from '@iconify/react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
   
    return (
        <div id="skills" className="container container-style my-5 ">
            <h1 className="text-center my-5 skill-title">Skills</h1>
            <div className="row gy-4">

                {/* programmig languages  */}
                <div className="col-lg-6 ">
                    <div data-aos="flip-left" className=" skill-card mx-2">
                        <div className="d-flex ">
                            <Icon  icon="uil:brackets-curly" color="#7844E9" width="36" height="36" />  
                            <h3 className="ms-1"> Programming Languages</h3>
                        </div>
                        <div className="">
                            <div data-aos="fade-down" className="mini-card">Javascript  <ProgressBar now={90} label={`90%`} /></div>
                            <div data-aos="fade-down" className="mini-card">C++  <ProgressBar now={70} label={`70%`} /></div>
                            <div data-aos="fade-down" className="mini-card">Python  <ProgressBar now={60} label={`60%`} /></div>
                        </div>
                    </div>
                </div>

                {/* frameworks  */}
                <div className="col-lg-6 ">
                    <div data-aos="flip-right" className=" skill-card mx-2">
                        <div className="d-flex ">
                            <Icon  icon="uil:brackets-curly" color="#7844E9" width="36" height="36" />  
                            <h3 className="ms-1"> Frameworks</h3>
                        </div>
                        <div className="">
                            <div data-aos="fade-down"  className="mini-card">ReactJS  <ProgressBar className="pb-style" now={60} label={`60%`} /></div>
                            <div data-aos="fade-down" className="mini-card">ExpressJS
                                 <ProgressBar now={60} label={`60%`} /></div>
                            <div data-aos="fade-down" className="mini-card">NodeJs  <ProgressBar now={60} label={`60%`} /></div>
                        </div>
                    </div>
                </div>

             </div>   
                
                {/* familier languages  */}

            <div className="row my-5">
                <div className="col-lg-6 title-bar">
                    <div className="d-flex ">
                        <Icon  icon="uil:brackets-curly" color="#7844E9" width="36" height="36" />  
                        <h3 className="ms-1"> Familiar Languages</h3>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className=" col-6 col-lg-3">
                            <div className="d-flex flex-column justify-content-center align-items-center icon-bar">
                                <i className=" devicon-c-plain"></i>
                                <p>C</p>
                            </div>
                        </div>
                        <div className=" col-6 col-lg-3">
                            <div className="d-flex flex-column justify-content-center align-items-center icon-bar">
                                <i className="devicon-java-plain"></i>
                                <p>Java</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="d-flex flex-column justify-content-center align-items-center icon-bar">
                                <i className="devicon-php-plain colored"></i>
                                <p>PHP</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="d-flex flex-column justify-content-center align-items-center icon-bar ">
                                <i className="devicon-csharp-plain colored"></i>
                                <p>C#</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/* database  */}

            <div className="row my-5">
                <div className="col-lg-6 title-bar">
                    <div className="d-flex ">
                        <Icon icon="dashicons:database" color="#7844e9" width="36" height="36" /> 
                        <h3 className="ms-1"> Databse</h3>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className=" col-6 col-lg-3">
                            <div className="d-flex flex-column justify-content-center align-items-center icon-bar">
                                <i className="devicon-mysql-plain-wordmark colored"></i>
                                <p>MySQL</p>
                            </div>
                        </div>
                        <div className=" col-6 col-lg-3">
                            <div className="d-flex flex-column justify-content-center align-items-center icon-bar">
                                <i className="devicon-microsoftsqlserver-plain-wordmark colored"></i>
                                <p>MSSQL</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* tools  */}

            <div className="row my-5">
                <div className="col-lg-6 title-bar">
                    <div className="d-flex ">
                        <Icon icon="bx:bx-code-alt" color="#7844e9" width="36" height="36" />
                        <h3 className="ms-1"> Tools</h3>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className=" col-6 col-lg-2">
                            <div className="d-flex flex-column justify-content-center align-items-center icon-bar">
                                <i className="devicon-html5-plain colored"></i>
                                <p>HTML5</p>
                            </div>
                        </div>
                        <div className=" col-6 col-lg-2">
                            <div className="d-flex flex-column justify-content-center align-items-center icon-bar">
                                <i className="devicon-css3-plain colored"></i>
                                <p>CSS3</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2">
                            <div className="d-flex flex-column justify-content-center align-items-center icon-bar">
                                <i className="devicon-bootstrap-plain-wordmark colored"></i>
                                <p>Bootstrap</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2">
                            <div className="d-flex flex-column justify-content-center align-items-center icon-bar ">
                                <i className="devicon-tailwindcss-original-wordmark colored"></i>
                                <p>Tailwindcss</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2">
                            <div className="d-flex flex-column justify-content-center align-items-center icon-bar ">
                                <i className="devicon-git-plain colored"></i>
                                <p>Git</p>
                            </div>
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
export default Skills;