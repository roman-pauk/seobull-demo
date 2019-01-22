import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Icon from '../Dump/Icons/Icon'

function RegisterSuccess({ user }) {
    const username = user.name
    return (
        <div className="c-signUp_wrap js-popup">
            <div className="signup-final__container">
                <Link to="/">
                    <Icon id="icon-logo-white" />
                </Link>
            <div className="signup-final__inner">
                <Icon id="icon-signup-final" />
                <div className="signup-final__inner-txt"><span>Спасибо, {username}, регистрация&nbsp;успешно&nbsp;завершена!</span><span>Наши менеджеры свяжутся с&nbsp;вами в&nbsp;течение часа.</span></div>
            </div>
            </div>
            <div className="stub-triangle-big fix-position-one">
            <svg width="100%" height="100%" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M36.3038 9C38.6133 5 44.3868 5 46.6962 9L72.2439 53.25C74.5533 57.25 71.6665 62.25 67.0478 62.25H15.9522C11.3334 62.25 8.4467 57.25 10.7561 53.25L36.3038 9Z" transform="translate(0 76.9637) rotate(-68.0139)" fill="#E4DEFB"></path>
            </svg>
            </div>
            <div className="stub-triangle-big fix-position-two">
            <svg width="100%" height="100%" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M36.3038 9C38.6133 5 44.3868 5 46.6962 9L72.2439 53.25C74.5533 57.25 71.6665 62.25 67.0478 62.25H15.9522C11.3334 62.25 8.4467 57.25 10.7561 53.25L36.3038 9Z" transform="translate(0 76.9637) rotate(-68.0139)" fill="#E4DEFB"></path>
            </svg>
            </div>
            <div className="stub-triangle-big fix-position-three">
            <svg width="100%" height="100%" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M36.3038 9C38.6133 5 44.3868 5 46.6962 9L72.2439 53.25C74.5533 57.25 71.6665 62.25 67.0478 62.25H15.9522C11.3334 62.25 8.4467 57.25 10.7561 53.25L36.3038 9Z" transform="translate(0 76.9637) rotate(-68.0139)" fill="#E4DEFB"></path>
            </svg>
            </div>
            <div className="stub-triangle-big fix-position-four">
            <svg width="100%" height="100%" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M36.3038 9C38.6133 5 44.3868 5 46.6962 9L72.2439 53.25C74.5533 57.25 71.6665 62.25 67.0478 62.25H15.9522C11.3334 62.25 8.4467 57.25 10.7561 53.25L36.3038 9Z" transform="translate(0 76.9637) rotate(-68.0139)" fill="#E4DEFB"></path>
            </svg>
            </div>
            <div className="stub-triangle-big fix-position-five">
            <svg width="100%" height="100%" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M36.3038 9C38.6133 5 44.3868 5 46.6962 9L72.2439 53.25C74.5533 57.25 71.6665 62.25 67.0478 62.25H15.9522C11.3334 62.25 8.4467 57.25 10.7561 53.25L36.3038 9Z" transform="translate(0 76.9637) rotate(-68.0139)" fill="#E4DEFB"></path>
            </svg>
            </div>
            <div className="stub-triangle-big fix-position-six">
            <svg width="100%" height="100%" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M36.3038 9C38.6133 5 44.3868 5 46.6962 9L72.2439 53.25C74.5533 57.25 71.6665 62.25 67.0478 62.25H15.9522C11.3334 62.25 8.4467 57.25 10.7561 53.25L36.3038 9Z" transform="translate(0 76.9637) rotate(-68.0139)" fill="#E4DEFB"></path>
            </svg>
            </div>
            <div className="stub-triangle-big fix-position-seven">
            <svg width="100%" height="100%" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M36.3038 9C38.6133 5 44.3868 5 46.6962 9L72.2439 53.25C74.5533 57.25 71.6665 62.25 67.0478 62.25H15.9522C11.3334 62.25 8.4467 57.25 10.7561 53.25L36.3038 9Z" transform="translate(0 76.9637) rotate(-68.0139)" fill="#E4DEFB"></path>
            </svg>
            </div>
            <div className="stub-triangle-small fix-position-one-sm">
            <svg width="100%" height="100%" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M36.3038 9C38.6133 5 44.3868 5 46.6962 9L72.2439 53.25C74.5533 57.25 71.6665 62.25 67.0478 62.25H15.9522C11.3334 62.25 8.4467 57.25 10.7561 53.25L36.3038 9Z" transform="translate(0 76.9637) rotate(-68.0139)" fill="#E4DEFB"></path>
            </svg>
            </div>
            <div className="stub-triangle-small fix-position-two-sm">
            <svg width="100%" height="100%" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M36.3038 9C38.6133 5 44.3868 5 46.6962 9L72.2439 53.25C74.5533 57.25 71.6665 62.25 67.0478 62.25H15.9522C11.3334 62.25 8.4467 57.25 10.7561 53.25L36.3038 9Z" transform="translate(0 76.9637) rotate(-68.0139)" fill="#E4DEFB"></path>
            </svg>
            </div>
            <div className="stub-triangle-small fix-position-three-sm">
            <svg width="100%" height="100%" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M36.3038 9C38.6133 5 44.3868 5 46.6962 9L72.2439 53.25C74.5533 57.25 71.6665 62.25 67.0478 62.25H15.9522C11.3334 62.25 8.4467 57.25 10.7561 53.25L36.3038 9Z" transform="translate(0 76.9637) rotate(-68.0139)" fill="#E4DEFB"></path>
            </svg>
            </div>
            <div className="stub-triangle-small fix-position-four-sm">
            <svg width="100%" height="100%" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M36.3038 9C38.6133 5 44.3868 5 46.6962 9L72.2439 53.25C74.5533 57.25 71.6665 62.25 67.0478 62.25H15.9522C11.3334 62.25 8.4467 57.25 10.7561 53.25L36.3038 9Z" transform="translate(0 76.9637) rotate(-68.0139)" fill="#E4DEFB"></path>
            </svg>
            </div>
            <div className="stub-triangle-small fix-position-five-sm">
            <svg width="100%" height="100%" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M36.3038 9C38.6133 5 44.3868 5 46.6962 9L72.2439 53.25C74.5533 57.25 71.6665 62.25 67.0478 62.25H15.9522C11.3334 62.25 8.4467 57.25 10.7561 53.25L36.3038 9Z" transform="translate(0 76.9637) rotate(-68.0139)" fill="#E4DEFB"></path>
            </svg>
            </div>
            <div className="stub-triangle-small fix-position-six-sm">
            <svg width="100%" height="100%" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M36.3038 9C38.6133 5 44.3868 5 46.6962 9L72.2439 53.25C74.5533 57.25 71.6665 62.25 67.0478 62.25H15.9522C11.3334 62.25 8.4467 57.25 10.7561 53.25L36.3038 9Z" transform="translate(0 76.9637) rotate(-68.0139)" fill="#E4DEFB"></path>
            </svg>
            </div>
            <div className="stub-triangle-small fix-position-seven-sm">
            <svg width="100%" height="100%" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M36.3038 9C38.6133 5 44.3868 5 46.6962 9L72.2439 53.25C74.5533 57.25 71.6665 62.25 67.0478 62.25H15.9522C11.3334 62.25 8.4467 57.25 10.7561 53.25L36.3038 9Z" transform="translate(0 76.9637) rotate(-68.0139)" fill="#E4DEFB"></path>
            </svg>
            </div>
            <div className="stub-triangle-small fix-position-eight-sm">
            <svg width="100%" height="100%" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M36.3038 9C38.6133 5 44.3868 5 46.6962 9L72.2439 53.25C74.5533 57.25 71.6665 62.25 67.0478 62.25H15.9522C11.3334 62.25 8.4467 57.25 10.7561 53.25L36.3038 9Z" transform="translate(0 76.9637) rotate(-68.0139)" fill="#E4DEFB"></path>
            </svg>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.remote.auth.register.user
})

export default connect(mapStateToProps)(RegisterSuccess)
