import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, change } from 'redux-form'
import { Redirect } from 'react-router-dom'
import _ from 'lodash'

import { InputField, SelectField, EngineMenu, RegionsField, EngineOption } from '../../Dump/FormInputs/InputFields'
import Icon from '../../Dump/Icons/Icon'
import { required, requiredRegion } from '../../Dump/FormInputs/validateFunctions'
import { siteEngineOptionsWithUnknown } from '../../_cms'
import region_options from '../../_regions'
import config from '../../../config'


class CreateProject extends Component {
    state = {
        redirect: false
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (!prevState.redirect && nextProps.project.success) {
            return {
                redirect: true
            }
        }
        return null
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }


    onFieldChange = (name, val) => {
        this.props.dispatch(change('create-project', name, val))
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
        const { handleSubmit, pristine, submitting, user, onCreateProject, project } = this.props
        return (
            <form id="form-create-project" noValidate onSubmit={handleSubmit(onCreateProject)} className="modal-inner">
                <a href={config.mainLandingUrl} className="modal-logo">
                    <Icon id="icon-logo-modal" />
                    <Icon id="icon-logo-white" />
                </a>
                <div className="modal-content">
                    <div className="modal-content__top">
                        <span>Добро пожаловать!</span>
                        <span>До продвижения сайта остался 1 шаг</span>
                    </div>
                    <div className="modal-user-container">
                        <div className="modal-user-icon">
                            <span>Е</span>
                        </div>
                        <div className="modal-user-txt">
                            <p className="modal-user-txt-name">
                                <span>{user.name}</span>
                                <span></span>
                            </p>
                            <div className="modal-user-txt-info">
                                <span>{user.email}</span>
                                <span>{user.phone}</span>
                            </div>
                        </div>
                        <div className="modal-user-edit-wrap">
                        {/* <button type="button" className="modal-user-edit">
                            <Icon id="icon-edit" />
                        </button> */}
                        </div>
                    </div>
                    <div className="modal-content-fields">
                        <Field
                            name="site_url"
                            type="url"
                            label="URL вашего сайта"
                            component={InputField}
                            validate={[required]} />
                        <Field
                            name="webEngine"
                            label="Движок сайта"
                            onFieldChange={this.onFieldChange}
                            components={{
                                Option: EngineOption,
                                Menu: EngineMenu
                            }}
                            options={siteEngineOptionsWithUnknown}
                            component={SelectField}
                            validate={required} />
                        <Field
                            name="regions"
                            label="regions"
                            onFieldChange={this.onFieldChange}
                            component={RegionsField}
                            options={region_options}
                            validate={requiredRegion} />
                    </div>
                    {project.errors && <span className="form-control-errors">{project.errors}</span>}
                </div>
                <div className="modal-footer">
                    <button type="submit" disabled={pristine || submitting || project.fetching} className="modal-submit-btn">
                        <span>Готово</span>
                        <Icon id="icon-arrow-right" />
                    </button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        form: 'create-project',
        touchOnBlur: false,
        initialValues: {
            site_url: _.get(state, 'args.registerDomain')
        }
    }
}

export default connect(mapStateToProps)(reduxForm()(CreateProject))
