import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './contact.css';

class Contact extends React.Component {
    render() {
        return (
            <Container className="contact-container mt-5">
                <Row className="contact-question-row">
                    <h2>Have a question? Book a 15-minutes free call</h2>
                </Row>
                <Row className="contact-form-row mt-4">
                <Col lg='2'>

                </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button className="mb-4" type="submit">Book</Button>
                        </Form>
                    </Col>
                    <Col lg='2'>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;