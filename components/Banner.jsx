import { useState, useEffect } from 'react';

import Image from 'next/image';

import { Row, Container, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

import headerImg from '../assets/img/header-img.svg';

export default function Banner() {
  const toRotate = [
    'Front-end Developer',
    'Full Stack Developer',
    'Graphic Designer',
  ];

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prev) => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my portfolio</span>
            <h1>
              {"Hi I'm Olawoyin Daniel "} <span className='wrap'> {text}</span>
              <p style={{ marginTop: '3rem' }}>
                Am a knowledgeable Full Stack/Front End Developer adept at
                creating successful websites that meet customer needs.
                Specializing in collaborating with customers to gather
                requirements, produce plans and improve designs for usability
                and functionality. Fully proficient in HTML, CSS and Javascript
                frameworks like React.js and Next.js
              </p>
              <button onClick={() => console.log('')}>
                {' '}
                Let&rsquo;s Connect
                <ArrowRightCircle size={25} />
              </button>
            </h1>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <Image src={headerImg} alt='header image' />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
