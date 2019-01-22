import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StackTrace from 'stacktrace-js'
import Icon from '../../Dump/Icons/Icon'
import { reloadPage } from '../../../helpers'

const ErrorInfo = () => {
    return (
        <div className="c-admin-content">
            <div className="admin__item">
                <div className="d-flex align-items-center">
                    <div className="infoBlock__img infoBlock__img-error">
                        <Icon id="icon-attention"/>
                    </div>
                    <div className="infoBlock__text">
                        <div>Произошла непредвиденная ошибка.</div>
                        <div className="infoBlock__subtxt">Мы уже занимаемся её исправлением</div>
                    </div>
                </div>
                <div className="infoBlock__btn">
                    <button onClick={reloadPage} type="button" className="link-with-icon fix_color-green admin-start">
                        <span>Перезагрузить</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

class CatchError extends Component {
    state = {
        hasErrs: false
    }
    static defaultProps = {
        errorComonent: <ErrorInfo />
    }

    async componentDidCatch(error, info) {
        this.setState({ hasErrs: true })
        console.log(info)
        console.log(error.message)
        // console.log('send errors to server')
        const errs = await StackTrace.fromError(error)
        console.log(errs)
    }

    render() {
        if (this.state.hasErrs) {
            return this.props.errorComonent
        }
        return this.props.children
    }
}

CatchError.propTypes = {
    errorComonent: PropTypes.node
}

export default CatchError
