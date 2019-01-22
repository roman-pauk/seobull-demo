import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, change } from 'redux-form'
import { SelectField, EngineMenu, EngineOption } from '../../Dump/FormInputs/InputFields'
import { required } from '../../Dump/FormInputs/validateFunctions'
import { setProjectEngine } from '../../../actions/project'
import Button from '../../Dump/LoadingButton/LoadingButton'
import { siteEngineOptions } from '../../_cms'


class CheckEngine extends Component {
    onFieldChange = (name, val) => {
        this.props.dispatch(change('check-engine', name, val))
    }
    onFormSubmit = (data) => {
        this.props.setProjectEngine({
            input: {
                projectId: this.props.projectId,
                engine: data.webEngine.value
            }
        })
    }
    render () {
        const { handleSubmit, set_engine } = this.props
        return (
            <div className="admin__item admin__item-cheking">
                <div className="admin__item-deadline">
                    <span>срок</span>
                    <p>2 дня</p>
                </div>
                <div className="admin__item-price">
                    <div className="title">Определяем движок вашего сайта</div>
                    <div className="text">Чтобы начать работу нам необходимо понять на чем сделан ваш сайт. Вы можете нам помочь и указать самостоятельно</div>
                    <form onSubmit={handleSubmit(this.onFormSubmit)} className="admin__item-buttons">
                        <div className="modal-select-wrap">
                            <Field
                                name="webEngine"
                                label="Движок сайта"
                                onFieldChange={this.onFieldChange}
                                components={{
                                    Option: EngineOption,
                                    Menu: EngineMenu
                                }}
                                options={siteEngineOptions}
                                validate={required}
                                component={SelectField} />
                        </div>
                        <Button loading={set_engine.fetching} type="submit" className="link-with-icon fix_icon-right fix_color-green admin-start">
                            <span>Подтвердить</span>
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    set_engine: state.remote.project.set_engine,
    projectId: state.remote.auth.register.user.defaultProject.id
})


export default reduxForm({
    form: 'check-engine'
})(connect(mapStateToProps, { setProjectEngine })(CheckEngine))
