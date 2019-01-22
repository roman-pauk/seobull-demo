import React, { Component } from 'react'
import InputMask from 'react-input-mask'
import Select, { components } from 'react-select'
import { Scrollbars } from 'react-custom-scrollbars'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import Icon from '../Icons/Icon'
import { monthsPd, declOfNum, formatNumber } from '../../../helpers'

export const InputField = ({
    input,
    label,
    type,
    autoCapitalize,
    showLabel,
    readOnly,
    meta: { touched, error }
}) => (
    <div className="form-group">
        <div className="input-wrap">
            {showLabel && <label>{label}</label>}
            <input {...input} type={type} placeholder={showLabel ? null : label} disabled={readOnly} autoCapitalize={autoCapitalize ? autoCapitalize : null} className="form-control form-decor" />
        </div>
        {touched && error && <span className="form-control-errors">{error}</span>}
    </div>
)

export const TextareaField = ({
    input,
    label,
    placeholder,
    id,
    meta: { touched, error }
}) => (
    <div>
        <div className="input-wrap">
            <label htmlFor={id} className="label-textarea">{label}</label>
            <textarea {...input} placeholder={placeholder} id={id} className="form-control form-decor form-textarea"></textarea>
        </div>
        {touched && error && <span className="form-control-errors">{error}</span>}
    </div>
)

export const CheckField = ({
    input,
    type,
    meta: { touched, error }
}) => (
    <div className="form-group">
        <div className="input-wrap">
            <label className="check-label">
                <input {...input} type={type} className="check-label__input" />
                <span className="check-label__icon"></span>
                <div className="check-label__text">Регистрируясь, вы принимаете <Link target="_blank" to="/privacy">условия соглашения.</Link></div>
            </label>
        </div>
        {touched && error && <span className="form-control-errors">Необходимо согласиться с <Link target="_blank" to="/privacy">условиями соглашения</Link>.</span>}
    </div>
)

export const PaymentCheckField = ({
    input,
    meta: { touched, error }
}) => {
    return (
        <div className="form-group form-to-check">
            <div className="input-wrap">
                <label className="checkbox-label">
                    <input {...input} type="checkbox" checked={!!input.value} className="hidden-input" />
                    <span className="check-icon"></span>
                    <div className="check-value">Нажимая кнопку, вы соглашаетесь с <Link target="_blank" to="/terms-of-service">договором оферты.</Link></div>
                </label>
            </div>
            {touched && error && <span className="form-control-errors">Необходимо согласиться с <Link target="_blank" to="/terms-of-service">договором оферты</Link>.</span>}
        </div>
    )
}

export const MaskedField = ({
    input,
    label,
    mask,
    maskChar,
    readOnly,
    showLabel,
    type,
    meta: { touched, error }
}) => (
    <div className="form-group">
        <div className="input-wrap">
            {showLabel && <label>{label}</label>}
            <InputMask mask={mask} maskChar={maskChar} {...input} type={type} disabled={readOnly} placeholder={label} className="form-control form-decor" />
        </div>
        {touched && error && <span className="form-control-errors">{error}</span>}
    </div>
)


// custom select
const selectThumb = ({ style, ...props }) => {
    const styles = {
        width: '4px',
        right: '0px',
        borderRadius: '2px',
        backgroundColor: '#765AEA',
    }
    return (
        <div
            style={{ ...style, ...styles }}
            {...props} />
    )
}

const renderTrackVertical = ({ style, ...props }) => {
    const styles = {
        position: 'absolute',
        width: '4px',
        right: '0px',
        bottom: '0px',
        top: '0px',
        borderRadius: '3px',
        backgroundColor: '#F3F3F8',
    }
    return (
        <div
            style={{ ...style, ...styles }}
            {...props} />
    )
}

export const EngineMenu = (props) => {
    return (
        <div className="engine-menu">
            <div className="dropdown-promo-cross">
                <button type="button" className="js-exit-btn">
                    <Icon id="icon-cross" />
                </button>
            </div>
            <div className="engine-menu-list" {...props.innerProps}>
                <Scrollbars
                    className="engine-menu-scroll"
                    renderThumbVertical={selectThumb}
                    renderTrackVertical={renderTrackVertical}
                    style={{ height: props.height ? props.height : 370 }}>
                    {props.children}
                </Scrollbars>
            </div>
        </div>
    )
}

