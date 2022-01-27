import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import "./projectDetail.css"

const ProjectDetail = () => {
    const {projectId} = useParams();
    const [project,setProject] = useState([]);
    // const [rerender, setRerender] = useState(false);
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
                <div className="col-lg-8 border my-4 p-3">
                    <h3>Project Preview {projectId}</h3>
                    <div className='left-container'>
                        <div className='image-container-project'>
                            <img src={imageOnView} className='container-fluid' alt="" />
                        </div>
                        <div className='small-container-img d-flex'>
                            {
                                project?.images?.map(image=> <div className='mx-2'>
                                    <button onClick={()=>imageChange(image)}>
                                        <img className='small-img-view' src={image} alt="" />
                                    </button>
                                    
                                </div>)
                                
                            }
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