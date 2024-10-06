import React from 'react';
import siteLogo from '../images/site-logo.svg';

export default function Header() {
    return (
        <>
            <header className="header-section">
                <div className="header-wrapper header-inner d-flex align-items-center justify-content-between">
                    <div className="left-header d-flex align-items-center">
                        <div className="header-logo logo">
                        <img src={siteLogo} alt="Site Logo" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
