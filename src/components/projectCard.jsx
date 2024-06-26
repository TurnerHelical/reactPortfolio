import React from 'react';
import Card from 'react-bootstrap/Card';

function ProjectCard({ title, imageUrl, description, link }) {
  return (
    <Card 
      style={{ width: '18rem', cursor: 'pointer' }} 
      onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
    >
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;