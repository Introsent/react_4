import React from 'react';
import {Link} from 'react-router-dom'

const HomePage = () => {
    return (
        <div className='navpartheader'>
            <Link className='navpartheadera' to={'/'}>Home</Link>
            <Link className='navpartheadera' to={'/chats'}>Chats</Link>
            <Link className='navpartheadera' to={'/profile'}>Profile</Link>
        </div>
    );
};

export default HomePage;