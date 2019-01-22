import React from 'react'
import { connect } from 'react-redux'

import Page from './Page'
import StartBlock from '../Dump/StartBlock/StartBlock'
import CheckEngine from '../Smart/CheckEngine/CheckEngine'
import ResultInfo from '../Dump/ResultInfo/ResultInfo'
import ExamplesBlock from '../Dump/ExamplesBlock/ExamplesBlock'
import AdvBlock from '../Dump/AdvBlock/AdvBlock'
import advBlocks from './advBlocks'
// import ImplementationBlock from '../Dump/ImplementationBlock/ImplementationBlock'
import WaitingStatBlock from '../Dump/WaitingStatBlock/WaitingStatBlock'
import WaitingPaymentBlock from '../Dump/WaitingPaymentBlock/WaitingPaymentBlock'
import ProjectStatusBlock from '../Dump/ProjectStatusBlock/ProjectStatusBlock'

import FakePayment from '../Dump/FakePayment/FakePayment'

// import WaitPaymentWithSelect from '../Smart/WaitPaymentWithSelect/WaitingPayment'
import ProgressInfo from '../Dump/ProgressInfo/ProgressInfo'

import NeedSelectPlanModal from '../Dump/NeedSelectPlanModal/NeedSelectPlanModal'


function HomePage({ user }) {
    const state = user.defaultProject ? user.defaultProject.state : ''
    return (
        <Page>
            <div className="c-admin-content">
                {state != 'offer_ready' &&
                    <div className="admin-title">Прогресс работы</div>
                }
                {state === 'analysis_in_progress' &&
                    <ProjectStatusBlock title="В процессе работы" />
                }
                <FakePayment />
                <ProgressInfo state={state} />
                {state === 'need_analytics' &&
                    <StartBlock />
                }
                {state === 'need_engine' &&
                    <CheckEngine />
                }
                {state === 'waiting_stats' &&
                    <WaitingStatBlock />
                }
                {state === 'need_first_payment' &&
                    <WaitingPaymentBlock />
                }
                {(state === 'waiting_stats' || state === 'need_first_payment') &&
                    <button type="button" className="analysis-question">Что будет делаться?</button>
                }
                {(!['work_in_progress', 'offer_ready', 'waiting_payment'].includes(state)) &&
                    <div className="admin-wrap-content">
                        <div className="admin-advantages">
                            <ExamplesBlock />
                            {advBlocks.map(el => <AdvBlock key={el.icon} {...el} />)}
                        </div>
                        <ResultInfo />
                    </div>
                }
            </div>
            <NeedSelectPlanModal />
        </Page>
    )
}

const mapStateToProps = (state) => ({
    user: state.remote.auth.register.user
})


export default connect(mapStateToProps)(HomePage)
