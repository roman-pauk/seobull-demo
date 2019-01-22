import React, { Component } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Icon from '../Icons/Icon'
import { toggleHelpModal } from '../../../actions/modals'

class LeftMenu extends Component {
    
    componentDidMount() {
        if (document.body.classList.contains('desctop-browser')) {
            this.fixMenu()
            window.addEventListener('scroll', this.fixMenu)
        }
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.fixMenu)
    }

    fixMenu = () => {
        let menu = null,
            wp = null
        try {
            menu = document.querySelector('.c-admin-nav')
            wp = document.querySelector('.c-admin-nav__wrap').getBoundingClientRect()
        } catch (err) {
            console.error(err)
            return
        }
        if (wp.top <= 0) {
            menu.classList.add('fixed')
        } else {
            menu.classList.remove('fixed')
        }
    }
    
    render () {
        const { cookiePolicyAccepted } = this.props
        return (
            <div className="c-admin-nav__wrap">
                <div className={classNames('c-admin-nav', {
                    'c-admin-nav-pb': !cookiePolicyAccepted
                })}>
                    <div className="admin-logo">
                        <Link to="/">
                            <Icon id="icon-logo-admin" />
                        </Link>
                    </div>
                    <div className="admin-nav">
                        <ul className="admin-menu">
                            <li className="admin-menu__item">
                                <Link to="/" className="admin-menu__link">
                                    <Icon id="icon-progress" />
                                    Прогресс работы
                                </Link>
                            </li>
                            <li className="admin-menu__item">
                                <Link to="/billing" className="admin-menu__link">
                                    <Icon id="icon-payment" />
                                    Мои оплаты
                                </Link>
                            </li>
                        </ul>
                        <div className="admin-bottom">
                            <ul className="admin-menu">
                                <li className="admin-menu__item">
                                    <Link to="/account" className="admin-menu__link">
                                        <Icon id="icon-admin-user" />
                                        Мой акканут
                                    </Link>
                                </li>
                                {/* <div className="admin-question">
                                    <button onClick={props.openModal}>Есть вопрос?</button>
                                </div> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const user = state.remote.auth.register.user
    return {
        cookiePolicyAccepted: user ? user.cookiePolicyAccepted : true,
    }
}


const mapDispatchToProps = dispatch => ({
    openModal: () => dispatch(toggleHelpModal(true))
})

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu)
