import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { Button, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';
import CommentList from './CommentList';
import '../css/PostThread.css';

export default function PostThreadPage({ postList, commentsList, onSubmit }) {
    let { postId } = useParams();
    postId = parseInt(postId);

    const post = postList.find((post) => post.id === postId);
    const commentsOfPost = commentsList.filter(
        (comment) => comment.postId === postId
    );

    const handleSubmit = (values, { resetForm }) => {
        if (values.comment && values.user) {
            onSubmit({
                postId,
                user: values.user,
                comment: values.comment,
            });
            resetForm();
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h3>{post.user}</h3>
                    <p className="text-muted">{post.post}</p>
                </Col>
                <Col className='box'>
                    <h3>Comments</h3>
                    {commentsOfPost.length > 0 ? (
                        <CommentList comments={commentsOfPost} />
                    ) : (
                        <p>No comments yet.</p>
                    )}
                    <Formik
                        initialValues={{ username: '', comment: '' }}
                        onSubmit={handleSubmit}
                    >
                        {({ values, handleChange, handleBlur }) => (
                            <Form>
                                <FormGroup>
                                    <Label for="user">Who are you?</Label>
                                    <Input
                                        type="text"
                                        name="user"
                                        id="user"
                                        value={values.user}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <Label for="comment">Add a comment</Label>
                                    <Input
                                        type="textarea"
                                        name="comment"
                                        id="comment"
                                        value={values.comment}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </FormGroup>
                                <Button type="submit" color="primary">
                                    Comment
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    );
}