export const EngineOption = ({innerProps, data, isDisabled, isSelected}) => {
    return (isDisabled || !isSelected) ? (
        <div {...innerProps} className="engine-option">
            <span>{data.label}</span>
            {data.img &&
                <div className="engine-option-icon">
                    <img src={data.img} alt={data.label} />
                </div>
            }
        </div>
    ) : null
}

export const SelectField = ({
    input,
    label,
    options,
    components,
    readOnly,
    showLabel,
    onFieldChange,
    classNamePrefix,
    meta: { touched, error }
}) => (
    <div className="form-group">
        {showLabel && <label>{label}</label>}
        <Select
            className="react-custom-select"
            classNamePrefix={classNamePrefix ? classNamePrefix : 'rg'}
            isSearchable={false}
            onChange={(val) => onFieldChange(input.name, val)}
            options={options}
            name={input.name}
            components={components}
            placeholder={label}
            value={input.value}
            onFocus={input.onFocus}
            isDisabled={readOnly}
        />
        {touched && error && <span className="form-control-errors">{error}</span>}
    </div>
)

// regions select
const pd = ['регион', 'региона', 'регионов']

const DropDown = ({ values, errors, touched, onOpen, onDelete, children, isDisabled, showLabel, label}) => {
    return (
        <div className={isDisabled ? 'select-drop-disabled' : null}>
            {showLabel && <label>{label}</label>}
            <button onClick={onOpen} type="button" className="modal-search-btn">
                <span>{(values && values.length) ? `${values.length} ${declOfNum(values.length, pd)}` : 'Регион'}</span>
                <Icon id="icon-arrow-down" />
            </button>
            {touched && errors && <span className="form-control-errors">{errors}</span>}
            {values &&
                <div className="modal-content-regions">
                    {values.map(r => (
                        <div key={r.value} className="modal-region-item">
                            <span>
                                {r.label}
                            </span>
                            <button onClick={() => onDelete(r.value)} type="button">
                                <Icon id="icon-small-cross" />
                            </button>
                        </div>
                    ))}
                </div>
            }
            {children}
        </div>
    )
}

const MultiValueContainer = (props) => {
    return (
        <div style={{display: 'none'}}>
            <components.MultiValueContainer {...props}/>
        </div>
    )
}

const RegionOption = ({innerProps, data, isDisabled, isSelected}) => {
    return !isDisabled ? (
        <div {...innerProps} className={`region-option ${isSelected && 'selected'}`}>
            <span className="region-option-label">{data.label}</span>
            <span className="region-option-check"></span>
        </div>
    ) : null
}

const RegionMenu = (props) => {
    return (
        <div className="engine-menu">
            <div className="engine-menu-list" {...props.innerProps}>
                <Scrollbars
                    className="engine-menu-scroll"
                    renderThumbVertical={selectThumb}
                    renderTrackVertical={renderTrackVertical}
                    style={{ height: 220 }}>
                    {props.children}
                </Scrollbars>
            </div>
        </div>
    )
}

