import { Col, Container, Row } from 'reactstrap'
import './features.css'

const Features = () => {
    const text = 'Most such devices are sold with apps bundled as installed.'

    return (
        <div id='features' className='counter-area'>
            <Container>
                <Row>
                    <Col md='3'>
                        <img
                            src='/images/phone.png'
                            alt='phone'
                            height={600}
                            className='w-100 border rounded'
                        />
                    </Col>
                    <Col lg='8' md='12' className='offset-lg-1'>
                        <h1 className='text-white mb-5'>Features</h1>
                        <Row>
                            <Col md='6'>
                                {[
                                    'Used bookstore',
                                    'Exchange books',
                                    'Audio books',
                                    'Creative Design',
                                ].map((h4, index) => (
                                    <div className='featured-single' key={index}>
                                        <img
                                            src={`/images/img-featured-icon${index + 1}.png`}
                                            alt='rasm'
                                        />
                                        <div className='featured-single-text'>
                                            <h4 className='text-white'>{h4}</h4>
                                            <p className='text-light'>{text}</p>
                                        </div>
                                    </div>
                                ))}
                            </Col>
                            <Col md='6'>
                                {[
                                    'Unlimited Features',
                                    'Easy Installation',
                                    'Easy to use',
                                    'Earn money',
                                ].map((h4, index) => (
                                    <div className='featured-single' key={index}>
                                        <img
                                            src={`/images/img-featured-icon${index + 5}.png`}
                                            alt='rasm'
                                        />
                                        <div className='featured-single-text'>
                                            <h4 className='text-white'>{h4}</h4>
                                            <p className='text-light'>{text}</p>
                                        </div>
                                    </div>
                                ))}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Features
