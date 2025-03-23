import React from "react";
import { Card, CardBody, CardHeader, Stack } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { useState,useRef } from "react";

function InputTest1(){
    let ref = useRef();
    const [text,setText] = useState('');
    return(
    <>
    <Stack>
        <InputGroup className="mb-3 mt-3">
            <Form.Control
                className="p-3"
                placeholder="請輸入後按顯示"
                aria-label="請輸入後按顯示"
                aria-describedby="basic-addon2"
                ref = {ref}
                />
            <Button variant="outline-secondary" id="button-addon2" onClick={ ()=>{setText(ref.current.value)}}>
                顯示
            </Button>
        </InputGroup>
        <Card>
            <CardHeader>
                輸入的文字會顯示在下面
            </CardHeader>
            <CardBody>{text}</CardBody>
        </Card>
    </Stack>
    </>
    )
    
}

export default InputTest1;