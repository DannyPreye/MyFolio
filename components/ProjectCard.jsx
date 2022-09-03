import Image from 'next/image';

import { Col } from 'react-bootstrap';

export default function ProjectCard({ title, description, imgUrl }) {
  return (
    <Col size={12} sm={6} md={4}>
      <div className='proj-imgbx'>
        <Image src={imgUrl} alt='' />
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}
