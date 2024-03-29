import Header from '../components/Header/Header'
import Divider from '../components/Divider/Divider'
import ProjectCard from '../components/ProjectCard/ProjectCard';
import projectCards from '../data/ProjectCards.js';
import { Outlet } from 'react-router-dom';

const mySummary = `Hey there, I am Sammy, a passionate software engineer who loves to work on
  everything from robotics, AI, websites, to game development! Welcome to my portfolio showcase.
  If anything sparks your interest feel free to contact me. I am open for work and networking!`;

const Home = () => {
  return (
    <div>
      <p style={{margin: '20px 0px'}}>{mySummary}</p>
      <Divider />
      <h1>
        Skillset
      </h1>
      <h1>
        Featured Projects
      </h1>
      {projectCards.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.projectTitle}
            projectDescription={project.projectDescription}
            projectLocation={project.projectLocation}
            projectDate={project.projectDate}
            projectTools={project.projectTools}
            tags={project.tags}
            url={project.url}
          />
      ))}
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Home