import React from "react";
import Container from "react-bootstrap/Container";
import './workCard.css';

class WorkCard extends React.Component{
    render(){
        return(
            // <div className="work-card">
            //     <p>Title</p>
            //     {/* images,clickable component */}
            // </div>
            <Container className="work-card">
                <p>Title</p>
            </Container>
        );
    }
}

export default WorkCard;