import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGithub, FaLinkedin, FaReact } from 'react-icons/fa';
import '../styles/footer.css'

export default function Footer() {
    return (
        <>
            <footer>
                <Container className='py-5'>
                    <Row className='text-center justify-content-center' id='footer'>
                        <p>Thanks for visiting! Here are some links where you can find more of me! </p>

                       <Col className='col-auto'>
                       <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub size={50} /></a>
                       </Col>

                       <Col className='col-auto'>
                       <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin size={50} /></a>
                       </Col>
                        <p>This site was created with REACT</p>

                        <Col>
                        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer"><FaReact size={30} /></a>
                        </Col>

                    </Row>
                </Container>
            </footer>
        </>
    )
}