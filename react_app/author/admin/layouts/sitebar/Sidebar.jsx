import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className="sidebar-wrapper" data-simplebar="true">
            <div className="sidebar-header">
                <a href="/">
                    <div >
                        <img
                            src="/assets/dashboard/images/logo-icon.png"
                            className="logo-icon"
                            alt="logo icon"
                        />
                    </div>
                </a>
                <div>
                    <h4 className="logo-text">Dashtreme</h4>
                </div>
                <div className="toggle-icon ms-auto">
                    <i className="bx bx-arrow-back" />
                </div>
            </div>
            {/*navigation*/}
            <ul className="metismenu" id="menu">
                {/* <li>
                    <a href="javascript:;" className="has-arrow">
                        <div className="parent-icon">
                            <i className="bx bx-home-alt" />
                        </div>
                        <div className="menu-title">Dashboard</div>
                    </a>
                    <ul>
                        <li>
                            {" "}
                            <Link to="/">
                                <i className="bx bx-radio-circle" />
                                Default
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <a href="dashboard-eCommerce.html">
                                <i className="bx bx-radio-circle" />
                                eCommerce
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="dashboard-sales.html">
                                <i className="bx bx-radio-circle" />
                                Sales
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="dashboard-analytics.html">
                                <i className="bx bx-radio-circle" />
                                Analytics
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="dashboard-alternate.html">
                                <i className="bx bx-radio-circle" />
                                Alternate
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="dashboard-digital-marketing.html">
                                <i className="bx bx-radio-circle" />
                                Digital Marketing
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="dashboard-human-resources.html">
                                <i className="bx bx-radio-circle" />
                                Human Resources
                            </a>
                        </li>
                    </ul>
                </li> */}
                <li>
                    <a href="javascript:;" className="has-arrow">
                        <div className="parent-icon">
                            <i className="bx bx-category" />
                        </div>
                        <div className="menu-title">Application</div>
                    </a>
                    <ul>
                        <li>
                            {" "}
                            <Link to="user">
                                <i className="bx bx-radio-circle" />
                                Users
                            </Link>
                        </li>
                        {/* <li>
                            {" "}
                            <Link to="product">
                                <i className="bx bx-radio-circle" />
                                Products
                            </Link>
                        </li> */}
                        <li>
                            {" "}
                            <Link to="category">
                                <i className="bx bx-radio-circle" />
                                Categorys
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link to="brand">
                                <i className="bx bx-radio-circle" />
                                Brands
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link to="supplier">
                                <i className="bx bx-radio-circle" />
                                Suppliers
                            </Link>
                        </li>
                        
                    </ul>
                </li>
                {/* <li className="menu-label">UI Elements</li>
                <li>
                    <a href="widgets.html">
                        <div className="parent-icon">
                            <i className="bx bx-cookie" />
                        </div>
                        <div className="menu-title">Widgets</div>
                    </a>
                </li>
                <li>
                    <a href="javascript:;" className="has-arrow">
                        <div className="parent-icon">
                            <i className="bx bx-cart" />
                        </div>
                        <div className="menu-title">eCommerce</div>
                    </a>
                    <ul>
                        <li>
                            {" "}
                            <a href="ecommerce-products.html">
                                <i className="bx bx-radio-circle" />
                                Products
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="ecommerce-products-details.html">
                                <i className="bx bx-radio-circle" />
                                Product Details
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="ecommerce-add-new-products.html">
                                <i className="bx bx-radio-circle" />
                                Add New Products
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="ecommerce-orders.html">
                                <i className="bx bx-radio-circle" />
                                Orders
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon">
                            <i className="bx bx-bookmark-heart" />
                        </div>
                        <div className="menu-title">Components</div>
                    </a>
                    <ul>
                        <li>
                            {" "}
                            <a href="component-alerts.html">
                                <i className="bx bx-radio-circle" />
                                Alerts
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="component-accordions.html">
                                <i className="bx bx-radio-circle" />
                                Accordions
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="component-badges.html">
                                <i className="bx bx-radio-circle" />
                                Badges
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="component-buttons.html">
                                <i className="bx bx-radio-circle" />
                                Buttons
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="component-cards.html">
                                <i className="bx bx-radio-circle" />
                                Cards
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="component-carousels.html">
                                <i className="bx bx-radio-circle" />
                                Carousels
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="component-list-groups.html">
                                <i className="bx bx-radio-circle" />
                                List Groups
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="component-media-object.html">
                                <i className="bx bx-radio-circle" />
                                Media Objects
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="component-modals.html">
                                <i className="bx bx-radio-circle" />
                                Modals
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="component-navs-tabs.html">
                                <i className="bx bx-radio-circle" />
                                Navs &amp; Tabs
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="component-navbar.html">
                                <i className="bx bx-radio-circle" />
                                Navbar
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="component-paginations.html">
                                <i className="bx bx-radio-circle" />
                                Pagination
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="component-popovers-tooltips.html">
                                <i className="bx bx-radio-circle" />
                                Popovers &amp; Tooltips
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="component-progress-bars.html">
                                <i className="bx bx-radio-circle" />
                                Progress
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="component-spinners.html">
                                <i className="bx bx-radio-circle" />
                                Spinners
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="component-notifications.html">
                                <i className="bx bx-radio-circle" />
                                Notifications
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="component-avtars-chips.html">
                                <i className="bx bx-radio-circle" />
                                Avatrs &amp; Chips
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon">
                            <i className="bx bx-repeat" />
                        </div>
                        <div className="menu-title">Content</div>
                    </a>
                    <ul>
                        <li>
                            {" "}
                            <a href="content-grid-system.html">
                                <i className="bx bx-radio-circle" />
                                Grid System
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="content-typography.html">
                                <i className="bx bx-radio-circle" />
                                Typography
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="content-text-utilities.html">
                                <i className="bx bx-radio-circle" />
                                Text Utilities
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon">
                            {" "}
                            <i className="bx bx-donate-blood" />
                        </div>
                        <div className="menu-title">Icons</div>
                    </a>
                    <ul>
                        <li>
                            {" "}
                            <a href="icons-line-icons.html">
                                <i className="bx bx-radio-circle" />
                                Line Icons
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="icons-boxicons.html">
                                <i className="bx bx-radio-circle" />
                                Boxicons
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="icons-feather-icons.html">
                                <i className="bx bx-radio-circle" />
                                Feather Icons
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="menu-label">Forms &amp; Tables</li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon">
                            <i className="bx bx-message-square-edit" />
                        </div>
                        <div className="menu-title">Forms</div>
                    </a>
                    <ul>
                        <li>
                            {" "}
                            <a href="form-elements.html">
                                <i className="bx bx-radio-circle" />
                                Form Elements
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="form-input-group.html">
                                <i className="bx bx-radio-circle" />
                                Input Groups
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="form-layouts.html">
                                <i className="bx bx-radio-circle" />
                                Forms Layouts
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="form-validations.html">
                                <i className="bx bx-radio-circle" />
                                Form Validation
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="form-wizard.html">
                                <i className="bx bx-radio-circle" />
                                Form Wizard
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="form-text-editor.html">
                                <i className="bx bx-radio-circle" />
                                Text Editor
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="form-file-upload.html">
                                <i className="bx bx-radio-circle" />
                                File Upload
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="form-date-time-pickes.html">
                                <i className="bx bx-radio-circle" />
                                Date Pickers
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="form-select2.html">
                                <i className="bx bx-radio-circle" />
                                Select2
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="form-repeater.html">
                                <i className="bx bx-radio-circle" />
                                Form Repeater
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon">
                            <i className="bx bx-grid-alt" />
                        </div>
                        <div className="menu-title">Tables</div>
                    </a>
                    <ul>
                        <li>
                            {" "}
                            <a href="table-basic-table.html">
                                <i className="bx bx-radio-circle" />
                                Basic Table
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="table-datatable.html">
                                <i className="bx bx-radio-circle" />
                                Data Table
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="menu-label">Pages</li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon">
                            <i className="bx bx-lock" />
                        </div>
                        <div className="menu-title">Authentication</div>
                    </a>
                    <ul>
                        <li>
                            <a className="has-arrow" href="javascript:;">
                                <i className="bx bx-radio-circle" />
                                Basic
                            </a>
                            <ul>
                                <li>
                                    <a href="auth-basic-signin.html" target="_blank">
                                        <i className="bx bx-radio-circle" />
                                        Sign In
                                    </a>
                                </li>
                                <li>
                                    <a href="auth-basic-signup.html" target="_blank">
                                        <i className="bx bx-radio-circle" />
                                        Sign Up
                                    </a>
                                </li>
                                <li>
                                    <a href="auth-basic-forgot-password.html" target="_blank">
                                        <i className="bx bx-radio-circle" />
                                        Forgot Password
                                    </a>
                                </li>
                                <li>
                                    <a href="auth-basic-reset-password.html" target="_blank">
                                        <i className="bx bx-radio-circle" />
                                        Reset Password
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="javascript:;">
                                <i className="bx bx-radio-circle" />
                                Cover
                            </a>
                            <ul>
                                <li>
                                    <a href="auth-cover-signin.html" target="_blank">
                                        <i className="bx bx-radio-circle" />
                                        Sign In
                                    </a>
                                </li>
                                <li>
                                    <a href="auth-cover-signup.html" target="_blank">
                                        <i className="bx bx-radio-circle" />
                                        Sign Up
                                    </a>
                                </li>
                                <li>
                                    <a href="auth-cover-forgot-password.html" target="_blank">
                                        <i className="bx bx-radio-circle" />
                                        Forgot Password
                                    </a>
                                </li>
                                <li>
                                    <a href="auth-cover-reset-password.html" target="_blank">
                                        <i className="bx bx-radio-circle" />
                                        Reset Password
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="javascript:;">
                                <i className="bx bx-radio-circle" />
                                With Header Footer
                            </a>
                            <ul>
                                <li>
                                    <a href="auth-header-footer-signin.html" target="_blank">
                                        <i className="bx bx-radio-circle" />
                                        Sign In
                                    </a>
                                </li>
                                <li>
                                    <a href="auth-header-footer-signup.html" target="_blank">
                                        <i className="bx bx-radio-circle" />
                                        Sign Up
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="auth-header-footer-forgot-password.html"
                                        target="_blank"
                                    >
                                        <i className="bx bx-radio-circle" />
                                        Forgot Password
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="auth-header-footer-reset-password.html"
                                        target="_blank"
                                    >
                                        <i className="bx bx-radio-circle" />
                                        Reset Password
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="user-profile.html">
                        <div className="parent-icon">
                            <i className="bx bx-user-circle" />
                        </div>
                        <div className="menu-title">User Profile</div>
                    </a>
                </li>
                <li>
                    <a href="timeline.html">
                        <div className="parent-icon">
                            {" "}
                            <i className="bx bx-video-recording" />
                        </div>
                        <div className="menu-title">Timeline</div>
                    </a>
                </li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon">
                            <i className="bx bx-error" />
                        </div>
                        <div className="menu-title">Errors</div>
                    </a>
                    <ul>
                        <li>
                            {" "}
                            <a href="errors-404-error.html" target="_blank">
                                <i className="bx bx-radio-circle" />
                                404 Error
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="errors-500-error.html" target="_blank">
                                <i className="bx bx-radio-circle" />
                                500 Error
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="errors-coming-soon.html" target="_blank">
                                <i className="bx bx-radio-circle" />
                                Coming Soon
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="error-blank-page.html" target="_blank">
                                <i className="bx bx-radio-circle" />
                                Blank Page
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="faq.html">
                        <div className="parent-icon">
                            <i className="bx bx-help-circle" />
                        </div>
                        <div className="menu-title">FAQ</div>
                    </a>
                </li>
                <li>
                    <a href="pricing-table.html">
                        <div className="parent-icon">
                            <i className="bx bx-diamond" />
                        </div>
                        <div className="menu-title">Pricing</div>
                    </a>
                </li>
                <li className="menu-label">Charts &amp; Maps</li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon">
                            <i className="bx bx-line-chart" />
                        </div>
                        <div className="menu-title">Charts</div>
                    </a>
                    <ul>
                        <li>
                            {" "}
                            <a href="charts-apex-chart.html">
                                <i className="bx bx-radio-circle" />
                                Apex
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="charts-chartjs.html">
                                <i className="bx bx-radio-circle" />
                                Chartjs
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="charts-highcharts.html">
                                <i className="bx bx-radio-circle" />
                                Highcharts
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon">
                            <i className="bx bx-map-alt" />
                        </div>
                        <div className="menu-title">Maps</div>
                    </a>
                    <ul>
                        <li>
                            {" "}
                            <a href="map-google-maps.html">
                                <i className="bx bx-radio-circle" />
                                Google Maps
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a href="map-vector-maps.html">
                                <i className="bx bx-radio-circle" />
                                Vector Maps
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="menu-label">Others</li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon">
                            <i className="bx bx-menu" />
                        </div>
                        <div className="menu-title">Menu Levels</div>
                    </a>
                    <ul>
                        <li>
                            {" "}
                            <a className="has-arrow" href="javascript:;">
                                <i className="bx bx-radio-circle" />
                                Level One
                            </a>
                            <ul>
                                <li>
                                    {" "}
                                    <a className="has-arrow" href="javascript:;">
                                        <i className="bx bx-radio-circle" />
                                        Level Two
                                    </a>
                                    <ul>
                                        <li>
                                            {" "}
                                            <a href="javascript:;">
                                                <i className="bx bx-radio-circle" />
                                                Level Three
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;">
                        <div className="parent-icon">
                            <i className="bx bx-folder" />
                        </div>
                        <div className="menu-title">Documentation</div>
                    </a>
                </li>
                <li>
                    <a href="https://themeforest.net/user/codervent" target="_blank">
                        <div className="parent-icon">
                            <i className="bx bx-support" />
                        </div>
                        <div className="menu-title">Support</div>
                    </a>
                </li> */}
            </ul>
            {/*end navigation*/}
        </div>
    )
}

export default Sidebar