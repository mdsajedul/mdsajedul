import React from 'react';
import { Icon } from '@iconify/react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
   
    return (
        <div className="container container-style my-5 ">
            <h1 className="text-center my-5 skill-title">Skills</h1>
            <div className="row gy-4">
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
                <div className="col-lg-6 ">
                    <div data-aos="flip-right" className=" skill-card mx-2">
                        <div className="d-flex ">
                            <Icon  icon="uil:brackets-curly" color="#7844E9" width="36" height="36" />  
                            <h3 className="ms-1"> Familiar  Languages</h3>
                        </div>
                        <div className="">
                            <div data-aos="fade-down"  className="mini-card">C  <ProgressBar className="pb-style" now={60} label={`60%`} /></div>
                            <div data-aos="fade-down" className="mini-card">C#  <ProgressBar now={60} label={`60%`} /></div>
                            <div data-aos="fade-down" className="mini-card">Java  <ProgressBar now={60} label={`60%`} /></div>
                            <div data-aos="fade-down" className="mini-card">Php  <ProgressBar now={60} label={`60%`} /></div>
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