import React from "react";

class About extends React.Component{
    render(){
        return(
            <div>
                <h1>I make your business take off</h1>
                <h4>bla bla blabla bla bla bla bla bla bla bla bla blablav bla bla blav bla blabla bla blavbla bla blablav bla blavblabla blav </h4>
                <img src={require("../assets/me.JPEG")} alt="dev pic" width={"25%"}/>
            </div>   
        );
    }
}

export default About