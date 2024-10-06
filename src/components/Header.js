import React from 'react';
import siteLogo from '../images/site-logo.svg';
import topBarCross from '../images/topbar-cross-icon.svg';


export default function Header() {
    return (
        <>
            <header className="header-section">
                <div className="top-bar center-align" id="top-bar-ajax">
                    <div className="header-wrapper">
                        <div className="top-bar-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, distinctio.
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="top-bar-cross">
                        <span>
                            <img src={topBarCross} width="16" height="16" alt="Top bar" />
                        </span>
                    </div>
                </div>
                <div className="header-wrapper header-inner d-flex align-items-center justify-content-between">
                    <div className="left-header d-flex align-items-center">
                        <div className="header-logo logo">
                        <img src={siteLogo} alt="Site Logo" />
                        </div>
                        <div className="header-navigation">
                            <div className="nav-overlay">
                                <div className="nav-container">
                                    <div className="header-nav">
                                        <ul>
                                            <li><a href="#">Why Mongoose?</a></li>
                                            <li className="menu-item current-menu-item mega-menu-platform have-mega-menu">
                                                <a href="#">Platform</a>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">Resources</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="#">Education</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Forensics</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Therapy</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Medical</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Plans</a></li>
                                        </ul>
                                    </div>
                                    <div className="header-btns desktop-hide">
                                        <div className="search-area">
                                            <div className="header-search-form">
                                                <form action="">
                                                    <input type="search" placeholder="Type here" />
                                                    <input type="submit" />
                                                </form>
                                                <button className="form-close-button have-no-button-style js-search-close"></button>
                                            </div>
                                            <button className="top-search have-no-button-style"></button>
                                        </div>
                                        <a href="#" className="button gray" title="Login">Login</a>
                                        <a href="#" className="button" title="Book a Demo">Book a Demo</a>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-btn">
                                <span className="top"></span>
                                <span className="middle"></span>
                                <span className="bottom"></span>
                            </div>
                        </div>
                    </div>
                    <div className="header-btns modile-hide">
                        <div className="search-area">
                            <div className="header-search-form">
                                <form action="">
                                    <input type="search" placeholder="Type here" />
                                    <input type="submit" />
                                </form>
                                <button className="form-close-button have-no-button-style js-search-close"></button>
                            </div>
                            <button className="top-search js-search-open have-no-button-style"></button>
                        </div>
                        <a href="#" className="button gray" title="Login">Login</a>
                        <a href="#" className="button" title="Book a Demo">Book a Demo</a>
                    </div>
                </div>
                <div id="platform-mega-menu" className="mega-menu">
                    <div className="menu-item-child">
                        <a href="#">
                            <div className="menu-item-child-img">
                                <img src="../assets/src/images/sms-icon.svg" alt="" />
                            </div>
                            <div className="menu-item-child-content">
                                <div className="menu-item-child-content-heading">
                                    SMS Texting
                                </div>
                                <div className="menu-item-child-content-detail">
                                    Short description of the function
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="menu-item-child">
                        <a href="#">
                            <div className="menu-item-child-img">
                                <img src="../assets/src/images/live-icon.svg" alt="" />
                            </div>
                            <div className="menu-item-child-content">
                                <div className="menu-item-child-content-heading">
                                    Live Chat
                                </div>
                                <div className="menu-item-child-content-detail">
                                    Short description of the function
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="menu-item-child">
                        <a href="#">
                            <div className="menu-item-child-img">
                                <img src="../assets/src/images/ai-icon.svg" alt="" />
                            </div>
                            <div className="menu-item-child-content">
                                <div className="menu-item-child-content-heading">
                                    AI Chatbot
                                </div>
                                <div className="menu-item-child-content-detail">
                                    Short description of the function
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="menu-item-child">
                        <a href="#">
                            <div className="menu-item-child-img">
                                <img src="../assets/src/images/insight-icon.svg" alt="" />
                            </div>
                            <div className="menu-item-child-content">
                                <div className="menu-item-child-content-heading">
                                    Insight
                                </div>
                                <div className="menu-item-child-content-detail">
                                    Short description of the function
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}
