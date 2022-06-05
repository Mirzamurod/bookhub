import { Col, Container, Row } from 'reactstrap'
import './pricing.css'

const Pricing = () => {
    return (
        <Container className='text-center mt-5' id='pricing'>
            <h1 className='mb-3'>Pricing</h1>
            {/* <h4 className='text-muted mb-5'>
                Most such devices are sold with several apps bundled as pre-installed software,
                <br />
                such as a web browser, email client, calendar, mapping program.
            </h4> */}
            <Row>
                <Col className='offset-lg-1' lg='10' md='12'>
                    <Row>
                        {[
                            { name: 'Free', price: '0  so\'m', text: 'Cannot listen to audio books fully' },
                            { name: 'Year', price: '140,000 so\'m', text: 'Access to all audio books yearly', active: true },
                            { name: 'Month', price: '14,000 so\'m', text: 'Access to all audio books monthly' },
                        ].map((pricing, index) => (
                            <Col md='4' key={index}>
                                <div className={`single-pricing ${pricing.active && 'c-active'}`}>
                                    <h5 className='mb-4'>{pricing.name}</h5>
                                    <h4 className='mb-4'>{pricing.price}</h4>
                                    <ul className='mb-4'>
                                        <li>{pricing.text}</li>
                                        <li>24/7 support</li>
                                    </ul>
                                    <a
                                        href='/'
                                        className='text-white py-3 px-5 fw-bold text-decoration-none'
                                    >
                                        Order Now
                                    </a>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Pricing
