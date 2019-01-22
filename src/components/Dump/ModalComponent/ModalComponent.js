import React, { Component } from 'react'
import Modal from 'react-modal'
import Icon from '../Icons/Icon'

class ModalComponent extends Component {
    handleOverlayClick = (e) => {
        if (this.props.shouldCloseOnOverlayClick && e.target.className === 'r_modal-dialog') {
            this.props.onRequestClose()
        }
    }
    render () {
        return (
            <Modal
                className="r_modal-d"
                overlayClassName="r_popup-over"
                isOpen={this.props.isOpen}
                shouldCloseOnOverlayClick={this.props.shouldCloseOnOverlayClick}
                onRequestClose={this.props.onRequestClose}
                ariaHideApp={false}>
                <div className="r_popup-overlay" onClick={this.handleOverlayClick}>
                    <div className="r_modal-dialog">
                        <div className={this.props.popupClass}>
                            <button onClick={this.props.onRequestClose} type="button" className="close">
                                <Icon id="icon-cross" />
                            </button>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default ModalComponent
