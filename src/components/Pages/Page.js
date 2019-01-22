import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import LeftMenu from '../Dump/LeftMenu/LeftMenu'
import CookieMessage from '../Dump/CookieMessage/CookieMessage'

import CatchError from '../Smart/CatchError/CatchError'
import DemoBlock from '../Dump/DemoBlock/DemoBlock'

const Page = ({ children, loading, cookiePolicyAccepted }) => {
    return (
        <main>
            <div id="top-blocks">
                <DemoBlock />
            </div>
            <div className="admin-wrap">
                <LeftMenu />
                <div className={classNames('main-content-wrapper', {
                    'main-content-wrapper-loading': loading,
                    'main-content-wrapper-pb': !cookiePolicyAccepted,
                })}>
                    {loading &&
                        <div className="admin-preloader">
                            <div className="spinner"></div>
                        </div>
                    }
                    <CatchError>
                        {children}
                    </CatchError>
                </div>
                <CookieMessage />
            </div>
        </main>
    )
}

const mapStateToProps = state => {
    const user = state.remote.auth.register.user
    return {
        cookiePolicyAccepted: user ? user.cookiePolicyAccepted : true,
    }
}

export default connect(mapStateToProps)(Page)
