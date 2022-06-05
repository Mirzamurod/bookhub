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
                        <h1 className='c-blue display-1'>
                            Bookhub
                        </h1>
                        <h4>
                            It is not a bookcase. Find your desired book.<br/>Read and listen it anywhere at any time.
                        </h4>
                    </Col>
                    <Col md='6' className='position-relative'>
                        <div
                            className='home1-hero-mobile text-center'
                            style={{ visibility: 'visible', animationName: 'fadeInDown' }}
                        >
                            <img
                                src='/images/header.png'
                                alt='rasm'
                                width='260px'
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
