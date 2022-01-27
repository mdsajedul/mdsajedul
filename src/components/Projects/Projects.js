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
        <div className='my-3'>
            <div id='myworks'>
                <h3 className='text-center'>My Portfolio</h3>
                <div>
                    <div className="row gx-0">
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