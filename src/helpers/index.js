import { func } from "prop-types";

// Размерность шкалы оценок, возвращаемых API
export const SCORE_SCALE = 10;


// Приводит оценку, полученную от API, к шкале масштаба scale.
export function scaleScore(score, size) {
    return Math.ceil(score / (SCORE_SCALE / size))
}


export function declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2]
    return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ]
}

export const months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль',
    'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
]

export const monthsAbbr = [
    'янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл',
    'авг', 'сен', 'окт', 'ноя', 'дек',
]

export const months_f = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля',
    'августа', 'сентября', 'октября', 'ноября', 'декабря',
]

export const reqArr = ['запрос', 'запроса', 'запросов']

export const monthsArr = ['месяц', 'месяца', 'месяцев']
export const monthsPd = num => declOfNum(num, monthsArr)


export const formatDate = dateStr => {
    const d = new Date(dateStr)
    return `${d.getDate()} ${months_f[d.getMonth()]}`
}

export const formatTime = dateStr => {
    const d = new Date(dateStr)
    const h = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours()
    const m = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes()
    const s = d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds()
    return `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()} ${h}:${m}:${s}`
}

export const formatDateFull = dateStr => {
    const d = new Date(dateStr)
    const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
    const month = d.getMonth() < 9 ? `0${d.getMonth() + 1}` : d.getMonth() + 1
    return `${day}.${month}.${d.getFullYear()}`
}

export const formatDateFullHR = dateStr => {
    const d = new Date(dateStr)
    return `${d.getDate()} ${months_f[d.getMonth()]} ${d.getFullYear()}`
}

export const getEndDate = (dateStr, months) => {
    if (!months) {
        return '-'
    }
    const d = new Date(dateStr)
    d.setMonth(d.getMonth() + months)
    return `${d.getDate()} ${months_f[d.getMonth()]} ${d.getFullYear()}`
}

export const getPaymentOptions = status => {
    switch (status) {
    case 'finished':
        return {text: 'оплачено', class: 'fix_clr-green'}
    case 'error':
        return {text: 'ошибка', class: 'fix_clr-red'}
    case 'canceled':
        return {text: 'отменен', class: 'fix_clr-red'}
    case 'processing':
        return {text: 'ожидаем оплаты', class: 'fix_clr-orange'}
    default:
        return {text: '-', class: ''}
    }
}

export const paymentStatusTrsl = {
    paid: 'Оплачено',
    processing: '',
    started: '',
    finished: '',
    error: '',
}

export const scrollToElm = (selector, duration) => {
    if (!document.querySelector(selector)) {
        console.error(`'${selector}' - not found in DOM`)
        return
    }
    let startY = window.scrollY || window.pageYOffset,
        endY = document.querySelector(selector).offsetTop,
        distanceY = endY - startY,
        startTime = new Date().getTime()

    duration = typeof duration !== 'undefined' ? duration : 400

    // Easing function
    const easeInOutQuart = function(time, from, distance, duration) {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from
    }

    let timer = window.setInterval(function() {
        let time = new Date().getTime() - startTime,
            newY = easeInOutQuart(time, startY, distanceY, duration)
        if (time >= duration) {
            window.clearInterval(timer)
        }
        window.scrollTo(0, newY)
    }, 1000 / 60) // 60 fps
}

export function scrollToPlan() {return scrollToElm('#select-plan-tabs')}

export const formatNumber = (c = 0) => {
    if(isNaN(c)) {
        return '0'
    }
    const numArr = c.toString().split('.')
    const rst = numArr[1] ? `,${numArr[1]}` : ''
    const fmt = (numstr, rest) => {
        if (numstr.length < 4) {
            return numstr + rest
        }
        return fmt(numstr.slice(0, numstr.length - 3), ` ${numstr.slice(-3)}${rest}`)
    }
    return fmt(numArr[0], '') + rst
}

export const reloadPage = () => {
    window.location.reload()
}

export const sum2Arrays = (arr1 = [], arr2 = []) => {
    const base = arr1.length > arr2.length ? arr1 : arr2
    const sc = base === arr1 ? arr2 : arr1
    return base.map((el, ind) => {
        const v = sc[ind] || 0
        return el + v
    })
}

export const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n)

export const engineOptions = [
    ['yandex', 'Яндекс'],
    ['google', 'Google'],
    ['allEngines', 'Суммарно'],
]

export const searchEngines = [
    {engine: 'yandex', name: 'Яндекс'},
    {engine: 'google', name: 'Google'},
]

export function getEngine(engine, engineData) {
    return engineData.find(ed => ed.engine)
}

export function iterEngines(engineData) {
    return searchEngines.reduce(
        (acc, {engine, name}) => {
            const ed = engineData.find(ed => ed.engine === engine)
            if (ed) {
                acc.push({name, ...ed})
            }
            return acc
        },
        []
    )
}


export const textStatuses = {
    todo: 'в&nbsp;плане',
    written: 'написан',
    placed: 'размещён',
}


export function toAbsURL(href, protocol='http') {
    if (!href.startsWith('http')) {
        return `${protocol}://${href}`
    } else {
        return href
    }
}


const trimProtocolRe = new RegExp('(?:[^/]+://)?(.*?)/?$');

// Удаляет протокол из url, обрезает последний /
export function trimURLProtocol(href) {
    return trimProtocolRe.exec(href)[1]
}


const urlPathRe = new RegExp('(?:[^/]+://)?(?:[^/]*)(.*?)/?$');

// Возвращает url path и qs
export function getURLPath(href) {
    return urlPathRe.exec(href)[1]
}


// Обозначение отсутствия в выдаче.
export const NO_POS = '100+'
export const NO_POS_VAL = 0
