import React from 'react';
import Icon from '../Icons/Icon'

const AdvBlock = ({ icon, title, text }) => {
    return (
        <div className="admin-advantages__item">
            <div className="advantages-image">
                <Icon id={icon} />
            </div>
            <div className="advantages-descr">
                <div className="advantages-descr__title">{title}</div>
                <div className="advantages-descr__text">{text}</div>
            </div>
            <div className="advantages-lock">
                <Icon id="icon-lock" />
            </div>
        </div>
    )
}

export default AdvBlock
