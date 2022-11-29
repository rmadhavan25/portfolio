import React from "react";
import WorkCard from "./WorkCard";

class Work extends React.Component {
    render() {
        return (
            <div>
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
                <WorkCard></WorkCard>
                <WorkCard></WorkCard>
                <WorkCard></WorkCard>
                <WorkCard></WorkCard>
                <WorkCard></WorkCard>
            </div>
        );
    }
}

export default Work;