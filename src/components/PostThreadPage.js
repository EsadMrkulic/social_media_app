import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form } from 'formik'; // import Formik and Form
import { Button, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import CommentList from './CommentList';

export default function PostThreadPage({ postList, commentsList, onSubmit }) {
  let { postId } = useParams();
  postId = parseInt(postId);

  const post = postList.find(post => post.id === postId);
  const commentsOfPost = commentsList.filter((comment) => comment.postId === postId);



  const handleSubmit = (values, { resetForm }) => {
    if (values.comment) {
      onSubmit({ postId, comment: values.comment });
      resetForm();
    }
  };

  return (
    <Row>
      <Col>
        <h3>{post.user}</h3>
        <p className='text-muted'>{post.post}</p>
      </Col>
      <Col>
        <h3>Comments</h3>
        {commentsOfPost.length > 0 ? (
          <CommentList comments={commentsOfPost} />
        ) : (
          <p>No comments yet.</p>
        )}
        <Formik initialValues={{ comment: '' }} onSubmit={handleSubmit}>
          {({ values, handleChange, handleBlur }) => (
            <Form>
              <FormGroup>
                {/* Add another Label and Input here*/ }
                <Label for='comment'>Add a comment</Label>
                <Input
                  type='textarea'
                  name='comment'
                  id='comment'
                  value={values.comment}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </FormGroup>
              <Button type='submit' color='primary'>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Col>
    </Row>
  );
}
