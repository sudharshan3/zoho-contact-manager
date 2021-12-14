 import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
 import logo from '../assets/images/logo.png';
 import profile from '../assets/images/sudharshan.JPG';
 const AppHeader = (props) => {



    return (
        <div className="topheader">
            <Container>
                <div className="topheader-content">
               
                        <img src={logo} alt="logo" height={40} />
                    <img className='avatar-sm rounded-circle' style={{backgroundImage:`url(${profile})`}} />
                    
                </div>
            </Container>
        </div>
    )
}

export default AppHeader;
