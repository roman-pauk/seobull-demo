import React from 'react'
import youtubeImg from './img/youtube.png'

function WaitingStatBlock() {
    return (
        <div className="analysis-item analysis-item__access analysis-item__progress">
            <div className="access-item">
                <div className="title">Ожидание сбора статистики</div>
                <div className="text">После установки аналитики, мы должны подождать 2 недели пока соберется статистика по вашему сайту, чтобы построить для вас прогноз</div>
                <div className="progress-video">
                    <button type="button" className="progress-video__image"><img src={youtubeImg} alt="alt" /></button>
                    <div className="progress-video__text">
                        <p>Что будет дальше после сбора статистики</p><span>1 min 30s</span>
                    </div>
                </div>
            </div>
            <div className="proggres-image">
                <span>Осталось</span>
                <p>14 из 14 дней</p>
            </div>
        </div>
    )
}

export default WaitingStatBlock
