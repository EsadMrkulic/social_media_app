import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Posts({ post, onDelete }) {
  const navigate = useNavigate()

  return (
    <div className='border rounder p-2 mb-3 me-3'>
      <h4>{post.user}</h4>
      <p className='text-muted'>{post.post}</p>
      <Button color='danger' onClick={() => onDelete(post.id)}>Delete</Button>
      <Button color='success' className='ms-2' onClick={() => navigate('/post/' + post.id + '/edit')}>Edit</Button>
      <Button color='info' className='ms-2' onClick={() => navigate('/post/' + post.id + '/thread')}>View Comments</Button>
    </div>
  )
}
