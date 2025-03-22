// src/components/Technologies.jsx
import { Container, Card, ListGroup } from 'react-bootstrap';
import './Technologies.css';

export function Technologies() {
  const techList = [
    'React',
    'Vite',
    'React Router',
    'Bootstrap',
    'React Bootstrap',
  ];

  return (
    <Container className="mt-5">
      <Card className="tech-card shadow-lg mx-auto">
        <Card.Body>
          <Card.Title as="h2" className="text-center mb-4">Technologies Used</Card.Title>
          <ListGroup variant="flush">
            {techList.map((tech, index) => (
              <ListGroup.Item
                key={index}
                className="tech-item"
                style={{ '--index': index }}
              >
                {tech}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}