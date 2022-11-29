import React from "react";

class Contact extends React.Component{
    render(){
        return(
            <div>
                <h2>Have a question?</h2>
                <h2>Book a 15-minutes free call</h2>

                <form action="#">
                    <label>
                        Enter your name
                        <input type="text" id="name"></input>
                    </label>
                    <label>
                        Enter your email address
                        <input type="email" id="email"></input>
                    </label>
                    <label>
                        Your message
                        <textarea></textarea>
                    </label>
                    <input type="submit" value="Submit your message"></input>
                </form>
            </div>
        );
    }
}

export default Contact;