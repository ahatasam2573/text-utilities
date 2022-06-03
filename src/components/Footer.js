import React from 'react';

const Footer = (props) => {
    return (
        <div className='my-5'>
            <p className='my-6 text-center bold' style={{ color: props.mode === 'light' ? 'black' : 'white' }} >© All Rights Reserved By Ahatasam Siam</p>
        </div>
    );
};

export default Footer;