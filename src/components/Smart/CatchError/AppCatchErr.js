import React from 'react'
import CatchError from './CatchError'
import Icon from '../../Dump/Icons/Icon'
import { reloadPage } from '../../../helpers'

const AppErrMessage = () => {
    return (
        <div className="appErr">
            <div className="appErr__block">
                <div className="appErr__img">
                    <Icon id="icon-attention" />
                </div>
                <div className="appErr__text">
                    <div>Произошла непредвиденная ошибка.</div>
                    <div className="appErr__subtxt">Мы уже занимаемся её исправлением</div>
                </div>
                <div className="appErr__btn">
                    <button onClick={reloadPage} type="button" className="link-with-icon fix_color-green admin-start">
                        <span>Перезагрузить</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

const AppCatchErr = props => {
    return <CatchError errorComonent={<AppErrMessage />} {...props} />
}

export default AppCatchErr