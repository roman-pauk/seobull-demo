import React from 'react'
import { connect } from 'react-redux'
import ModalComponent from '../ModalComponent/ModalComponent'
import Icon from '../Icons/Icon'
import { toggleDemoModal } from '../../../actions/modals'

function DemoModal(props) {
    return (
        <ModalComponent
            isOpen={props.modal.isOpened}
            shouldCloseOnOverlayClick={true}
            onRequestClose={props.closeModal}
            popupClass="admin-popup admin-demo-popup"
        >
            <div className="admin-demo-popup__content">
                <div className="admin-demo-popup__icon">
                    <Icon id="icon-warning" />
                </div>
                <span className="admin-demo-popup__ttl fix_mb32">Действие недоступно в&nbsp;демо&nbsp;режиме</span>
                <button onClick={props.closeModal} type="button" className="link-admin-small fix_color-green">
                    <span>Продолжить</span>
                </button>
            </div>
        </ModalComponent>
    )
}

const mapStateToProps = state => ({
    modal: state.local.modals.demoModal
})

export default connect(mapStateToProps, { closeModal: () => toggleDemoModal(false) })(DemoModal)
