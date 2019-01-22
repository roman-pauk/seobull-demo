import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import Icon from '../Icons/Icon'
import { changeProjectState } from '../../../actions/project'

class DemoBlock extends Component {
    onLogOut = () => {
        this.props.logOut()

    }
    onBtnClick = ({ currentTarget }) => {
        this.props.changeProjectState(currentTarget.value)
        if (this.props.location.pathname !== '/') {
            this.props.history.push('/')
        }
    }
    render () {
        const { projectState, isDemo } = this.props
        if (!isDemo) {
            return null
        }
        return (
            <div className="demoBlock">
                <div className="demoBlock__left">
                    <Icon id="icon-logo-head-white" />
                    <p>Демонстрация этапов</p>
                </div>
                <ul className="demoBlock__tabs">
                    <li className={classNames({
                        'active': projectState === 'offer_ready'
                    })}>
                        <button onClick={this.onBtnClick} value="offer_ready" type="button">
                            <span>Коммерческое предложение</span>
                        </button>
                    </li>
                    <li className={classNames({
                        'active': projectState === 'work_in_progress'
                    })}>
                        <button onClick={this.onBtnClick} value="work_in_progress" type="button">
                            <span>Процесс продвижения</span>
                        </button>
                    </li>
                </ul>
                <div className="demoBlock__right">
                    <Link to={{
                        pathname: '/register',
                        state: {
                            logOutUser: true,
                        }
                    }} className="link-with-icon fix_icon-right fix_color-green">
                        <span>Создать аккаунт</span>
                        <Icon id="icon-arrow-right-small" />
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const user = state.remote.auth.register.user
    return {
        projectState: user ? user.defaultProject.state : '',
        isDemo: user ? user.demo : false,
    }
}

export default withRouter(connect(mapStateToProps, { changeProjectState })(DemoBlock))
