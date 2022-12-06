import React from "react";
import './contact.css';

class Contact extends React.Component{
    render(){
        return(
            <div className="contact">
                <h2>Have a question?</h2>
                <h2>Book a 15-minutes free call</h2>

                <div className="form-div">
                    <form action="#" className="form">
                        <label>
                            Enter your name :
                        </label>
                        <input type="text" id="name"></input>
                        
                        <label>
                            Enter your email address :
                        </label>
                        <input type="email" id="email"></input>
                        
                        <label>
                            Your message :
                        </label>
                        <textarea></textarea>
                        <input className="sbt-btn" type="submit" value="Submit your message"></input>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;