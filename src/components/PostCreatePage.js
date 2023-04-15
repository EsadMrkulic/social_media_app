import React from 'react';
import { Col, Row } from 'reactstrap';
import PostFormPage from './PostFormPage';

export default function PostCreatePage({ onSubmit }) {
    return (
        <Row>
            <Col>
                <h2 className="my-3">New Post</h2>
                <PostFormPage onSubmit={onSubmit} initialValues={{ user: '', post: '' }} buttonLabel='Create'/>
            </Col>
        </Row>
    );
}
