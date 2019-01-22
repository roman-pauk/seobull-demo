import React from 'react'
import Icon from './Icons/Icon'
import { SCORE_SCALE, scaleScore } from '../../helpers'


const ICONS = [
    'icon-worst',
    'icon-bad',
    'icon-normal',
    'icon-good',
    'icon-excellent',
]

const SCALE = ICONS.length

// Отображение оценки в виде иконки
function ScoreIcon({ score }) {
    score = scaleScore(score, SCALE)
    return (
        <Icon id={ICONS[score-1]} />
    )
}


ScoreIcon.propTypes = {
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
    }
}


export default ScoreIcon
