import React from 'react'
import PropTypes from 'prop-types'
import './ProjectCard.css'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const tagColors = {
    'AI ML': 'rgb(255, 255, 100)',
    'Full Stack': 'rgb(100, 100, 255)',
    'Website': 'rgb(100, 150, 150)',
    'Game Development': 'rgb(255, 100, 100)',
    'Data Analytics': 'rgb(213, 26, 150)'
};  

const ProjectCard = (props) => {
  return (
    <div className='project-card-container'>
        <p className='project-card-title'>{props.projectName}</p>
        <p className='project-card-location'>{props.projectLocation}</p>
        <p className='project-card-date'>{props.projectDate}</p>
        <div style={{margin: '0px 0px'}}>
            {props.tags.map((tag, index) => (
                <button key={index} className='project-card-tag' style={{backgroundColor: tagColors[tag]}}>
                    {tag}
                </button>
            ))}
        </div>
        <div style={{margin: '0px 0px'}}>
            {props.projectTools.map((tool, index) => (
                <button key={index} className='project-card-tool'>
                    {tool}
                </button>
            ))}
        </div>
        <ul>
            {props.projectDescription.map((desc, index) => (
                <li key={index} className='project-card-description'>
                    {desc}
                </li>
            ))}
        </ul>
        <Link to={props.url}>
            <button className='project-card-learn-more'>
                Learn more
            </button>
        </Link>
    </div>
  )
}

ProjectCard.defaultProps = {
    projectName: 'Project Name',
    projectDate: 'MM-YYYY - MM-YYYY',
    projectLocation: '',
    projectDescription: ['Project Description'],
    projectTools: ['Full Stack', 'Website'],
    tags: ['AI-ML', 'Full-Stack', 'Website', 'Game-Development']
}

ProjectCard.propTypes = {
    projectName: PropTypes.string,
    projectDate: PropTypes.string,
    projectLocation: PropTypes.string,
    projectDescription: PropTypes.arrayOf(PropTypes.string),
    projectTools: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string)
}

export default ProjectCard