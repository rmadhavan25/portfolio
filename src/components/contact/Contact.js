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
            // <div className="contact">
            //     <h2>Have a question?</h2>
            //     <h2>Book a 15-minutes free call</h2>

            //     <div className="form-div">
            //         <form action="#" className="form">
            //             <label>
            //                 Enter your name :
            //             </label>
            //             <input type="text" id="name"></input>

            //             <label>
            //                 Enter your email address :
            //             </label>
            //             <input type="email" id="email"></input>

            //             <label>
            //                 Your message :
            //             </label>
            //             <textarea></textarea>
            //             <input className="sbt-btn" type="submit" value="Submit your message"></input>
            //         </form>
            //     </div>
            // </div>
            <Container className="ct-container">
                <Row className="ct-question-row">
                    <h2>Have a question?</h2>
                    <h2>Book a 15-minutes free call</h2>
                </Row>
                <Row>
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
                            <Button type="submit">Book</Button>
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