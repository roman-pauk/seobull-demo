import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import Icon from '../../Dump/Icons/Icon'
import { InputField } from '../../Dump/FormInputs/InputFields'
import { required } from '../../Dump/FormInputs/validateFunctions'
import { getPromoCode } from '../../../actions/auth'

import dogImg from './img/dog.svg'

class PromoForm extends Component {

    state = {
        new: true
    }

    UNSAFE_componentWillReceiveProps (nextProps) {
        if (nextProps.promo.success && nextProps.promo.success !== this.props.promo.success) {
            this.setState({
                new: false
            })
        }
    }
    
    componentDidMount() {
        document.body.addEventListener('click', this.bodyListener)
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.bodyListener)
    }

    bodyListener = (e) => {
        if (!e.target.closest('.modal-dropdown-promo') && !e.target.closest('.js-edit-btn') && this.props.opened) {
            this.props.hideForm()
        }
    }
    onFormSubmit = () => {
        const code = this.props.promo_form.values.user_promo
        this.props.getPromoCode({
            input: {
                code
            }
        }, code)
    }
    render() {
        const { pristine, submitting, hideForm, promo } = this.props

        if (promo.type === 'umka' && !this.state.new) {
            return (
                <div className="modal-dropdown-promo">
                    <div className="dropdown-promo-cross">
                        <button onClick={hideForm} type="button" className="js-exit-btn">
                            <Icon id="icon-cross" />
                        </button>
                    </div>
                    <div className="fake-promo">
                        <img src={dogImg} alt="dog" />
                        <div className="fake-promo__title">Вы думали тут скидка?</div>
                        <div className="fake-promo__subTitle">А тут даже лучше, нарисованная собака, гав-гав.</div>
                        <button onClick={hideForm} type="button" className="link-with-icon fix_color-green admin-start">
                            <span>Ок</span>
                        </button>
                    </div>
                </div>
            )
        }
        return (
            <div className="modal-dropdown-promo">
                <div className="dropdown-promo-cross">
                    <button onClick={hideForm} type="button" className="js-exit-btn">
                        <Icon id="icon-cross" />
                    </button>
                </div>
                <span className="dropdown-promo-ttl">Введите промокод</span>
                <Field
                    name="user_promo"
                    label="XXXX–XXXX–XXXX"
                    autoCapitalize="characters"
                    component={InputField}
                    validate={[required]} />
                {promo.type === 'unknown_code' && <div className="form-control-errors text-center">Неизвестный промокод</div>}
                <div className="dropdown-promo-exit">
                    <button onClick={this.onFormSubmit} type="button" disabled={pristine || submitting || promo.fetching} className="js-exit-btn"><span>Применить</span></button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    promo_form: state.form.promo_form,
    promo: state.remote.auth.promo,
})


export default connect(mapStateToProps, { getPromoCode })(reduxForm({
    form: 'promo_form',
    touchOnBlur: false,
})(PromoForm))

