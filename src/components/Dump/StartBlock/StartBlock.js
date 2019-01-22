import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icons/Icon'

function StartBlock() {
    return (
        <div className="admin__item admin__item-start">
            <div className="admin__item-price">
                <p>Бюджет на 1 месяц:</p>
                <div className="price">15 000 руб.</div>
                <div className="text">Не волнуйтесь, деньги не будут списаны сразу, только после получения доступа к аналитике сайта и&nbsp;готовности начала работ</div>
            </div>
            <div className="admin__item-button">
                <Link to="/analysis/access" className="link-with-icon fix_icon-right fix_color-green admin-start">
                    <span>Начать</span>
                    <Icon id="icon-arrow-right" />
                </Link>
            </div>
            </div>
    )
}

export default StartBlock
