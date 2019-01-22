import React from 'react'
import Icon from '../Icons/Icon'

function ProjectStatusBlock({ title }) {
    return (
        <div className="analysis-waiting">
            <div className="analysis-waiting__text">
                <Icon id="icon-clock" />
                <span>{title}</span>
            </div>
            {/* <button type="button" className="analysis-waiting__button">Обновить</button> */}
        </div>
    )
}

export default ProjectStatusBlock
