import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            Page is NOT found. Return to <Link to={'/'}>home page</Link>
        </div>
    );
};

export default NotFoundPage;