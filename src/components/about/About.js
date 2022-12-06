import React from "react";
import './about.css';

class About extends React.Component{
    render(){
        return(
            <div className="abt">
                <div className="abt-content">
                    <h1 className="abt-h1">I make your business take off</h1>
                    <h4 className="abt-h4">Get personalised website for any type of business and all year round maintenance</h4>
                </div>
                <div className="abt-img-div">
                    <img className="abt-img" src={require("E:/portfolio/src/assets/me.JPEG")} alt="dev pic"/>
                </div>
            </div>   
        );
    }
}

export default About