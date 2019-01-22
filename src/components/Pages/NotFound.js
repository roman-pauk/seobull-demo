import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Dump/Icons/Icon'

function NotFound() {
    return (
        <div className="notFound__wrap">
            <div className="notFound__logo">
                <Link to="/">
                    <Icon id="icon-logo" />
                </Link>
            </div>
            <div className="notFound">
                <div className="notFound__container">
                    <div className="notFound__num">
                        <Icon id="icon-not-found" />
                    </div>
                    <div className="notFound__title">Что-то явно пошло не так!</div>
                    <div className="notFound__desc">Возможно вы опечатались, вводя адрес, или такой страницы больше нет. Пожалуйста, проверьте все что можно, если ничего не помогает, можно <Link to="/">вернуться на главную</Link>.</div>
                </div>
            </div>
        </div>
    )
}

export default NotFound
