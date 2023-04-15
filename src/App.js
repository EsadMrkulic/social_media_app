import React, { useState } from 'react'
import TopBar from './components/TopBar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import PostThreadPage from './components/PostThreadPage'
import { Container } from 'reactstrap'
import { TEST_POSTS } from './TEST_DATA'
import PostCreatePage from './components/PostCreatePage'
import PostEditPage from './components/PostEditPage'
import LoginForm from './components/LoginForm'

let newId = 4;

export default function App() {
  const [postList, setPostList] = useState(TEST_POSTS);

  const deletePost = (idDeletion) => {
    setPostList( postList.filter(post => post.id !== idDeletion) )
  };

  const createPost = (newPostData) => {
    const newPost = {
      ...newPostData,
      id: newId++
    }
    setPostList(postList.concat(newPost))
  }

  const editPost = (editedPostData) => {
    setPostList(postList.map(post => (post.id === editedPostData.id) ? {...post, ...editedPostData} : post))
  }

  const [commentsList, setCommentsList] = useState([]);

  const addComment = (commentData) => {
    const newComment = {
      ...commentData,
      id: commentsList.length + 1
    }
    setCommentsList(commentsList.concat(newComment));
  }

  return (
    <>
      <TopBar/>
      <Container>
        <Routes>
          <Route path='/' element={<LoginForm/>}/>
          <Route path='/home' element={<HomePage postList={postList} onDelete={deletePost} />}/>
          <Route path='/post/create' element={<PostCreatePage onSubmit={createPost}/>}/>
          <Route path='/post/:postId/thread' element={<PostThreadPage postList={postList} commentsList={commentsList} onSubmit={addComment} />}/>
          <Route path='/post/:postId/edit' element={<PostEditPage onSubmit={editPost} postList={postList}/>}/>
        </Routes>
      </Container>
    </>
  )
}
