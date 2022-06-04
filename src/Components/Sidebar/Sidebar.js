import { useState } from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'

const Sidebar = () => {
    const [isOpen, setIsopen] = useState(false)

    return (
        <Navbar
            color='light'
            light
            expand='md'
            container
            id='sidebar'
            className='position-fixed w-100'
            style={{ zIndex: 99 }}
        >
            <NavbarBrand href='/' className='c-blue'>Bookhub</NavbarBrand>
            <NavbarToggler onClick={() => setIsopen(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink href='#home' className='c-blue-hover'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#about' className='c-blue-hover'>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#features' className='c-blue-hover'>Features</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#pricing' className='c-blue-hover'>Pricing</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#contact' className='c-blue-hover'>Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sidebar
