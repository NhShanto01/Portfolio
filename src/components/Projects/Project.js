import React from 'react';

const Project = ({ project }) => {
    const { name, type, image, description, links } = project;
    return (

        <div className='container g-3 col-xs-12 col-md-6 col-lg-4'>
            <img src={image} className="img-fluid" alt="" />
            <div className="card-body">
                <div className='mb-5'>
                    <h2 className="card-title text-3xl mb-5">{name}</h2>
                    <p className='text-black'>{type}</p>
                </div>
                <p className='leading-relaxed mb-5'>{description}</p>
                <div className="card-actions row mb-3">
                    {
                        links.map(link => <a key={link.id} className="btn btn-outline-success mb-2" rel="noreferrer" href={link.url} target="_blank"><div>{link.title}</div></a>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Project;