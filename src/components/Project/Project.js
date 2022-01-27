import React from 'react';
import './project.css'

const Project = ({project}) => {
    console.log(project.imgmain)
    return (
        <div className='col-lg-4 p-3'>
            <div className='project-card'>
                <div className='p-2'>
                    <div className='img-container'>
                        <img className='container-fluid card-img' src={project.imgmain} alt="project" />
                    </div>
                    <div className='card-content' onClick=''>
                        <h5>{project.name}</h5>
                        <p>{project.subheading}</p>
                        <div className='card-btn'>
                             <i style={{fontSize:"25px" }} class="fas fa-arrow-right"></i>
                        </div>

                    </div>
                </div>
               
                
            </div>
        </div>
    );
};

export default Project;