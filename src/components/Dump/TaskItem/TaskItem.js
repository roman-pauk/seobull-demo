import React from 'react'
import classNames from 'classnames'
import Collapsible from 'react-collapsible'
import Icon from '../Icons/Icon'
import errAttr from '../../Smart/AnalizeTabs/mistakes'

const CollapseTriger = ({ task, index, showArrow, isDone, isEmpty }) => {
    return (
        <div className={classNames("mistake-accordeon__item", {"mistake-accordeon__item-empty": isEmpty})}>
            <div className="mistake-accordeon__item--top">
                <span className="text">{index + 1}. {task.title}</span>
                <span className={classNames('status', {
                    'critical': task.priority === 'critical',
                    'middle': task.priority === 'medium',
                    'light': task.priority === 'low',
                })}>{errAttr[task.priority].name}</span>
                {showArrow && <Icon id="icon-arrow-down" />}
                {isDone &&
                    <div className="mistake-accordeon__item-clock">
                        <Icon id="icon-connected" />
                    </div>
                }
            </div>
        </div>
    )
}

function TaskItem({ task, index, isDone }) {
    if (!task.description && (!task.images || !task.images.length)) {
        return (
            <CollapseTriger task={task} index={index} isEmpty={true}/>
        )
    }
    return (
        <Collapsible key={`task-${index}`} trigger={<CollapseTriger task={task} index={index} isDone={isDone} showArrow />} triggerTagName="div">
            <div className="mistake-accordeon-hide">
                {task.images.map((el, i) => <img key={`img-${i}`} src={el} className="image" alt="task-image" />)}
                <p className="descr">{task.description}</p>
            </div>
        </Collapsible>
    )
}

export default TaskItem
