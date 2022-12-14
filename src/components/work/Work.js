import React from "react";
import WorkCard from "../workCard/WorkCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../work/work.css';

class Work extends React.Component {
    render() {
        return (
            // <div>
            // <div className="work">
            //     <h1>
            //         I create tailored websites for small businesses and start-ups to help them reach bigger audiences
            //     </h1>
            //     <p>
            //         My background includes corporate and freelance experience, with a history of design projects. I have worked on nationwide and international marketing and product launch campaigns for global brands.
            //     </p>
            //     <p>
            //         Literally, a website needs 4 seconds to give clear message of what is it for, what is the target audience and impress the visitor with visual appearance.
            //     </p>
            //     <p>
            //         Design can fascinatingly change our decisions and emotions. It converts website visitors into your customers. So I am here to help you with it.
            //     </p>
            // </div>
            //     <div className="work-card-p">
            //         <div className="wc1">
            //             <WorkCard></WorkCard>
            //         </div>

            //         <div className="wc2">
            //             <WorkCard></WorkCard>
            //         </div>

            //         <div className="wc3">
            //             <WorkCard></WorkCard>
            //         </div>

            //         <div className="wc4">
            //             <WorkCard></WorkCard>
            //         </div>

            //         <div className="wc5">
            //             <WorkCard></WorkCard>
            //         </div>
            //     </div>
            //   </div>  
            <Container>
                <Row className="work-row" gy='5'>
                    <Col>
                        <h1>
                            I create tailored websites for small businesses and start-ups to help them reach bigger audiences
                        </h1>
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
                <Row className="workCard-row1">
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
                <Row>
                    <br></br>
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