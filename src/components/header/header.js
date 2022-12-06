import'./header.css';
import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <div className='header'>
                <h2 className='hd-h2'>Madhavan</h2>
                <ul className='hd-ul'>
                    <li className='hd-li-about'><a href='#About'>About</a></li>
                    <li className='hd-li-work'><a href='#Work'>Work</a></li>
                    <li className='hd-li-contact'><a href='#Contact'>Contact</a></li>
                </ul>   
            </div>
        );
    }
}

export default Header;