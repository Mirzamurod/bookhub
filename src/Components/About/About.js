import { Card, CardText, Col, Container, Row } from 'reactstrap'
import './about.css'

const About = () => {
    return (
        <div id='about' className='mt-4 mb-5'>
            <Container>
                <Row>
                    <Col md='12' className='text-center'>
                        <h2 className=' pt-2 pb-3'>About the App</h2>
                        {/* <p className='text-muted'>
                            "Our aim to promote reading, selling and exchanging books easily, encourage education, parental  "
                        </p> */}
                    </Col>
                    {[
                        {
                            h4: '24/7 Support',
                            text: 'Apps that are not preinstalled are usually available through distribution platforms called app stores.',
                        },
                        {
                            h4: 'Data Privacy',
                            text: 'Apps that are not preinstalled are usually available through distribution platforms called app stores.',
                        },
                        {
                            h4: 'User Friendly',
                            text: 'Apps that are not preinstalled are usually available through distribution platforms called app stores.',
                        },
                    ].map(card => (
                        <Col md='4' key={card.h4}>
                            <Card body className='text-center p-5 border-0'>
                                <h4 className='mt-5 mb-2'>{card.h4}</h4>
                                <CardText>{card.text}</CardText>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default About
