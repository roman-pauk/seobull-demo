import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import Icon from '../Icons/Icon'
import { projectPay } from '../../../actions/project'
import { formatDate } from '../../../helpers'

class WaitingPaymentBlock extends Component {
    onPay = () => {
        this.props.projectPay({
            input: {
                projectId: this.props.projectId
            }
        })
    }
    render () {
        const { currentPeriod } = this.props
        const startDate = formatDate(currentPeriod.startDate)
        const finishDate = formatDate(currentPeriod.finishDate)
        return (
            <div className="progress-payment">
                <div className="progress-payment__text">
                    <div className="progress-payment__item">
                        <span>Стоимость этапа:</span>
                        <p>15 000 руб.</p>
                    </div>
                    <div className="progress-payment__item">
                        <span>Время ({startDate} – {finishDate}):</span>
                        <p>1 месяц</p>
                    </div>
                </div>
                <div className="progress-payment__button">
                    {/* <Link to="/payment" className="link-with-icon fix_icon-right fix_color-green admin-start">
                        <span>Оплатить</span>
                        <Icon id="icon-double-circle" />
                    </Link> */}
                    <button onClick={this.onPay} className="link-with-icon fix_icon-right fix_color-green admin-start">
                        <span>Оплатить</span>
                        <Icon id="icon-double-circle" />
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    projectId: state.remote.auth.register.user.defaultProject.id,
    currentPeriod: state.remote.auth.register.user.defaultProject.currentPeriod
})


export default connect(mapStateToProps, { projectPay })(WaitingPaymentBlock)
