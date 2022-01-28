import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import "./projectDetail.css"

const ProjectDetail = () => {
    const {projectId} = useParams();
    const [project,setProject] = useState([]);
    const [imageOnView,setImageOnView]=useState('')

    useEffect(()=>{
        fetch(`/projects.json`)
        .then(res=>res.json())
        .then(data=>{
            const result = data.find( ({ id }) => id === parseInt(projectId) );
            setProject(result);
            setImageOnView(result.imgmain);
        })
    },[projectId])



    const imageChange=(imageUrl)=>{
        setImageOnView(imageUrl)
        console.log(imageOnView)
    }

    return (
        <div className='container'>
            <div className='row gx-0'>
                <div className="col-lg-8 my-4 p-3">
                    <h3>Project Preview </h3>
                    <div className='left-container'>
                        <div className='image-container-project'>
                            <img src={imageOnView} className='container-fluid' alt="" />
                        </div>
                        <div className='small-container-img d-flex flex-wrap my-4'>
                            {
                                project?.images?.map(image=> <div className='mx-2'>
                                    <button className='small-img-btn' onClick={()=>imageChange(image)}>
                                        <img className='small-img-view' src={image} alt="" />
                                    </button>
                                    
                                </div>)
                            }
                        </div>
                        <hr />
                        <div>
                            <h2>{project.name}</h2>
                            <p>{project.subheading}</p>
                            <h4>Overview</h4>
                            
                            <ul>
                                {
                                    project?.overview?.map(list=> <li>{list}</li>)
                                }
                            </ul>
                            <h5>Technology</h5>
                            <p>{project.technology}</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 my-4 p-3">
                    <div className='preview-btn-grp pe-4 text-center'>
                        <a className='preview-btn' href={project.liveLink}><i class="far icon-fa fa-eye"></i>  Live Preview</a>
                        <a className='preview-btn' href={project.githubClient}><i class="fab icon-fa fa-github"></i> Github Client</a>
                        {
                            project.githubServer!==''?  <a className='preview-btn' href={project.githubServer}><i class="fab icon-fa fa-github"></i> Github Server</a>
                            :
                            <p className='not-found-btn'>Server Not Found</p>

                        }
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;