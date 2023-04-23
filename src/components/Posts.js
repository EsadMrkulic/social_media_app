import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import { UserContext } from '../App'

export default function Posts({ post, onDelete }) {
  const navigate = useNavigate();

  const username = useContext(UserContext);

  return (
    <div className='border rounder p-2 mb-3 me-3'>
      <h4>{post.user}</h4>
      <p className='text-muted'>{post.post}</p>
      <Button color='info' className='ms-2' onClick={() => navigate('/post/' + post.id + '/thread')}>View Comments</Button>
      {post.user === username && (
        <>
          <Button color='success' className='ms-2' onClick={() => navigate('/post/' + post.id + '/edit')}>Edit</Button>
          <Button color='danger' className='ms-2' onClick={() => onDelete(post.id)}>Delete</Button>
        </>
      )}
    </div>
  )
}
