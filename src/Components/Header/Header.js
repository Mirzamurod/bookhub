import { Col, Container, Row } from 'reactstrap'
import './header.css'

const Header = () => {
    return (
        <div
            id='header'
            className='main-hero-area'
            style={{ backgroundImage: "url('/images/img-home1-hero-bg.jpg')" }}
        >
            <Container>
                <Row>
                    <Col md='6'>
                        <h1 className='c-blue'>
                            A Perfect Landing Page
                            <br />
                            to Present Your App
                        </h1>
                        <p>
                            A mobile app is a computer program designed to run on a<br />
                            mobile device such as a phone/tablet or watch.
                        </p>
                    </Col>
                    <Col md='6' className='position-relative'>
                        <div
                            className='home1-hero-mobile'
                            style={{ visibility: 'visible', animationName: 'fadeInDown' }}
                        >
                            <img
                                src='/images/img-home1-hero-mobile-img.png'
                                alt='rasm'
                                width='100%'
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
