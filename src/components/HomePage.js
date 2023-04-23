import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import Posts from './Posts'
import { useNavigate, Link } from 'react-router-dom';

export default function HomePage({ postList, onDelete }) {
  const navigate = useNavigate()

  return (
    <>
      <Row className='my-3'>
        <Col>
          <Button color='primary' onClick={() => navigate('/post/create')}>Create Post</Button>
        </Col>
      </Row>
      <Row>
        { postList.map(post => (
          <Col xs='12' key={post.id}>
            <Posts post={post} onDelete={onDelete}/>
          </Col>
        )) }
      </Row>
    </>
  );
}
