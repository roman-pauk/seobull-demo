import React, { Component } from 'react'
import { connect } from 'react-redux'
import { projectSetState, projectPay } from '../../../actions/project'
import config from '../../../config'

const { devTools } = config

const prStates = [
    'need_engine',
    'waiting_first_call',
    'need_analytics',
    'waiting_stats',
    'need_first_payment',
    'analysis_in_progress',
    'offer_ready',
    'waiting_payment',
    'work_in_progress',
]

class FakePayment extends Component {
    onChangeState = state => {
        this.props.projectSetState({
            input: {
                projectId: this.props.projectId,
                state,
            }
        })
    }
    onPay = action => {
        this.props.projectPay({
            input: {
                projectId: this.props.projectId,
                analysisAction: action,
            }
        })
    }

    render() {
        if (!devTools) {
            return null
        }
        return (
            <div className="analysis-item__access analysis-item__progress fake-metods__wp" style={{marginBottom: '20px'}}>
                <h4 className="title">Методы для отладки</h4>
                <div className="fake-metods">
                    {prStates.map(st => (
                        <button key={st} onClick={() => this.onChangeState(st)} type="button" className="link-with-icon fix_icon-right fix_color-green admin-start">
                            <span>{st}</span>
                        </button>
                    ))}
                    <button onClick={() => this.onPay('update')} type="submit" className="link-with-icon fix_icon-right fix_color-green admin-start">
                        <span>Update analysis</span>
                    </button>

                    <button onClick={() => this.onPay('ready')} type="submit" className="link-with-icon fix_icon-right fix_color-green admin-start">
                        <span>To ready state</span>
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    projectId: state.remote.auth.register.user.defaultProject.id
})

export default connect(mapStateToProps, { projectSetState, projectPay })(FakePayment)
