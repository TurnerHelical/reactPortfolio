import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/footer.css'

export default function Footer() {
    return (
        <>
            <footer>
                    <Container>
                        <Row className='text-center' id='footer'>
                            <p>Thanks for visiting! Here are some links where you can find more of me! </p>
                            

                        </Row>
                    </Container>
            </footer>        
        </>
    )
}