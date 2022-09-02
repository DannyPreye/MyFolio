import Image from 'next/image';

import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';

import { projects } from './project';
import { ProjectCard } from './ProjectCard';

import colorSharp from '../assets/img/color-sharp2.png';

export default function Projects() {
  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p></p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav variant='pills' defaultActiveKey='/home'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third' disabled>
                    Tab three
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {projects.map((project, index) => {
                      return;
                      <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey='second'>Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey='third'>Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <Image className='background-image-right' src={colorSharp} alt='' />
    </section>
  );
}
