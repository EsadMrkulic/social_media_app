import React from 'react';
import PostFormPage from './PostFormPage';
import { Col, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';

export default function PostEditPage({ onSubmit, postList}) {
    let { postId } = useParams();
    postId = parseInt(postId);

    const post = postList.find(post => post.id === postId)

    return (
        <Row>
            <Col>
                <h2 className="my-3">Edit Post</h2>
                <PostFormPage onSubmit={onSubmit} editId={postId} initialValues={{ user: post.user, post: post.post }} buttonLabel='Save' />
            </Col>
        </Row>
    );
}
