import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const {projectId} = useParams();
    const [project,setProject] = useState([]);
    useEffect(()=>{
        fetch(`/projects.json`)
        .then(res=>res.json())
        .then(data=>{
            const result = data.find( ({ id }) => id === parseInt(projectId) );
            setProject(result);
        })
    },[])
    return (
        <div className='container'>
            <div className='row gx-0'>
                <div className="col-lg-8 border my-4 p-3">
                    <h3>Project Preview {projectId}</h3>
                    <div className='left-container'>
                        <div className='image-container-project'>
                            <img src={project.imgmain} className='container-fluid' alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 my-4 p-3 border">
                    hello
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;