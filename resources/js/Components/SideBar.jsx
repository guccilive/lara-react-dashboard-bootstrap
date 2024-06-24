import React from 'react'
import './sidebar.css'
import navList from '../data/navItem'
import NavItem from './NavItems/NavItem'

function SideBar() {
    return (
        <aside id='sidebar' className='sidebar'>
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                {/* DOCUMENT SECTION */}
                <li className="nav-item">
                    <a
                        href="#"
                        className="nav-link collapsed"
                        data-bs-target="#components-nav"
                        data-bs-toggle='collapse'
                    >
                        <i className="bi bi-menu-button-wide"></i>
                        <span>Documents</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                        className="nav-content collapse"
                        id="components-nav"
                        data-bs-parent='#sidebar-nav'
                    >
                        <li>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Customers</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Suppliers</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Logistic</span>
                            </a>
                        </li>
                    </ul>
                </li>
                {/*  FORM SECTION */}
                <li className="nav-item">
                    <a
                        href="#"
                        className="nav-link collapsed"
                        data-bs-target="#forms-nav"
                        data-bs-toggle='collapse'
                    >
                        <i className='bi bi-journal-text'></i>
                        <span>Forms</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                        className="nav-content collapse"
                        id="forms-nav"
                        data-bs-parent='#sidebar-nav'
                    >
                        <li>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Application Form</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Release Form</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Cancellation Form</span>
                            </a>
                        </li>
                    </ul>
                </li>
                {/* TABLE SECTION */}
                <li className="nav-item">
                    <a
                        href="#"
                        className="nav-link collapsed"
                        data-bs-target="#tables-nav"
                        data-bs-toggle='collapse'
                    >
                        <i className="bi bi-layout-text-window-reverse"></i>
                        <span>Tables</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                        className="nav-content collapse"
                        id="tables-nav"
                        data-bs-parent='#sidebar-nav'
                    >
                        <li>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>General Tables</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Data Tables</span>
                            </a>
                        </li>
                    </ul>
                </li>
                {/* CHART SECTION */}
                <li className="nav-item">
                    <a
                        href="#"
                        className="nav-link collapsed"
                        data-bs-target="#charts-nav"
                        data-bs-toggle='collapse'
                    >
                        <i className="bi bi-bar-chart"></i>
                        <span>Charts</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                        className="nav-content collapse"
                        id="charts-nav"
                        data-bs-parent='#sidebar-nav'
                    >
                        <li>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Chart.js</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>ApexCharts</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>ECharts</span>
                            </a>
                        </li>
                    </ul>
                </li>
                {/* CHART SECTION */}
                <li className="nav-item">
                    <a
                        href="#"
                        className="nav-link collapsed"
                        data-bs-target="#icons-nav"
                        data-bs-toggle='collapse'
                    >
                        <i className="bi bi-gem"></i>
                        <span>Icons</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                        className="nav-content collapse"
                        id="icons-nav"
                        data-bs-parent='#sidebar-nav'
                    >
                        <li>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Chart.js</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>ApexCharts</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>ECharts</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="nav-heading">Pages</li>
                {navList.map(nav => (
                    <NavItem key={nav._id} nav={nav} />
                ))}
            </ul>
        </aside>
    )
}

export default SideBar