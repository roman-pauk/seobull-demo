
export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(value)
        ? 'Введите корректный email адрес.'
        : undefined

export const required = value => (value || typeof value === 'number' ? undefined : 'Обязательное поле')

export const isNumber = value => value && isNaN(Number(value)) ? 'Должно быть числом' : undefined

export const onlyNumbers = value => value && isNaN(Number(value)) ? 'Можно ввести только цифры' : undefined

export const validatePhone = value => (!value || value.includes('_')  ? 'Заполните поле правильно' : undefined)

export const requiredRegion = value => (value && value.length ? undefined : 'Выберите регион')

const valLength = num => value => value.length !== num ? `Необходимо ввести ${num} символов` : undefined

export const minPassLength = value => value.length < 7 ? 'Минимальная длина пароля - 7 символов' : undefined

export const conteinsNum = value => /\d/.test(value) ? undefined : 'Пароль должен содержать минимум 1 цифру'

export const valLength10 = valLength(10)
export const valLength12 = valLength(12)
export const valLength9 = valLength(9)
