export const commonErrs = new Map([
    ['UNAUTHENTICATED', 'Требуется авторизация.'],
    ['NOT_FOUND', 'Объект не найден.'],
    ['FORBIDDEN', 'Объект не найден.'],
    ['PAYMENT_FAILED', 'Платёж отклонён.'],

    ['TOKEN_EXPIRED', 'Сессия истекла.'],
    ['TOKEN_INVALID', 'Некорректный токен доступа.'],
])

export const signUpErrs = new Map([
    ['CONFLICT', 'Пользователь с таким email уже зарегистрирован.'],
    ['TOKEN_INVALID', 'Некорректный токен доступа.'],
])

export const signInErrs = new Map([
    ['UNAUTHENTICATED', 'Неверный логин или пароль.'],
    ['TOKEN_INVALID', 'Некорректный токен доступа.'],
])

export const passwordRestoreErrs = new Map([
    ['NOT_FOUND', 'Пользователя с таким имейл не найдено.'],
    ['PASSWORD_TOKEN_EXPIRED', 'Истекло время действия токена.'],
])