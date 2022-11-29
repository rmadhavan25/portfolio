import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <div>
                <h2>Madhavan</h2>
                <a href='#About'>About</a>
                <a href='#Work'>Work</a>
                <a href='#Contact'>Contact</a>
            </div>
        );
    }
}

export default Header;