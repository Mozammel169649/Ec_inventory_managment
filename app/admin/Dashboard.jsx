import React from 'react'

export default function ashboard() {
    return (
        <div>
        {/*wrapper*/}
        <div className="wrapper">
          {/*sidebar wrapper */}
          <div className="sidebar-wrapper" data-simplebar="true">
            <div className="sidebar-header">
              <div>
                <img
                  src="assets/images/logo-icon.png"
                  className="logo-icon"
                  alt="logo icon"
                />
              </div>
              <div>
                <h4 className="logo-text">Dashtreme</h4>
              </div>
              <div className="toggle-icon ms-auto">
                <i className="bx bx-arrow-back" />
              </div>
            </div>
            {/*navigation*/}
            <ul className="metismenu" id="menu">
              <li>
                <a href="javascript:;" className="has-arrow">
                  <div className="parent-icon">
                    <i className="bx bx-home-alt" />
                  </div>
                  <div className="menu-title">Dashboard</div>
                </a>
                <ul>
                  <li>
                    {" "}
                    <a href="index.html">
                      <i className="bx bx-radio-circle" />
                      Default
                    </a>
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
              </li>
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
                    <a href="app-emailbox.html">
                      <i className="bx bx-radio-circle" />
                      Email
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="app-chat-box.html">
                      <i className="bx bx-radio-circle" />
                      Chat Box
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="app-file-manager.html">
                      <i className="bx bx-radio-circle" />
                      File Manager
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="app-contact-list.html">
                      <i className="bx bx-radio-circle" />
                      Contatcs
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="app-to-do.html">
                      <i className="bx bx-radio-circle" />
                      Todo List
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="app-invoice.html">
                      <i className="bx bx-radio-circle" />
                      Invoice
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="app-fullcalender.html">
                      <i className="bx bx-radio-circle" />
                      Calendar
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-label">UI Elements</li>
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
              </li>
            </ul>
            {/*end navigation*/}
          </div>
          {/*end sidebar wrapper */}
          {/*start header */}
          <header>
            <div className="topbar d-flex align-items-center">
              <nav className="navbar navbar-expand gap-3">
                <div className="mobile-toggle-menu">
                  <i className="bx bx-menu" />
                </div>
                <div className="search-bar flex-grow-1">
                  <div className="position-relative search-bar-box">
                    <input
                      type="text"
                      className="form-control search-control"
                      placeholder="Type to search..."
                    />{" "}
                    <span className="position-absolute top-50 search-show translate-middle-y">
                      <i className="bx bx-search" />
                    </span>
                    <span className="position-absolute top-50 search-close translate-middle-y">
                      <i className="bx bx-x" />
                    </span>
                  </div>
                </div>
                <div className="top-menu ms-auto">
                  <ul className="navbar-nav align-items-center gap-1">
                    <li
                      className="nav-item mobile-search-icon d-flex d-lg-none"
                      data-bs-toggle="modal"
                      data-bs-target="#SearchModal"
                    >
                      <a className="nav-link" href="avascript:;">
                        <i className="bx bx-search" />
                      </a>
                    </li>
                    <li className="nav-item dropdown dropdown-laungauge d-none d-sm-flex">
                      <a
                        className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                        href="avascript:;"
                        data-bs-toggle="dropdown"
                      >
                        <img src="assets/images/county/02.png" width={22} alt="" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center py-2"
                            href="javascript:;"
                          >
                            <img
                              src="assets/images/county/01.png"
                              width={20}
                              alt=""
                            />
                            <span className="ms-2">English</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center py-2"
                            href="javascript:;"
                          >
                            <img
                              src="assets/images/county/02.png"
                              width={20}
                              alt=""
                            />
                            <span className="ms-2">Catalan</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center py-2"
                            href="javascript:;"
                          >
                            <img
                              src="assets/images/county/03.png"
                              width={20}
                              alt=""
                            />
                            <span className="ms-2">French</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center py-2"
                            href="javascript:;"
                          >
                            <img
                              src="assets/images/county/04.png"
                              width={20}
                              alt=""
                            />
                            <span className="ms-2">Belize</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center py-2"
                            href="javascript:;"
                          >
                            <img
                              src="assets/images/county/05.png"
                              width={20}
                              alt=""
                            />
                            <span className="ms-2">Colombia</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center py-2"
                            href="javascript:;"
                          >
                            <img
                              src="assets/images/county/06.png"
                              width={20}
                              alt=""
                            />
                            <span className="ms-2">Spanish</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center py-2"
                            href="javascript:;"
                          >
                            <img
                              src="assets/images/county/07.png"
                              width={20}
                              alt=""
                            />
                            <span className="ms-2">Georgian</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center py-2"
                            href="javascript:;"
                          >
                            <img
                              src="assets/images/county/08.png"
                              width={20}
                              alt=""
                            />
                            <span className="ms-2">Hindi</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown dropdown-app">
                      <a
                        className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown"
                        href="javascript:;"
                      >
                        <i className="bx bx-grid-alt" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end p-0">
                        <div className="app-container p-2 my-2">
                          <div className="row gx-0 gy-2 row-cols-3 justify-content-center p-2">
                            <div className="col">
                              <a href="javascript:;">
                                <div className="app-box text-center">
                                  <div className="app-icon">
                                    <img
                                      src="assets/images/app/slack.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                  <div className="app-name">
                                    <p className="mb-0 mt-1">Slack</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col">
                              <a href="javascript:;">
                                <div className="app-box text-center">
                                  <div className="app-icon">
                                    <img
                                      src="assets/images/app/behance.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                  <div className="app-name">
                                    <p className="mb-0 mt-1">Behance</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col">
                              <a href="javascript:;">
                                <div className="app-box text-center">
                                  <div className="app-icon">
                                    <img
                                      src="assets/images/app/google-drive.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                  <div className="app-name">
                                    <p className="mb-0 mt-1">Dribble</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col">
                              <a href="javascript:;">
                                <div className="app-box text-center">
                                  <div className="app-icon">
                                    <img
                                      src="assets/images/app/outlook.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                  <div className="app-name">
                                    <p className="mb-0 mt-1">Outlook</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col">
                              <a href="javascript:;">
                                <div className="app-box text-center">
                                  <div className="app-icon">
                                    <img
                                      src="assets/images/app/github.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                  <div className="app-name">
                                    <p className="mb-0 mt-1">GitHub</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col">
                              <a href="javascript:;">
                                <div className="app-box text-center">
                                  <div className="app-icon">
                                    <img
                                      src="assets/images/app/stack-overflow.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                  <div className="app-name">
                                    <p className="mb-0 mt-1">Stack</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col">
                              <a href="javascript:;">
                                <div className="app-box text-center">
                                  <div className="app-icon">
                                    <img
                                      src="assets/images/app/figma.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                  <div className="app-name">
                                    <p className="mb-0 mt-1">Stack</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col">
                              <a href="javascript:;">
                                <div className="app-box text-center">
                                  <div className="app-icon">
                                    <img
                                      src="assets/images/app/twitter.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                  <div className="app-name">
                                    <p className="mb-0 mt-1">Twitter</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col">
                              <a href="javascript:;">
                                <div className="app-box text-center">
                                  <div className="app-icon">
                                    <img
                                      src="assets/images/app/google-calendar.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                  <div className="app-name">
                                    <p className="mb-0 mt-1">Calendar</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col">
                              <a href="javascript:;">
                                <div className="app-box text-center">
                                  <div className="app-icon">
                                    <img
                                      src="assets/images/app/spotify.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                  <div className="app-name">
                                    <p className="mb-0 mt-1">Spotify</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col">
                              <a href="javascript:;">
                                <div className="app-box text-center">
                                  <div className="app-icon">
                                    <img
                                      src="assets/images/app/google-photos.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                  <div className="app-name">
                                    <p className="mb-0 mt-1">Photos</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col">
                              <a href="javascript:;">
                                <div className="app-box text-center">
                                  <div className="app-icon">
                                    <img
                                      src="assets/images/app/pinterest.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                  <div className="app-name">
                                    <p className="mb-0 mt-1">Photos</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col">
                              <a href="javascript:;">
                                <div className="app-box text-center">
                                  <div className="app-icon">
                                    <img
                                      src="assets/images/app/linkedin.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                  <div className="app-name">
                                    <p className="mb-0 mt-1">linkedin</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col">
                              <a href="javascript:;">
                                <div className="app-box text-center">
                                  <div className="app-icon">
                                    <img
                                      src="assets/images/app/dribble.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                  <div className="app-name">
                                    <p className="mb-0 mt-1">Dribble</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col">
                              <a href="javascript:;">
                                <div className="app-box text-center">
                                  <div className="app-icon">
                                    <img
                                      src="assets/images/app/youtube.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                  <div className="app-name">
                                    <p className="mb-0 mt-1">YouTube</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col">
                              <a href="javascript:;">
                                <div className="app-box text-center">
                                  <div className="app-icon">
                                    <img
                                      src="assets/images/app/google.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                  <div className="app-name">
                                    <p className="mb-0 mt-1">News</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col">
                              <a href="javascript:;">
                                <div className="app-box text-center">
                                  <div className="app-icon">
                                    <img
                                      src="assets/images/app/envato.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                  <div className="app-name">
                                    <p className="mb-0 mt-1">Envato</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="col">
                              <a href="javascript:;">
                                <div className="app-box text-center">
                                  <div className="app-icon">
                                    <img
                                      src="assets/images/app/safari.png"
                                      width={30}
                                      alt=""
                                    />
                                  </div>
                                  <div className="app-name">
                                    <p className="mb-0 mt-1">Safari</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          {/*end row*/}
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown dropdown-large">
                      <a
                        className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        <span className="alert-count">7</span>
                        <i className="bx bx-bell" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="javascript:;">
                          <div className="msg-header">
                            <p className="msg-header-title">Notifications</p>
                            <p className="msg-header-badge">8 New</p>
                          </div>
                        </a>
                        <div className="header-notifications-list">
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="user-online">
                                <img
                                  src="assets/images/avatars/avatar-1.png"
                                  className="msg-avatar"
                                  alt="user avatar"
                                />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">
                                  Daisy Anderson
                                  <span className="msg-time float-end">
                                    5 sec ago
                                  </span>
                                </h6>
                                <p className="msg-info">
                                  The standard chunk of lorem
                                </p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="notify bg-light-danger text-danger">
                                dc
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">
                                  New Orders{" "}
                                  <span className="msg-time float-end">
                                    2 min ago
                                  </span>
                                </h6>
                                <p className="msg-info">
                                  You have recived new orders
                                </p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="user-online">
                                <img
                                  src="assets/images/avatars/avatar-2.png"
                                  className="msg-avatar"
                                  alt="user avatar"
                                />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">
                                  Althea Cabardo{" "}
                                  <span className="msg-time float-end">
                                    14 sec ago
                                  </span>
                                </h6>
                                <p className="msg-info">
                                  Many desktop publishing packages
                                </p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="notify bg-light-success text-success">
                                <img
                                  src="assets/images/app/outlook.png"
                                  width={25}
                                  alt="user avatar"
                                />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">
                                  Account Created
                                  <span className="msg-time float-end">
                                    28 min ago
                                  </span>
                                </h6>
                                <p className="msg-info">
                                  Successfully created new email
                                </p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="notify bg-light-info text-info">Ss</div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">
                                  New Product Approved{" "}
                                  <span className="msg-time float-end">
                                    2 hrs ago
                                  </span>
                                </h6>
                                <p className="msg-info">
                                  Your new product has approved
                                </p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="user-online">
                                <img
                                  src="assets/images/avatars/avatar-4.png"
                                  className="msg-avatar"
                                  alt="user avatar"
                                />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">
                                  Katherine Pechon{" "}
                                  <span className="msg-time float-end">
                                    15 min ago
                                  </span>
                                </h6>
                                <p className="msg-info">
                                  Making this the first true generator
                                </p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="notify bg-light-success text-success">
                                <i className="bx bx-check-square" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">
                                  Your item is shipped{" "}
                                  <span className="msg-time float-end">
                                    5 hrs ago
                                  </span>
                                </h6>
                                <p className="msg-info">
                                  Successfully shipped your item
                                </p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="notify bg-light-primary">
                                <img
                                  src="assets/images/app/github.png"
                                  width={25}
                                  alt="user avatar"
                                />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">
                                  New 24 authors
                                  <span className="msg-time float-end">
                                    1 day ago
                                  </span>
                                </h6>
                                <p className="msg-info">
                                  24 new authors joined last week
                                </p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="user-online">
                                <img
                                  src="assets/images/avatars/avatar-8.png"
                                  className="msg-avatar"
                                  alt="user avatar"
                                />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">
                                  Peter Costanzo{" "}
                                  <span className="msg-time float-end">
                                    6 hrs ago
                                  </span>
                                </h6>
                                <p className="msg-info">
                                  It was popularised in the 1960s
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <a href="javascript:;">
                          <div className="text-center msg-footer">
                            <button className="btn btn-light w-100">
                              View All Notifications
                            </button>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown dropdown-large">
                      <a
                        className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {" "}
                        <span className="alert-count">8</span>
                        <i className="bx bx-shopping-bag" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="javascript:;">
                          <div className="msg-header">
                            <p className="msg-header-title">My Cart</p>
                            <p className="msg-header-badge">10 Items</p>
                          </div>
                        </a>
                        <div className="header-message-list">
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center gap-3">
                              <div className="position-relative">
                                <div className="cart-product rounded-circle bg-light">
                                  <img
                                    src="assets/images/products/11.png"
                                    className=""
                                    alt="product image"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="cart-product-title mb-0">
                                  Men White T-Shirt
                                </h6>
                                <p className="cart-product-price mb-0">1 X $29.00</p>
                              </div>
                              <div className="">
                                <p className="cart-price mb-0">$250</p>
                              </div>
                              <div className="cart-product-cancel">
                                <i className="bx bx-x" />
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center gap-3">
                              <div className="position-relative">
                                <div className="cart-product rounded-circle bg-light">
                                  <img
                                    src="assets/images/products/02.png"
                                    className=""
                                    alt="product image"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="cart-product-title mb-0">
                                  Men White T-Shirt
                                </h6>
                                <p className="cart-product-price mb-0">1 X $29.00</p>
                              </div>
                              <div className="">
                                <p className="cart-price mb-0">$250</p>
                              </div>
                              <div className="cart-product-cancel">
                                <i className="bx bx-x" />
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center gap-3">
                              <div className="position-relative">
                                <div className="cart-product rounded-circle bg-light">
                                  <img
                                    src="assets/images/products/03.png"
                                    className=""
                                    alt="product image"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="cart-product-title mb-0">
                                  Men White T-Shirt
                                </h6>
                                <p className="cart-product-price mb-0">1 X $29.00</p>
                              </div>
                              <div className="">
                                <p className="cart-price mb-0">$250</p>
                              </div>
                              <div className="cart-product-cancel">
                                <i className="bx bx-x" />
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center gap-3">
                              <div className="position-relative">
                                <div className="cart-product rounded-circle bg-light">
                                  <img
                                    src="assets/images/products/04.png"
                                    className=""
                                    alt="product image"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="cart-product-title mb-0">
                                  Men White T-Shirt
                                </h6>
                                <p className="cart-product-price mb-0">1 X $29.00</p>
                              </div>
                              <div className="">
                                <p className="cart-price mb-0">$250</p>
                              </div>
                              <div className="cart-product-cancel">
                                <i className="bx bx-x" />
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center gap-3">
                              <div className="position-relative">
                                <div className="cart-product rounded-circle bg-light">
                                  <img
                                    src="assets/images/products/05.png"
                                    className=""
                                    alt="product image"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="cart-product-title mb-0">
                                  Men White T-Shirt
                                </h6>
                                <p className="cart-product-price mb-0">1 X $29.00</p>
                              </div>
                              <div className="">
                                <p className="cart-price mb-0">$250</p>
                              </div>
                              <div className="cart-product-cancel">
                                <i className="bx bx-x" />
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center gap-3">
                              <div className="position-relative">
                                <div className="cart-product rounded-circle bg-light">
                                  <img
                                    src="assets/images/products/06.png"
                                    className=""
                                    alt="product image"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="cart-product-title mb-0">
                                  Men White T-Shirt
                                </h6>
                                <p className="cart-product-price mb-0">1 X $29.00</p>
                              </div>
                              <div className="">
                                <p className="cart-price mb-0">$250</p>
                              </div>
                              <div className="cart-product-cancel">
                                <i className="bx bx-x" />
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center gap-3">
                              <div className="position-relative">
                                <div className="cart-product rounded-circle bg-light">
                                  <img
                                    src="assets/images/products/07.png"
                                    className=""
                                    alt="product image"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="cart-product-title mb-0">
                                  Men White T-Shirt
                                </h6>
                                <p className="cart-product-price mb-0">1 X $29.00</p>
                              </div>
                              <div className="">
                                <p className="cart-price mb-0">$250</p>
                              </div>
                              <div className="cart-product-cancel">
                                <i className="bx bx-x" />
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center gap-3">
                              <div className="position-relative">
                                <div className="cart-product rounded-circle bg-light">
                                  <img
                                    src="assets/images/products/08.png"
                                    className=""
                                    alt="product image"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="cart-product-title mb-0">
                                  Men White T-Shirt
                                </h6>
                                <p className="cart-product-price mb-0">1 X $29.00</p>
                              </div>
                              <div className="">
                                <p className="cart-price mb-0">$250</p>
                              </div>
                              <div className="cart-product-cancel">
                                <i className="bx bx-x" />
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center gap-3">
                              <div className="position-relative">
                                <div className="cart-product rounded-circle bg-light">
                                  <img
                                    src="assets/images/products/09.png"
                                    className=""
                                    alt="product image"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="cart-product-title mb-0">
                                  Men White T-Shirt
                                </h6>
                                <p className="cart-product-price mb-0">1 X $29.00</p>
                              </div>
                              <div className="">
                                <p className="cart-price mb-0">$250</p>
                              </div>
                              <div className="cart-product-cancel">
                                <i className="bx bx-x" />
                              </div>
                            </div>
                          </a>
                        </div>
                        <a href="javascript:;">
                          <div className="text-center msg-footer">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <h5 className="mb-0">Total</h5>
                              <h5 className="mb-0 ms-auto">$489.00</h5>
                            </div>
                            <button className="btn btn-light w-100">Checkout</button>
                          </div>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="user-box dropdown px-3">
                  <a
                    className="d-flex align-items-center nav-link dropdown-toggle gap-3 dropdown-toggle-nocaret"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="assets/images/avatars/avatar-2.png"
                      className="user-img"
                      alt="user avatar"
                    />
                    <div className="user-info">
                      <p className="user-name mb-0">Pauline Seitz</p>
                      <p className="designattion mb-0">Web Designer</p>
                    </div>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="javascript:;"
                      >
                        <i className="bx bx-user fs-5" />
                        <span>Profile</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="javascript:;"
                      >
                        <i className="bx bx-cog fs-5" />
                        <span>Settings</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="javascript:;"
                      >
                        <i className="bx bx-home-circle fs-5" />
                        <span>Dashboard</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="javascript:;"
                      >
                        <i className="bx bx-dollar-circle fs-5" />
                        <span>Earnings</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="javascript:;"
                      >
                        <i className="bx bx-download fs-5" />
                        <span>Downloads</span>
                      </a>
                    </li>
                    <li>
                      <div className="dropdown-divider mb-0" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="javascript:;"
                      >
                        <i className="bx bx-log-out-circle" />
                        <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </header>
          {/*end header */}
          {/*start page wrapper */}
          <div className="page-wrapper">
            <div className="page-content">
              <div className="card radius-10">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 row-group g-0">
                  <div className="col">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <h5 className="mb-0">9526</h5>
                        <div className="ms-auto">
                          <i className="bx bx-cart fs-3 text-white" />
                        </div>
                      </div>
                      <div className="progress my-3" style={{ height: 4 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="d-flex align-items-center text-white">
                        <p className="mb-0">Total Orders</p>
                        <p className="mb-0 ms-auto">
                          +4.2%
                          <span>
                            <i className="bx bx-up-arrow-alt" />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <h5 className="mb-0">$8323</h5>
                        <div className="ms-auto">
                          <i className="bx bx-dollar fs-3 text-white" />
                        </div>
                      </div>
                      <div className="progress my-3" style={{ height: 4 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="d-flex align-items-center text-white">
                        <p className="mb-0">Total Revenue</p>
                        <p className="mb-0 ms-auto">
                          +1.2%
                          <span>
                            <i className="bx bx-up-arrow-alt" />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <h5 className="mb-0">6200</h5>
                        <div className="ms-auto">
                          <i className="bx bx-group fs-3 text-white" />
                        </div>
                      </div>
                      <div className="progress my-3" style={{ height: 4 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="d-flex align-items-center text-white">
                        <p className="mb-0">Visitors</p>
                        <p className="mb-0 ms-auto">
                          +5.2%
                          <span>
                            <i className="bx bx-up-arrow-alt" />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <h5 className="mb-0">5630</h5>
                        <div className="ms-auto">
                          <i className="bx bx-envelope fs-3 text-white" />
                        </div>
                      </div>
                      <div className="progress my-3" style={{ height: 4 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="d-flex align-items-center text-white">
                        <p className="mb-0">Messages</p>
                        <p className="mb-0 ms-auto">
                          +2.2%
                          <span>
                            <i className="bx bx-up-arrow-alt" />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end row*/}
              </div>
              <div className="row">
                <div className="col-12 col-lg-8 col-xl-8 d-flex">
                  <div className="card radius-10 w-100">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div>
                          <h5 className="mb-0">Site Traffic</h5>
                        </div>
                        <div className="dropdown options ms-auto">
                          <div
                            className="dropdown-toggle dropdown-toggle-nocaret"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bx bx-dots-horizontal-rounded" />
                          </div>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="javascript:;">
                                Action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:;">
                                Another action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:;">
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="d-flex align-items-center ms-auto font-13 gap-2 my-3">
                        <span className="border px-1 rounded cursor-pointer">
                          <i className="bx bxs-circle me-1 text-white" />
                          New Visitor
                        </span>
                        <span className="border px-1 rounded cursor-pointer">
                          <i className="bx bxs-circle me-1 text-light-1" />
                          Old Visitor
                        </span>
                      </div>
                      <div className="chart-container-1">
                        <canvas id="chart1" />
                      </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-xl-3 g-0 row-group text-center border-top">
                      <div className="col">
                        <div className="p-3">
                          <h5 className="mb-0">45.87M</h5>
                          <small className="mb-0">
                            Overall Visitor{" "}
                            <span>
                              {" "}
                              <i className="bx bx-up-arrow-alt align-middle" /> 2.43%
                            </span>
                          </small>
                        </div>
                      </div>
                      <div className="col">
                        <div className="p-3">
                          <h5 className="mb-0">15:48</h5>
                          <small className="mb-0">
                            Visitor Duration{" "}
                            <span>
                              {" "}
                              <i className="bx bx-up-arrow-alt align-middle" /> 12.65%
                            </span>
                          </small>
                        </div>
                      </div>
                      <div className="col">
                        <div className="p-3">
                          <h5 className="mb-0">245.65</h5>
                          <small className="mb-0">
                            Pages/Visit{" "}
                            <span>
                              {" "}
                              <i className="bx bx-up-arrow-alt align-middle" /> 5.62%
                            </span>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-xl-4 d-flex">
                  <div className="card radius-10 overflow-hidden w-100">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-2">
                        <div>
                          <h5 className="mb-0">Weekly sales</h5>
                        </div>
                        <div className="dropdown options ms-auto">
                          <div
                            className="dropdown-toggle dropdown-toggle-nocaret"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bx bx-dots-horizontal-rounded" />
                          </div>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="javascript:;">
                                Action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:;">
                                Another action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:;">
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chart-js-container2">
                        <div className="piechart-legend">
                          <h3 className="mb-1">95K</h3>
                          <h6 className="mb-0">Total sales</h6>
                        </div>
                        <canvas id="chart2" />
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table align-items-center mb-0">
                        <tbody>
                          <tr className="border-top">
                            <td>
                              <i className="bx bxs-circle text-white me-2" /> Direct
                            </td>
                            <td>$5856</td>
                            <td>+55%</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="bx bxs-circle text-light-2 me-2" />
                              Affiliate
                            </td>
                            <td>$2602</td>
                            <td>+25%</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="bx bxs-circle text-light-3 me-2" />
                              E-mail
                            </td>
                            <td>$1802</td>
                            <td>+15%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Row*/}
              <div className="row row-cols-1 row-cols-lg-3">
                <div className="col">
                  <div className="card radius-10">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="w_chart easy-dash-chart1" data-percent={60}>
                          <span className="w_percent" />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0">Facebook Followers</h6>
                          <small className="mb-0">
                            22.14% <i className="bx bxs-up-arrow align-middle me-1" />
                            Since Last Week
                          </small>
                        </div>
                        <div className="ms-auto fs-1 text-white">
                          <i className="bx bxl-facebook" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card radius-10">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="w_chart easy-dash-chart2" data-percent={65}>
                          <span className="w_percent" />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0">Twitter Tweets</h6>
                          <small className="mb-0">
                            32.15% <i className="bx bxs-up-arrow align-middle me-1" />
                            Since Last Week
                          </small>
                        </div>
                        <div className="ms-auto fs-1 text-white">
                          <i className="bx bxl-twitter" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card radius-10">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="w_chart easy-dash-chart3" data-percent={75}>
                          <span className="w_percent" />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0">Youtube Subscribers</h6>
                          <small className="mb-0">
                            58.24% <i className="bx bxs-up-arrow align-middle me-1" />
                            Since Last Week
                          </small>
                        </div>
                        <div className="ms-auto fs-1 text-white">
                          <i className="bx bxl-youtube" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Row*/}
              <div className="row">
                <div className="col-12 col-lg-12 col-xl-6">
                  <div className="card radius-10">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <div>
                          <h5 className="mb-0">Selling Region</h5>
                        </div>
                        <div className="dropdown options ms-auto">
                          <div
                            className="dropdown-toggle dropdown-toggle-nocaret"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bx bx-dots-horizontal-rounded" />
                          </div>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="javascript:;">
                                Action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:;">
                                Another action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:;">
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div id="dashboard-map" style={{ height: 335 }} />
                    </div>
                    <div className="table-responsive">
                      <table className="table table-hover align-items-center mb-0">
                        <thead className="table-light">
                          <tr>
                            <th>Country</th>
                            <th>Income</th>
                            <th>Trend</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <i className="flag-icon flag-icon-ca me-2" /> USA
                            </td>
                            <td>$4,586</td>
                            <td>
                              <span id="trendchart1" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="flag-icon flag-icon-us me-2" />
                              Canada
                            </td>
                            <td>$2,089</td>
                            <td>
                              <span id="trendchart2" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="flag-icon flag-icon-in me-2" />
                              India
                            </td>
                            <td>$3,039</td>
                            <td>
                              <span id="trendchart3" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="flag-icon flag-icon-gb me-2" />
                              UK
                            </td>
                            <td>$2,309</td>
                            <td>
                              <span id="trendchart4" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="flag-icon flag-icon-de me-2" />
                              Germany
                            </td>
                            <td>$7,209</td>
                            <td>
                              <span id="trendchart5" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-12 col-xl-6">
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <div className="card radius-10 overflow-hidden">
                        <div className="card-body">
                          <p className="mb-2">Page Views</p>
                          <h4 className="mb-0">
                            8,293{" "}
                            <small className="font-13 text-white">
                              5.2% <i className="bx bx-up-arrow-alt" />
                            </small>
                          </h4>
                        </div>
                        <div className="chart-container-2">
                          <canvas id="chart3" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="card radius-10 overflow-hidden">
                        <div className="card-body">
                          <p className="mb-2">Total Clicks</p>
                          <h4 className="mb-0">
                            7,493{" "}
                            <small className="font-13 text-white">
                              1.4% <i className="bx bx-up-arrow-alt" />
                            </small>
                          </h4>
                        </div>
                        <div className="chart-container-2">
                          <canvas id="chart4" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="card radius-10">
                        <div className="card-body text-center">
                          <p className="mb-4">Total Downloads</p>
                          <input
                            className="knob"
                            data-width={190}
                            data-height={190}
                            data-readonly="true"
                            data-thickness=".15"
                            data-angleoffset={90}
                            data-linecap="round"
                            data-bgcolor="rgba(0, 0, 0, 0.08)"
                            data-fgcolor="#fff"
                            data-max={15000}
                            defaultValue={8550}
                          />
                          <hr />
                          <p className="mb-0 small-font text-center">
                            3.4% <i className="zmdi zmdi-long-arrow-up" /> since
                            yesterday
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="card radius-10">
                        <div className="card-body">
                          <p>Device Storage</p>
                          <h4 className="mb-3">42620/50000</h4>
                          <hr />
                          <div className="progress-wrapper mb-4">
                            <p>
                              Documents <span className="float-end">12GB</span>
                            </p>
                            <div className="progress" style={{ height: 5 }}>
                              <div
                                className="progress-bar bg-white"
                                style={{ width: "80%" }}
                              />
                            </div>
                          </div>
                          <div className="progress-wrapper mb-4">
                            <p>
                              Images <span className="float-end">10GB</span>
                            </p>
                            <div className="progress" style={{ height: 5 }}>
                              <div
                                className="progress-bar bg-white"
                                style={{ width: "60%" }}
                              />
                            </div>
                          </div>
                          <div className="progress-wrapper mb-4">
                            <p>
                              Mails <span className="float-end">5GB</span>
                            </p>
                            <div className="progress" style={{ height: 5 }}>
                              <div
                                className="progress-bar bg-white"
                                style={{ width: "40%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Row*/}
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-4 d-flex">
                  <div className="card radius-10 overflow-hidden w-100">
                    <div className="card-body">
                      <p>Total Earning</p>
                      <h4 className="mb-0">$287,493</h4>
                      <small>
                        1.4% <i className="bx bx-up-arrow-alt" /> Since Last Month
                      </small>
                      <hr />
                      <p>Total Sales</p>
                      <h4 className="mb-0">$87,493</h4>
                      <small>
                        5.43% <i className="bx bx-up-arrow-alt" /> Since Last Month
                      </small>
                      <div className="mt-5">
                        <div className="chart-container-4">
                          <canvas id="chart5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-8 d-flex">
                  <div className="card radius-10 w-100">
                    <div className="card-header border-bottom bg-transparent">
                      <div className="d-flex align-items-center">
                        <div>
                          <h5 className="mb-0">Customer Review</h5>
                        </div>
                        <div className="dropdown options ms-auto">
                          <div
                            className="dropdown-toggle dropdown-toggle-nocaret"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bx bx-dots-horizontal-rounded" />
                          </div>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="javascript:;">
                                Action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:;">
                                Another action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:;">
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <ul className="list-group list-group-flush review-list">
                      <li className="list-group-item bg-transparent">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/avatars/avatar-1.png"
                            alt="user avatar"
                            className="rounded-circle"
                            width={55}
                            height={55}
                          />
                          <div className="ms-3">
                            <h6 className="mb-0">
                              iPhone X <small className="ms-4">08.34 AM</small>
                            </h6>
                            <p className="mb-0 small-font">
                              Sara Jhon : This is svery Nice phone in low budget.
                            </p>
                          </div>
                          <div className="ms-auto star">
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item bg-transparent">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/avatars/avatar-2.png"
                            alt="user avatar"
                            className="rounded-circle"
                            width={55}
                            height={55}
                          />
                          <div className="ms-3">
                            <h6 className="mb-0">
                              Air Pod <small className="ml-4">05.26 PM</small>
                            </h6>
                            <p className="mb-0 small-font">
                              Danish Josh : The brand apple is original !
                            </p>
                          </div>
                          <div className="ms-auto star">
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item bg-transparent">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/avatars/avatar-3.png"
                            alt="user avatar"
                            className="rounded-circle"
                            width={55}
                            height={55}
                          />
                          <div className="ms-3">
                            <h6 className="mb-0">
                              Mackbook Pro <small className="ml-4">06.45 AM</small>
                            </h6>
                            <p className="mb-0 small-font">
                              Jhon Doe : Excllent product and awsome quality
                            </p>
                          </div>
                          <div className="ms-auto star">
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item bg-transparent">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/avatars/avatar-4.png"
                            alt="user avatar"
                            className="rounded-circle"
                            width={55}
                            height={55}
                          />
                          <div className="ms-3">
                            <h6 className="mb-0">
                              Air Pod <small className="ml-4">08.34 AM</small>
                            </h6>
                            <p className="mb-0 small-font">
                              Christine : The brand apple is original !
                            </p>
                          </div>
                          <div className="ms-auto star">
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item bg-transparent">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/avatars/avatar-9.png"
                            alt="user avatar"
                            className="rounded-circle"
                            width={55}
                            height={55}
                          />
                          <div className="ms-3">
                            <h6 className="mb-0">
                              Air Pod <small className="ml-4">05.26 PM</small>
                            </h6>
                            <p className="mb-0 small-font">
                              Danish Josh : The brand apple is original !
                            </p>
                          </div>
                          <div className="ms-auto star">
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item bg-transparent">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/avatars/avatar-7.png"
                            alt="user avatar"
                            className="rounded-circle"
                            width={55}
                            height={55}
                          />
                          <div className="ms-3">
                            <h6 className="mb-0">
                              Mackbook <small className="ml-4">08.34 AM</small>
                            </h6>
                            <p className="mb-0 small-font">
                              Michle : The brand apple is original !
                            </p>
                          </div>
                          <div className="ms-auto star">
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item bg-transparent">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/images/avatars/avatar-8.png"
                            alt="user avatar"
                            className="rounded-circle"
                            width={55}
                            height={55}
                          />
                          <div className="ms-3">
                            <h6 className="mb-0">
                              Air Pod <small className="ml-4">05.26 PM</small>
                            </h6>
                            <p className="mb-0 small-font">
                              Danish Josh : The brand apple is original !
                            </p>
                          </div>
                          <div className="ms-auto star">
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                            <i className="bx bxs-star text-white" />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*End Row*/}
              <div className="card radius-10">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div>
                      <h5 className="mb-0">Orders Summary</h5>
                    </div>
                    <div className="dropdown options ms-auto">
                      <div
                        className="dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown"
                      >
                        <i className="bx bx-dots-horizontal-rounded" />
                      </div>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:;">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr />
                  <div className="table-responsive">
                    <table className="table align-middle mb-0">
                      <thead className="table-light">
                        <tr>
                          <th>Order id</th>
                          <th>Product</th>
                          <th>Customer</th>
                          <th>Date</th>
                          <th>Price</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#897656</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="recent-product-img">
                                <img src="assets/images/icons/chair.png" alt="" />
                              </div>
                              <div className="ms-2">
                                <h6 className="mb-1 font-14">Light Blue Chair</h6>
                              </div>
                            </div>
                          </td>
                          <td>Brooklyn Zeo</td>
                          <td>12 Jul 2020</td>
                          <td>$64.00</td>
                          <td>
                            <div className="badge rounded-pill bg-light text-white w-100">
                              In Progress
                            </div>
                          </td>
                          <td>
                            <div className="d-flex order-actions">
                              {" "}
                              <a href="javascript:;" className="">
                                <i className="bx bx-cog" />
                              </a>
                              <a href="javascript:;" className="ms-4">
                                <i className="bx bx-down-arrow-alt" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#987549</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="recent-product-img">
                                <img src="assets/images/icons/shoes.png" alt="" />
                              </div>
                              <div className="ms-2">
                                <h6 className="mb-1 font-14">Green Sport Shoes</h6>
                              </div>
                            </div>
                          </td>
                          <td>Martin Hughes</td>
                          <td>14 Jul 2020</td>
                          <td>$45.00</td>
                          <td>
                            <div className="badge rounded-pill bg-light text-white w-100">
                              Completed
                            </div>
                          </td>
                          <td>
                            <div className="d-flex order-actions">
                              {" "}
                              <a href="javascript:;" className="">
                                <i className="bx bx-cog" />
                              </a>
                              <a href="javascript:;" className="ms-4">
                                <i className="bx bx-down-arrow-alt" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#685749</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="recent-product-img">
                                <img
                                  src="assets/images/icons/headphones.png"
                                  alt=""
                                />
                              </div>
                              <div className="ms-2">
                                <h6 className="mb-1 font-14">Red Headphone 07</h6>
                              </div>
                            </div>
                          </td>
                          <td>Shoan Stephen</td>
                          <td>15 Jul 2020</td>
                          <td>$67.00</td>
                          <td>
                            <div className="badge rounded-pill bg-light text-white w-100">
                              Cancelled
                            </div>
                          </td>
                          <td>
                            <div className="d-flex order-actions">
                              {" "}
                              <a href="javascript:;" className="">
                                <i className="bx bx-cog" />
                              </a>
                              <a href="javascript:;" className="ms-4">
                                <i className="bx bx-down-arrow-alt" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#887459</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="recent-product-img">
                                <img src="assets/images/icons/idea.png" alt="" />
                              </div>
                              <div className="ms-2">
                                <h6 className="mb-1 font-14">Mini Laptop Device</h6>
                              </div>
                            </div>
                          </td>
                          <td>Alister Campel</td>
                          <td>18 Jul 2020</td>
                          <td>$87.00</td>
                          <td>
                            <div className="badge rounded-pill bg-light text-white w-100">
                              Completed
                            </div>
                          </td>
                          <td>
                            <div className="d-flex order-actions">
                              {" "}
                              <a href="javascript:;" className="">
                                <i className="bx bx-cog" />
                              </a>
                              <a href="javascript:;" className="ms-4">
                                <i className="bx bx-down-arrow-alt" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#335428</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="recent-product-img">
                                <img
                                  src="assets/images/icons/user-interface.png"
                                  alt=""
                                />
                              </div>
                              <div className="ms-2">
                                <h6 className="mb-1 font-14">Purple Mobile Phone</h6>
                              </div>
                            </div>
                          </td>
                          <td>Keate Medona</td>
                          <td>20 Jul 2020</td>
                          <td>$75.00</td>
                          <td>
                            <div className="badge rounded-pill bg-light text-white w-100">
                              In Progress
                            </div>
                          </td>
                          <td>
                            <div className="d-flex order-actions">
                              {" "}
                              <a href="javascript:;" className="">
                                <i className="bx bx-cog" />
                              </a>
                              <a href="javascript:;" className="ms-4">
                                <i className="bx bx-down-arrow-alt" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#224578</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="recent-product-img">
                                <img src="assets/images/icons/watch.png" alt="" />
                              </div>
                              <div className="ms-2">
                                <h6 className="mb-1 font-14">Smart Hand Watch</h6>
                              </div>
                            </div>
                          </td>
                          <td>Winslet Maya</td>
                          <td>22 Jul 2020</td>
                          <td>$80.00</td>
                          <td>
                            <div className="badge rounded-pill bg-light text-white w-100">
                              Cancelled
                            </div>
                          </td>
                          <td>
                            <div className="d-flex order-actions">
                              {" "}
                              <a href="javascript:;" className="">
                                <i className="bx bx-cog" />
                              </a>
                              <a href="javascript:;" className="ms-4">
                                <i className="bx bx-down-arrow-alt" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#447896</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="recent-product-img">
                                <img src="assets/images/icons/tshirt.png" alt="" />
                              </div>
                              <div className="ms-2">
                                <h6 className="mb-1 font-14">T-Shirt Blue</h6>
                              </div>
                            </div>
                          </td>
                          <td>Emy Jackson</td>
                          <td>28 Jul 2020</td>
                          <td>$96.00</td>
                          <td>
                            <div className="badge rounded-pill bg-light text-white w-100">
                              Completed
                            </div>
                          </td>
                          <td>
                            <div className="d-flex order-actions">
                              {" "}
                              <a href="javascript:;" className="">
                                <i className="bx bx-cog" />
                              </a>
                              <a href="javascript:;" className="ms-4">
                                <i className="bx bx-down-arrow-alt" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end page wrapper */}
          {/*start overlay*/}
          <div className="overlay toggle-icon" />
          {/*end overlay*/}
          {/*Start Back To Top Button*/}{" "}
          <a href="javaScript:;" className="back-to-top">
            <i className="bx bxs-up-arrow-alt" />
          </a>
          {/*End Back To Top Button*/}
          <footer className="page-footer">
            <p className="mb-0">Copyright © 2023. All right reserved.</p>
          </footer>
        </div>
        {/*end wrapper*/}
        {/*start switcher*/}
        <div className="switcher-wrapper">
          <div className="switcher-btn">
            {" "}
            <i className="bx bx-cog bx-spin" />
          </div>
          <div className="switcher-body">
            <div className="d-flex align-items-center">
              <h5 className="mb-0 text-uppercase">Theme Customizer</h5>
              <button
                type="button"
                className="btn-close ms-auto close-switcher"
                aria-label="Close"
              />
            </div>
            <hr />
            <p className="mb-0">Gaussian Texture</p>
            <hr />
            <ul className="switcher">
              <li id="theme1" />
              <li id="theme2" />
              <li id="theme3" />
              <li id="theme4" />
              <li id="theme5" />
              <li id="theme6" />
            </ul>
            <hr />
            <p className="mb-0">Gradient Background</p>
            <hr />
            <ul className="switcher">
              <li id="theme7" />
              <li id="theme8" />
              <li id="theme9" />
              <li id="theme10" />
              <li id="theme11" />
              <li id="theme12" />
              <li id="theme13" />
              <li id="theme14" />
              <li id="theme15" />
            </ul>
          </div>
        </div>
        
      </div>
    )
}
