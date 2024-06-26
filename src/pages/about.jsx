import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../assets/Dark_Logo.png';
import myPicture from '../assets/myPicture.JPEG'
import '../styles/about.css'

export default function AboutPage() {
  return (
    <>
      <div id='welcomeDiv'>
        <Container >
          <Row className="align-items-center justify-content-center " id='welcomeRow' >
            <Col xs={12} md={5} lg={4} className="image-col" id='welcomeImage'>
              <Image src={logo} alt="Logo" fluid />
            </Col>
            <Col xs={12} md={7} lg={6} className="text-col">
              <h1 className='fancy welcomeTitle'>WELCOME TO MY SITE</h1>
              <p>Thanks for visiting my site! My name is Hunter LeClair and I'm a full stack developer. I recently completed the UCF Coding Bootcamp and I'm searching for my start in web development. Feel free to look around my site and view previous projects, my resume, or contact me if you have any questions. Thanks!</p>
            </Col>
          </Row>
        </ Container >
      </div>
      <div id='tech' >
        <Container >
          <Row className='justify-content-center text-center' >
            <h3>Technologies I Use</h3>
            <p>I'm confident in the listed technologies but know that there is always more to learn and look forward to getting better and discovering new ones to use.</p>
            <Col>
              <h4>Frontend</h4>
              <ul >
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>REACT</li>
                <li>Bootstrap</li>
                <li>MUI</li>
                <li>and More</li>
              </ul>
            </Col>
            <Col>
              <h4>Backend</h4>
              <ul>
                <li>Node js</li>
                <li>Express js</li>
                <li>Postgres</li>
                <li>MongoDB</li>
                <li>GraphQL</li>
                <li>and More</li>
              </ul>
            </Col>
          </Row>
        </ Container>
      </div>
      <div id='about'>
        <Container >
          <Row className='justify-content-center text-center align-items-center' >
            <h3>About Me</h3>
            <Col xs={12} md={7} lg={6} className="text-col">
              <h4>Personal Life</h4>
              <p>I'm a born and raised Floridian and still live here with my kids. Like any good Floridian when it's the weekend I'm most likely at the beach or on the water. I'm a big sports guy and enjoy most sports but my favorite is College Football with FSU being my team. My other teams are the Rays, Buccaneers, and the Lightning</p>

            </Col>
            <Col xs={12} md={5} lg={4} className="image-col" id='myImage'>
              <Image src={myPicture} alt="Logo" roundedCircle fluid />
            </Col>
          </ Row>
        </Container>
      </div>
    </>
  )
}