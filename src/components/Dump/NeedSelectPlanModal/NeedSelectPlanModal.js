import React from 'react'
import { connect } from 'react-redux'
import ModalComponent from '../../Dump/ModalComponent/ModalComponent'
import { toggleNeedPlanModal } from '../../../actions/modals'
import { scrollToPlan } from '../../../helpers'

function NeedSelectPlanModal({ modal, close }) {
    return (
        <ModalComponent
            isOpen={modal.isOpened}
            shouldCloseOnOverlayClick={true}
            onRequestClose={close}
            popupClass="admin-popup admin-popup--info"
        >
            <div className="admin-popup__title">
                <div className="popup-text">Необходимо выбрать тариф</div>
            </div>
            <div className="admin-popup__wrap">
                <p className="info-text">Полный список ошибок доступен только после старта работ над сайтом</p>
            </div>
        </ModalComponent>
    )
}

const mapStateToProps = (state) => ({
    modal: state.local.modals.need_select_palan
})

const mapDispatchToProps = dispatch => ({
    close: () => {
        dispatch(toggleNeedPlanModal(false))
        scrollToPlan()
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(NeedSelectPlanModal)
