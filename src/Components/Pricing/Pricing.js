import { Col, Container, Row } from 'reactstrap'
import './pricing.css'

const Pricing = () => {
    return (
        <Container className='text-center mt-5' id='pricing'>
            <h1 className='mb-3'>Pricing</h1>
            <h4 className='text-muted mb-5'>
                Most such devices are sold with several apps bundled as pre-installed software,
                <br />
                such as a web browser, email client, calendar, mapping program.
            </h4>
            <Row>
                <Col className='offset-lg-1' lg='10' md='12'>
                    <Row>
                        {[
                            { name: 'Basic', price: 10, user: 1, project: 10 },
                            { name: 'Standard', price: 20, user: 3, project: 20, active: true },
                            { name: 'Premium', price: 40, user: 7, project: 10 },
                        ].map((pricing, index) => (
                            <Col md='4' key={index}>
                                <div className={`single-pricing ${pricing.active && 'c-active'}`}>
                                    <h5 className='mb-4'>{pricing.name}</h5>
                                    <h4 className='mb-4'>${pricing.price} /mo</h4>
                                    <ul className='mb-4'>
                                        <li>
                                            {pricing.user} user{pricing.user > 1 && 's'}
                                        </li>
                                        <li>{pricing.project} projects</li>
                                        <li>access to all features</li>
                                        <li>24/7 support</li>
                                    </ul>
                                    <a
                                        href='/'
                                        className='text-white py-3 px-5 fw-bold text-decoration-none'
                                    >
                                        order now
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
