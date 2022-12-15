import React from "react";
import Container from "react-bootstrap/Container";
import './workCard.css';

class WorkCard extends React.Component{
    render(){
        return(
            <Container className="workCard-container mt-5">
                <p>Title</p>
            </Container>
        );
    }
}

export default WorkCard;