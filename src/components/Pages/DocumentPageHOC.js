import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Dump/Icons/Icon'

function DocumentPageHOC({ children }) {
    return (
        <div className="main-popup-wrapper">
            <div className="text-overlay">
                <div className="c-admin-payment-license">
                    <Link to="/" className="c-admin-payment-license__logo">
                        <Icon id="icon-logo" />
                    </Link>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DocumentPageHOC
