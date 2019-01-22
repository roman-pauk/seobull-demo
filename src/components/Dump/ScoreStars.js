import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames'
import Icon from './Icons/Icon'
import { SCORE_SCALE, scaleScore } from '../../helpers'


// Отображение оценки в виде ряда из scale звёзд
function ScoreStars({ score, scale }) {
    score = scaleScore(score, scale)
    return (
        <div className="auditResult__score">
            <div className="stars">
                {Array.from(Array(scale)).map((el, ind) => (
                    <div key={`star-${ind}`} className={classNames('star', { 'yellow': ind < score })}>
                        <Icon id="icon-star" />
                    </div>
                ))}
            </div>
        </div>
    )
}


ScoreStars.propTypes = {
    score: (props, propName, componentName) => {
        if (!props['score']) {
            return new Error(`prop ${propName} is mising in ${componentName}`)
        }
        if (isNaN(props['score']) || !isFinite(props['score'])) {
            return new Error(`prop ${propName} must be a number in ${componentName}`)
        }
        if (props['score'] < 0 || props['score'] > SCORE_SCALE) {
            return new Error(`prop ${propName} must be in range (0-${SCORE_SCALE}) in ${componentName}`)
        }
    },
    scale: PropTypes.number
}

ScoreStars.defaultProps = {
    scale: 5
}


export default ScoreStars
