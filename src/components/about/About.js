import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './about.css';

class About extends React.Component{
    render(){
        return(
            <Container className="about-container">
                <Row className="about-row">
                    <Col md='9' className="about-col-text mt-5 p-5">
                        <h1 className="about-h1">I make your business take off</h1><br></br>
                        <h4 className="about-h4">Get personalised website for any type of business and<br></br> all year round maintenance</h4>
                    </Col>
                    <Col md='3' className="about-col-img">
                        <Image className='about-img' fluid='true' rounded='true' src={require("E:/portfolio/src/assets/take-off.png")}>
                        </Image>
                    </Col>
                </Row>
            </Container> 
        );
    }
}

export default About