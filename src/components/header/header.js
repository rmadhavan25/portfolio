import'./header.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component{
    render(){
        return(
            // <div className='header'>
            //     <h2 className='hd-h2'>Madhavan</h2>
            //     <ul className='hd-ul'>
            //         <li className='hd-li-about'><a href='#About'>About</a></li>
            //         <li className='hd-li-work'><a href='#Work'>Work</a></li>
            //         <li className='hd-li-contact'><a href='#Contact'>Contact</a></li>
            //     </ul>   
            // </div>
            <Navbar bg='light' variant='light' expand='lg'sticky='top'>
                <Container>
                    <Navbar.Brand href="#home">Madhavan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Work">Work</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;