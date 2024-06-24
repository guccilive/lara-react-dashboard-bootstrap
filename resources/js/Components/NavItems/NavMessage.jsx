import React from 'react'

function NavMessage() {
    return (
        <li className='nav-item dropdown'>
            <a href="#" className='nav-link nav-icon' data-bs-toggle='dropdown'>
                <i className='bi bi-chat-left-text'></i>
                <span className='badge bg-success badge-number'>3</span>
            </a>
            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
                <li className='dropdown-header'>
                    You have 3 new messages
                    <a href="#">
                        <span className='badge rounder-pill bg-primary p-2 ms-2'>
                            View all
                        </span>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider'/>
                </li>
                <li className='message-item'>
                    <a href="#">
                        <img
                            src="assets/img/messages-1.jpg"
                            alt=""
                            className='rounded-circle'
                        />
                        <div>
                            <h4> Adele Mashini</h4>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout ...
                            </p>
                            <p>40 in. ago</p>
                        </div>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider'/>
                </li>
                <li className='message-item'>
                    <a href="#">
                        <img
                            src="assets/img/messages-2.jpg"
                            alt=""
                            className='rounded-circle'
                        />
                        <div>
                            <h4> Joe Doe</h4>
                            <p>
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution lerem goler truim ...
                            </p>
                            <p>4 hrs. ago</p>
                        </div>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider'/>
                </li>
                <li className='message-item'>
                    <a href="#">
                        <img
                            src="assets/img/messages-3.jpg"
                            alt=""
                            className='rounded-circle'
                        />
                        <div>
                            <h4> George Bush</h4>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout ...
                            </p>
                            <p>16 hrs. ago</p>
                        </div>
                    </a>
                </li>
            </ul>
      </li>
  )
}

export default NavMessage