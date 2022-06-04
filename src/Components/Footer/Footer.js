import { Container, Nav, NavItem, NavLink } from 'reactstrap'
import './footer.css'

const Footer = () => {
    return (
        <div id='footer' className='mb-4'>
            <Container>
                <Nav className='justify-content-center'>
                    <NavItem>
                        <NavLink href='#home' className='c-blue'>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#about' className='c-blue'>
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#features' className='c-blue'>
                            Features
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#pricing' className='c-blue'>
                            Pricing
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#contact' className='c-blue'>
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
                <div className='d-flex justify-content-center'>
                    <div>
                        <a href='/'>
                            <img src='https://img.icons8.com/fluency/30/undefined/facebook-new.png' alt='icon' />
                        </a>
                        <a href='/'>
                            <img src='https://img.icons8.com/fluency/30/undefined/instagram-new.png' alt='icon' />
                        </a>
                        <a href='/'>
                            <img src='https://img.icons8.com/fluency/30/undefined/telegram-app.png' alt='icon' />
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer
