import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import '../css/contact.css';

class Contact extends React.Component {
    render() {
        return (
            <Container className="card contact-card" fluid>
                <Row>
                    <Col sm={4}></Col>
                    <Col sm={4}>
                        <Form className="contact-form">
                            <Form.Group controlId="contactForm.Name">
                                <Form.Control type="text" placeholder="Full Name" />
                            </Form.Group>
                            <Form.Group controlId="contactForm.Email">
                                <Form.Control type="email" placeholder="Email Address" />
                            </Form.Group>
                            <Form.Group controlId="contactForm.Message">
                                <Form.Control as="textarea" rows={3} placeholder="Message" />
                            </Form.Group>
                            <Button className="contact-form-send" variant="primary" type="submit">Send</Button>
                        </Form>
                    </Col>
                    <Col sm={4}></Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;