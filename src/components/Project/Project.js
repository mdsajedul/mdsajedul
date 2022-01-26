import React from 'react';
import './project.css'

const Project = ({project}) => {
    console.log(project)
    return (
        <div className='col-lg-4 p-3'>
            <div className='project-card'>
                <div className='p-2'>
                    <div>
                        <img src="" alt="project image" />
                    </div>
                    <div>
                        <h6>{project.name}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;