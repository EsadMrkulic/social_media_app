import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, FormGroup, Input, Label } from 'reactstrap';

export default function PostFormPage({ onSubmit, initialValues, editId, buttonLabel }) {
    const [userValue, setUserValue] = useState(initialValues.user)
    const [textValue, setTextValue] = useState(initialValues.post)


    const navigate = useNavigate()

    const handleSubmit = () => {
        const newPostData = {
            id: editId,
            user: userValue,
            post: textValue
        }
        onSubmit(newPostData)
        navigate('/')
    };
    return (
        <div>
            <form>
                <FormGroup>
                    <Label for='Username'>Who are you?</Label>
                    <Input id='Username' value={userValue} onChange={ (e) => setUserValue(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for='The-Post'>Speak your mind:</Label>
                    <Input id='The-Post' value={textValue} onChange={ (e) => setTextValue(e.target.value)}/>
                </FormGroup>
                <Button color='primary' onClick={handleSubmit}>{ buttonLabel }</Button>
            </form>
        </div>
    );
}