export class RegionsField extends Component {
    state = {
        isOpen: false,
    }
    toggleOpen = () => {
        if (this.props.readOnly) {
            return
        }
        this.setState(state => ({ isOpen: !state.isOpen }))
    }
    onSelectChange = (values) => {
        if (this.props.readOnly) {
            return
        }
        this.props.onFieldChange(this.props.input.name, values)
    }
    onDelete = (value) => {
        if (this.props.readOnly) {
            return
        }
        const v = this.props.input.value.filter(v => v.value !== value)
        this.props.onFieldChange(this.props.input.name, v)
    }
    render () {
        const { isOpen } = this.state
        const { input, meta: { touched, error } } = this.props
        return (
            <DropDown
                isOpen={isOpen}
                isDisabled={this.props.readOnly}
                touched={touched}
                errors={error}
                values={input.value}
                onOpen={this.toggleOpen}
                onDelete={this.onDelete}
                label={this.props.label}
                showLabel={this.props.showLabel}
            >
                <div className={`modal-dropdown-search regions-search ${isOpen && 'dropdown-content_opened'}`}>
                    <div className="dropdown-promo-cross">
                        <button onClick={this.toggleOpen} type="button" className="js-exit-btn">
                            <Icon id="icon-cross" />
                        </button>
                    </div>
                    <Select
                        isMulti
                        menuIsOpen
                        closeMenuOnSelect={false}
                        className="regions-select"
                        placeholder="Название региона..."
                        noOptionsMessage={() => 'Регион не найден'}
                        classNamePrefix="rgs"
                        value={this.props.input.value}
                        tabSelectsValue={false}
                        backspaceRemovesValue={false}
                        components={{
                            IndicatorSeparator: null,
                            DropdownIndicator: null,
                            MultiValueContainer,
                            Option: RegionOption,
                            Menu: RegionMenu,
                        }}
                        hideSelectedOptions={false}
                        isClearable={false}
                        onChange={this.onSelectChange}
                        options={this.props.options}
                    />
                    <div className="dropdown-search-exit">
                        <button type="button" onClick={this.toggleOpen} className="js-exit-btn"><span>Готово</span></button>
                    </div>
                </div>
            </DropDown>
        )
    }
}


export const PaymentRadioBtn = ({
    input,
    label,
    months,
    sale = 0,
    isBest,
    price
  }) => {
    const c_price = price - sale
    return (
        <label className={classNames('payment-choice', {
            'payment-choice-active': +input.value === months
        })}>
            <input type="radio" {...input} value={months} style={{display: 'none'}} />
            <div className="payment-choice__time">
                <span>{months}</span>
                <span>{monthsPd(months)}</span>
            </div>
            <div className="payment-choice__cost">
                <span>{c_price / 100} руб.</span>
                {!!sale &&
                    <div className="payment-choice__discount">
                        <span>Скидка</span><span>{sale} руб.</span>
                    </div>
                }
            </div>
            <div className="empty-link">
                <span>Выбрать</span>
            </div>
            {isBest &&
                <div className="payment-choice__best-one">
                    <span>лучший вариант</span>
                </div>
            }
        </label>
    )
  }

export const FieldWithHint = ({
    input,
    label,
    maxLength,
    isHalfWidth,
    placeholder,
    meta: { touched, error }
}) => (
    <div className={classNames('form-group', {
        'form-group-half': isHalfWidth
    })}>
        <div className="input-wrap">
            {/* <button type="button" className="popup-info-btn">
                <Icon id="icon-input-hint" />
            </button> */}
            <label className="label-decor">{label}</label>
            <input {...input} placeholder={placeholder} maxLength={maxLength} className="form-control form-decor" />
        </div>
        {touched && error && <span className="form-control-errors">{error}</span>}
    </div>
)

export const SimpleRadioBtn = ({
    input,
    label,
    val,
}) => {
    return (
        <label className={classNames({
            'bill-tab-active': input.value === val
        })}>
            <input {...input} type="radio" value={val} />
            <span>{label}</span>
        </label>
    )
}

export class InputFieldPrice extends Component {
    onChange = e => {
        let v = Number(e.target.value.replace(/\D/g, ''))
        if (this.props.onFieldChange) {
            this.props.onFieldChange(this.props.input.name, v)
        } else {
            this.props.input.onChange(v)
        }
    }
    render () {
        const {
            input,
            label,
            type,
            maxLength,
            currency,
            meta: { touched, error }
        } = this.props
        const value = formatNumber(input.value)
        return (
            <div className="form-group">
                <div className="input-wrap">
                    <input {...input} onChange={this.onChange} onBlur={() => {}} value={value} type={type} maxLength={maxLength} placeholder={label} className="form-control form-decor" />
                    <span className="currency">{currency}</span>
                </div>
                {touched && error && <span className="form-control-errors">{error}</span>}
            </div>
        )
    }
}
