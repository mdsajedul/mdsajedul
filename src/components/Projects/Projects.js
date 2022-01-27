import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Project from '../Project/Project';

const Projects = () => {
    const [projects, setProjects]=useState([]);
    useEffect(()=>{
        fetch('/projects.json')
        .then(res=>res.json())
        .then(data => {
            setProjects(data)
        })
    },[])
    return (
        <div>
            <div id='myworks'>
                <h3 className='text-center mt-5'>My Works</h3>
                <div>
                    <h4 className='ps-3'>Projects</h4>
                    <div className="row gx-0 mb-5">
                        {
                            projects.map(project => <Project key={project.id} 
                            project={project}
                            ></Project>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;