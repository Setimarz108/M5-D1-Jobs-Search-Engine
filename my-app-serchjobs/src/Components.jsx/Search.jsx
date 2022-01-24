import React from 'react';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';

export default function Search({onChange, value, fetchJobs}) {
  return (

     
    <Container className="mb-3">
    <Row>
        <Col xs={12} style={{border: '1px solid gray', borderRadius:"22px", backgroundColor:'#404EED'}}>
            <Form className="justify-content-center">
                <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label></Form.Label>
                    <Form.Control 
                     placeholder="search"
                    onChange={onChange} value={value} type="search"/>
                    <Button color="primary" onClick={() => {
                   }}/>
                </Form.Group>
              
            </Form>
        </Col>
    </Row>
    
</Container>
  );
}
