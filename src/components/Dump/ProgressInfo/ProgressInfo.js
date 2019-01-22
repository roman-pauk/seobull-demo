import React from 'react'
import Icon from '../Icons/Icon'
import { scrollToPlan } from '../../../helpers'


function ProgressInfo({ state }) {
    if (state === 'work_in_progress') {
        return (
            <div className="admin__item infoBlock">
                <div className="infoBlock__img">
                    <Icon id="icon-success-green" />
                </div>
                <div className="infoBlock__text">
                    <div>Мы начали продвижение</div>
                    <div className="infoBlock__subtxt">Вы сделали всё, что нужно, мы начали продвижение вашего сайта, отчёт о результатах работ можно будет увидеть в течение месяца на этой странице.</div>
                </div>
            </div>
        )
    }
    if (state === 'offer_ready') {
        return null
        // return (
        //     <div className="admin__item">
        //         <div className="d-flex align-items-center">
        //             <div className="infoBlock__img">
        //                 <Icon id="icon-clock-orange" />
        //             </div>
        //             <div className="infoBlock__text">
        //                 <span>Выберите тариф на месяц</span>
        //             </div>
        //         </div>
        //         <div className="infoBlock__btn">
        //             <button onClick={scrollToPlan} type="button" className="link-with-icon fix_icon-right fix_color-green admin-start">
        //                 <span>Выбрать</span>
        //                 <Icon id="icon-arrow-right" />
        //             </button>
        //         </div>
        //     </div>
        // )
    }
    if (state === 'waiting_first_call' || state === 'analysis_in_progress') {
        return (
            <div className="admin__item infoBlock">
                <div className="infoBlock__img">
                    <Icon id="icon-clock-orange" />
                </div>
                <div className="infoBlock__text">
                    {state === 'waiting_first_call' && <div>
                        <div>Мы свяжемся с вами в течение 24 часов</div>
                        <div className="infoBlock__subtxt">Наши специалисты свяжутся с вами через WhatsApp или Telegram для уточнения деталей</div>
                    </div>}
                    {state === 'analysis_in_progress' && <div>
                        <div>Проводим аудит</div>
                        <div className="infoBlock__subtxt">В течение трёх дней мы проведём аудит вашего сайта и подготовим для вас коммерческое предложение</div>
                    </div>}
                </div>
            </div>
        )
    }
    return null
}

export default ProgressInfo
