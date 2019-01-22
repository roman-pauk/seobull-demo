import React from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../../../helpers'

function ImplementationBlock({ currentPeriod }) {
    const startDate = formatDate(currentPeriod.startDate)
    const finishDate = formatDate(currentPeriod.finishDate)
    return (
        <div className="analysis-item analysis-item__access analysis-item__progress">
            <div className="access-item">
                <div className="title">Выполнение первого этапа</div>
                <div className="text">Мы приступили к выполнению первого этапа, по мере выполнения в каждом пункте вы сможете посмотреть результат.</div>
            </div>
            <div className="proggres-image"><span>Срок выполнения</span>
                <p>{startDate} – {finishDate}</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentPeriod: state.remote.auth.register.user.defaultProject.currentPeriod
})


export default connect(mapStateToProps)(ImplementationBlock)
