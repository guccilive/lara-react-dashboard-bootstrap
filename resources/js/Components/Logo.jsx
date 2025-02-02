import React from 'react';
import './logo.css';

function Logo() {
    const handleToggleSideBar = () => {
        console.log('Hello');
        document.body.classList.toggle('toggle-sidebar');
    };
    
    return (
        <div className='d-flex align-items-center justify-content-between'>
            <a href="/" className='logo d-flex align-items-center'>
                <span className='d-none d-lg-block'>Admin Dashboard</span>
            </a>
            <i className='bi bi-list toggle-sidebar-btn' onClick={handleToggleSideBar}></i>
        </div>
    )
}

export default Logo