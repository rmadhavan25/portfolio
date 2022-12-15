import React from "react";
import WorkCard from "../workCard/WorkCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../work/work.css';

class Work extends React.Component {
    render() {
        return (
            <Container>
                <Row className='work-row-1 mt-5'>
                    <Col md='3'className="work-col-img">
                        <Image className="work-img" fluid='true' rounded='true' src={require("E:/portfolio/src/assets/tailor-made-2.png")}>

                        </Image>
                    </Col>
                    <Col md='1'></Col>
                    <Col md='8' className="work-col-text">
                        <h1>
                            I create tailored websites for small businesses and start-ups 
                        </h1><br></br>
                        <h4>Help them reach bigger audiences</h4>
                    </Col>
                </Row>
                <Row className='mt-1 work-row-2'>
                    <Col md='10'>
                        <p>
                            My background includes corporate and freelance experience, with a history of design projects. I have worked on nationwide and international marketing and product launch campaigns for global brands.
                        </p>
                        <p>
                            Literally, a website needs 4 seconds to give clear message of what is it for, what is the target audience and impress the visitor with visual appearance.
                        </p>
                        <p>
                            Design can fascinatingly change our decisions and emotions. It converts website visitors into your customers. So I am here to help you with it.
                        </p>
                    </Col>
                </Row>
                <Row className="workCard-row-1">
                    <Col>
                        <WorkCard></WorkCard>
                    </Col>
                    <Col>
                        <WorkCard></WorkCard>
                    </Col>
                    <Col>
                        <WorkCard></WorkCard>
                    </Col>
                </Row>
                <Row className="workCard-row2">
                    <Col>
                        <WorkCard></WorkCard>
                    </Col>
                    <Col>
                        <WorkCard></WorkCard>
                    </Col>
                    <Col>
                        <WorkCard></WorkCard>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default Work;