import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import Icon from '../Icons/Icon'


function WaitingNextPayment({project}) {
    const selectedPlanId = _.get(project, 'currentPurchase.plan.id', '')
    const requiredToPayMonths = project.requiredToPayMonths
    if (project.state !== 'waiting_payment') {
        return null
    }
    return (
        <div className="admin__item">
            <div className="d-flex align-items-center">
                <div className="infoBlock__img">
                    <Icon id="icon-clock-orange" />
                </div>
                <div className="infoBlock__text">
                    {requiredToPayMonths
                        ? <span>Необходимо оплатить просроченные периоды</span>
                        : <span>Ожидаем платёж за следующий месяц</span>
                    }
                </div>
            </div>
            <div className="infoBlock__btn">
                <Link to={{
                    pathname: '/payment',
                    state: {
                        selectedPlanId
                    }
                }} className="link-with-icon fix_icon-right fix_color-green admin-start">
                    <span>Оплатить</span>
                    <Icon id="icon-arrow-right" />
                </Link>
            </div>
        </div>
    )
}

export default WaitingNextPayment
