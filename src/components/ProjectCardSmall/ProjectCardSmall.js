import './ProjectCardSmall.css'
import myImage from '../../pages/Projects/test_image.png'

const ProjectCardSmall = () => {
  return (
    <div className='project-card-small-container' style={{backgroundImage: `url(${myImage})`}}>
        <div className='project-card-small-info-div'>
          <p className='project-card-small-title'>
            PROJECT NAME
          </p>
          <p>
            Project Description
          </p>
        </div>
    </div>
  )
}

export default ProjectCardSmall