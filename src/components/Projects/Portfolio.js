import React, { useEffect, useState } from 'react';
import Project from './Project';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("Projects.json")
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    return (

        <div id='projects'>
            <div className='mb-10'>
                <p className='text-3xl mb-5'>Portfolio</p>
                <h3 className='text-5xl font-semibold'>My Projects:</h3>
            </div>
            <div className='row container mx-auto'>
                {
                    projects.map(project => <Project key={project.id} project={project}></Project>)
                }
            </div>
        </div>

    );
};

export default Portfolio;