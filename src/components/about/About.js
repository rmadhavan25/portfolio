import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './about.css';

class About extends React.Component{
    render(){
        return(
            // <div className="abt">
            //     <div className="abt-content">
            //         <h1 className="abt-h1">I make your business take off</h1>
            //         <h4 className="abt-h4">Get personalised website for any type of business and all year round maintenance</h4>
            //     </div>
            //     <div className="abt-img-div">
            //         <img className="abt-img" src={require("E:/portfolio/src/assets/me.JPEG")} alt="dev pic"/>
            //     </div>
            // </div> 
            <Container>
                <Row className="row1">
                    <Col xs='9' className="abt-col1 mt-5 p-5">
                        <h1 className="abt-h1">I make your business take off</h1><br></br>
                        <h4 className="abt-h4">Get personalised website for any type of business and<br></br> all year round maintenance</h4>
                    </Col>
                    <Col xs='3'>
                        <Image fluid='true' rounded='true' src={require("E:/portfolio/src/assets/me.JPEG")}>
                            {/* <img className="abt-img" src={require("E:/portfolio/src/assets/me.JPEG")} alt="dev pic"/> */}
                        </Image>
                    </Col>
                </Row>
            </Container> 
        );
    }
}

export default About