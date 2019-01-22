import React from 'react'
import { connect } from 'react-redux'
import { toggleExamplesModal } from '../../../actions/modals'
import Icon from '../Icons/Icon'

const ExamplesBlock = (props) => {
    return (
        <div className="admin-advantages__item admin-advantages__item-result">
            <div className="advantages-image">
                <Icon id="icon-your-result" />
            </div>
            <div className="advantages-descr">
                <div className="advantages-descr__title">Что вы получите в итоге?</div>
                <div className="advantages-descr__text">
                    <button onClick={props.openModal} type="button" className="link-with-icon fix_icon-right fix_color-green">
                        <span>Пример результатов</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    openModal: () => dispatch(toggleExamplesModal(true))
})

export default connect(null, mapDispatchToProps)(ExamplesBlock)
