import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Icon from '../Icons/Icon'
import Button from '../LoadingButton/LoadingButton'
import { hideCookiesMsg } from '../../../actions/auth'

function CookieMessage({ cookiePolicyAccepted, cookie_msg, hideCookiesMsg }) {
    if (cookiePolicyAccepted) {
        return null
    }
    return (
        <div className="create-account-fixed">
            <div className="create-account-fixed__left">
                <Icon id="icon-logo-head-white" />
                <p>Для корректной работы сайта необходимо использование технологии cookies. Продолжение использование сайта означает что вы не возражаете против использования этой технологии, <a href="https://ru.wikipedia.org/wiki/Cookie" target="_blank" rel="noopener noreferrer">подробнее о cookie</a>
                    <span><Link to="/privacy" target="_blank">Политика конфиденциальности</Link></span>
                </p>
            </div>
            <div className="create-account-fixed__right">
                <Button loading={cookie_msg.fetching} disabled={cookie_msg.fetching} onClick={hideCookiesMsg} type="button" className="link-with-icon fix_color-green">
                    <span>Разрешить</span>
                    <Icon id="icon-arrow-right-small" />
                </Button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    const user = state.remote.auth.register.user
    return {
        cookiePolicyAccepted: user ? user.cookiePolicyAccepted : true,
        cookie_msg: state.remote.auth.cookie_msg,
    }
}


export default connect(mapStateToProps, { hideCookiesMsg })(CookieMessage)
