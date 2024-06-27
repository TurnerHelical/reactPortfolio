import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from '../components/projectCard';
import { projectsData } from '../data/projects';
import '../styles/projects.css'

export default function ProjectsPage() {
  return (
    <div id='projectPage'>
    <Container className='text-center'>
      <h1>Project Page</h1>
      <p>This page contains links to the GitHub repostories of some of my completed projects.</p>
      <Row>
      {projectsData.map(project => (
        <ProjectCard
          key={project.id}
          title={project.title}
          imageUrl={project.imageUrl}
          description={project.description}
          link={project.link}/>
      ))}
      </Row>
    </Container>
    </div>
  );
}