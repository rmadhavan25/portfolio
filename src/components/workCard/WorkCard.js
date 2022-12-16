import React from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './workCard.css';
// {require("E:/portfolio/src/assets/tailor-made-2.png")}
class WorkCard extends React.Component {
    render() {
        return (
            <Container className="workCard-container mt-4">
                <Card>
                    <Card.Img variant="top" src={require("E:/portfolio/src/assets/tailor-made-2.png")} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Container>

        );
    }
}

export default WorkCard;