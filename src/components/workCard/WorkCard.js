import React from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './workCard.css';

class WorkCard extends React.Component {
    render() {
        return (
            <Container className="workCard-container mt-4">
                <Card>
                    <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.desc}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Container>

        );
    }
}

export default WorkCard;