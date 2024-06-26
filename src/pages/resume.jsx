import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function ResumePage() {
  return (
    <Container fluid>
      <h1>Resume Page</h1>
      <p>This page contains my skills, education, certificates, and a downloadable copy of my resume.</p>

      <Row>
        <h3>Skills</h3>
        <Col>
          <h4>Languages</h4>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>SQL</li>
            <li>MQL</li>
          </ul>
        </Col>
        <Col>
          <h4>Frameworks</h4>
          <ul>
            <li>Bootstrap</li>
            <li>Materialize</li>
            <li>REACT</li>
            <li>Node</li>
            <li>Express</li>
          </ul>
        </Col>
        <Col>
          <h4>Other</h4>
          <ul>
            <li>GitHub</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>RESTful API's</li>
            <li>Apollo GraphQL</li>
          </ul>
        </Col>
      </Row>

      <Row>
        <h3>Education</h3>
        <Col>
          <h4>UCF</h4>
          <p>Date Attended: March 2024 - June 2024</p>
          <p>Graduated with Certification</p>
          <p>12 - week intensive bootcamp with a focus on Full Stack Web Development</p>
        </Col>
        <Col>
          <h4>Sarasota High School</h4>
          <p>Date Attended: September 2005 - May 2010</p>
          <p>Graduated with High School Diploma</p>
        </Col>
      </Row>

      <Row>
        <h3>Certificates</h3>
        <h4>UCF Coding Boot Camp (Full-Stack Web Development)[Full-Time]</h4>
      </Row>

      <Row>
        <h2>Download</h2>
        <Col>
          <a href="https://docs.google.com/document/d/1E4oEbslSumCWTRv1V5xcVACMnuWevZZkxwKBFBTSGQw/edit?usp=sharing" download>
            <Button variant="primary">Download Resume</Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}