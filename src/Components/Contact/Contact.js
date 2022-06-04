import { useState } from 'react'
import { Button, Col, Container, Form, Input, Row } from 'reactstrap'
import './contact.css'

const Contact = () => {
    const [form, setForm] = useState({ fullname: '', email: '', subject: '', message: '' })

    const onSubmit = e => {
        e.preventDefault()
        console.log(form)
        setForm({ fullname: '', email: '', subject: '', message: '' })
    }

    return (
        <div id='contact' className='counter-area'>
            <Container>
                <h1 className='text-center text-white mb-3'>Contact US</h1>
                <h4 className='text-center text-light mb-5'>
                    Most such devices are sold with several apps bundled as pre-installed software,
                    <br />
                    such as a web browser, email client, calendar, mapping program.
                </h4>
                <Row>
                    <Col md='6' className='offset-lg-1 h-100'>
                        <Form onSubmit={onSubmit}>
                            <Row>
                                <Col md='6' className='p-2'>
                                    <Input
                                        placeholder='Full Name'
                                        name='fullname'
                                        bsSize='lg'
                                        value={form.fullname}
                                        onChange={e =>
                                            setForm({ ...form, fullname: e.target.value })
                                        }
                                    />
                                </Col>
                                <Col md='6' className='p-2'>
                                    <Input
                                        placeholder='Email'
                                        type='email'
                                        name='email'
                                        bsSize='lg'
                                        value={form.email}
                                        onChange={e => setForm({ ...form, email: e.target.value })}
                                    />
                                </Col>
                                <Col md='12' className='p-2'>
                                    <Input
                                        placeholder='Subject'
                                        name='subject'
                                        bsSize='lg'
                                        value={form.subject}
                                        onChange={e =>
                                            setForm({ ...form, subject: e.target.value })
                                        }
                                    />
                                </Col>
                                <Col md='12' className='p-2'>
                                    <Input
                                        placeholder='Message'
                                        type='textarea'
                                        name='message'
                                        rows='5'
                                        bsSize='lg'
                                        value={form.message}
                                        onChange={e =>
                                            setForm({ ...form, message: e.target.value })
                                        }
                                    />
                                </Col>
                                <Col md='12' className='p-2'>
                                    <Button type='submit' className='w-100 border-0' size='lg'>
                                        Send message
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col lg='4' md='6' className='p-2 h-auto'>
                        <div className='bg-white text-black h-100 px-5 pt-5'>
                            <div>
                                <div className='mb-4'>
                                    <h5>Phone</h5>
                                    <a
                                        href='/'
                                        className='text-black text-decoration-none c-blue-hover c-blue'
                                    >
                                        435 408 9068
                                    </a>
                                </div>
                                <div className='mb-4'>
                                    <h5>Email</h5>
                                    <a
                                        href='/'
                                        className='text-black text-decoration-none c-blue-hover c-blue'
                                    >
                                        Contact admin
                                    </a>
                                </div>
                                <div className='mb-4'>
                                    <h5>Address</h5>
                                    <p>3145 Beeghley Street Valley Mills Texas 76689</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact
