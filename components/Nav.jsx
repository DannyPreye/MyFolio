import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export default function Navigation() {
  const [activeLink, setActiveLink] = useState('');
  const [scrolled, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.screenY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar
      style={{ background: '#212121' }}
      expand='md'
      className={scrolled ? 'scrolled' : ''}
    >
      <Container>
        <Navbar.Brand href='#home'></Navbar.Brand>
        <Image src={Logo} alt='logo' />
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              onClick={() => setActiveLink('home')}
              href='#home'
              className={
                activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              href='#skills'
              className={
                activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'
              }
              onClick={() => setActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              onClick={() => setActiveLink('projects')}
              href='#projects'
              className={
                activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'
              }
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <Link href='#'>
                <a>
                  <Image src={navIcon1} alt='' />
                </a>
              </Link>
              <Link href='#'>
                <a>
                  <Image src={navIcon2} alt='' />
                </a>
              </Link>
              <Link href='#'>
                <a>
                  <Image src={navIcon3} alt='' />
                </a>
              </Link>
            </div>
            <button className='vvd' onClick={() => console.log('contact us')}>
              {' '}
              <span>Let&rsquo;s Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
