import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../styles/resume.css'

export default function ResumePage() {
  return (
    <Container fluid className='p-0'>
      <Row className='text-center py-5' id='resumeTitle'>
        <Col>
          <h1>Resume Page</h1>
          <p>This page contains my skills, education, certificates, and a link to a downloadable copy of my resume.</p>
        </Col>
      </Row>
      <div id='skillSection'>
        <Row className='text-center py-5' >
          <Col>
            <h3>Skills</h3>
          </Col>
        </Row>
        <Row className='text-center pb-5' id='skillList'>
          <Col md={12} lg={4} className="skill-col">
            <h5>Languages</h5>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>SQL</li>
              <li>MQL</li>
            </ul>
          </Col>
          <Col md={12} lg={4} className="skill-col">
            <h5>Frameworks</h5>
            <ul>
              <li>Bootstrap</li>
              <li>Materialize</li>
              <li>REACT</li>
              <li>Node</li>
              <li>Express</li>
            </ul>
          </Col>
          <Col md={12} lg={4} className="skill-col">
            <h5>Other</h5>
            <ul>
              <li>GitHub</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>RESTful API's</li>
              <li>Apollo GraphQL</li>
            </ul>
          </Col>
        </Row>
      </div>

      <div id='eduSection'>
        <Row className='text-center py-5' >
          <Col>
            <h3>Education</h3>
          </Col>
        </Row>
        <Row className='text-center pb-5' id='eduList'>
          <Col md={12} lg={4} className="edu-col">
            <h5>UCF</h5>
            <p>Date Attended: March 2024 - June 2024</p>
            <p>Graduated with Certification</p>
            <p>12 - week intensive bootcamp with a focus on Full Stack Web Development</p>
          </Col>
          <Col md={12} lg={4} className="edu-col">
            <h5>Suncoast Technical College</h5>
            <p>Date Attended: August 2019 - February 2020</p>
            <p>Graduated with A+ and Net+ certifications</p>
            <p>8 -month long course to learn the basics of IT and get the A+ and Net+ certifications</p>
          </Col>
          <Col md={12} lg={4} className="edu-col">
            <h5>Sarasota High School</h5>
            <p>Date Attended: September 2005 - May 2010</p>
            <p>Graduated with High School Diploma</p>
          </Col>
        </Row>
      </div>
      <Row className='text-center py-5' id='empSection'>
        <h3 className='mb-5'>Employment</h3>
        <Col md={12} lg={4} className="emp-col">
          <h5 className='empTitle'>Marco Technologies</h5>
          <p>August 2022 - December 2023</p>
          <ul>
            <li>First contact for end user issues</li>
            <li>Troubleshooting network issues</li>
            <li>Creating and removing user accounts with AD and Azure AD</li>
            <li>Troubleshooting Office 365 issues</li>
            <li>Resolving VPN connectivity problems</li>
            <li>Supporting and configuring network shares</li>
            <li>Diagnosing and resolving remote desktop issues</li>
          </ul>
        </Col>
        <Col md={12} lg={4} className="emp-col">
          <h5 className='empTitle'>MAXhealth</h5>
          <p>October 2020 - December 2021</p>
          <ul>
            <li>Resolving user tickets with CW Automate</li>
            <li>Tracking tickets using CW Manage</li>
            <li>Setup and deployment of new hardware</li>
            <li>Logging and tagging equipment with Asset Panda</li>
            <li>Deploying and supporting VOIP phones with 8x8</li>
            <li>Supporting Office 365 accounts</li>
          </ul>
        </Col>
        <Col md={12} lg={4} className="emp-col">
          <h5 className='empTitle'>Vitil Solutions</h5>
          <p>March 2020 - August 2020</p>
          <ul>
            <li>Imaging devices using SCCM and Ghost </li>
            <li>Diagnosing and repairing computer hardware/software</li>
            <li>Diagnosing and solving network connectivity issues</li>
          </ul>
        </Col>
      </Row>

      <Row className='text-center py-5' id='certSection'>
        <h3>Certificates</h3>
        <h5 className='pt-3'>UCF Coding Boot Camp (Full-Stack Web Development)[Full-Time]</h5>
        <h2 className='mt-3'>Download</h2>
        <Col>
          <a href="https://docs.google.com/document/d/1E4oEbslSumCWTRv1V5xcVACMnuWevZZkxwKBFBTSGQw/edit?usp=sharing" target="_blank">
            <Button variant="primary" className='mt-3'>Download Resume</Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}