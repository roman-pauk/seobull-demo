import _ from 'lodash'


// Название переменных, специфичных для окружения
const envSettingNames = [
    'apiUrl',
    'afterRegStub',
    'devTools',
]

const isBrowser = (typeof window !== 'undefined')

// Источник переменных окруженя.
const configSource = (isBrowser ? window.env : process.env)

// Общие настройки для серверного и браузерного рендеринга
const commonConfig = {
    mainLandingUrl: 'https://seobull.ru',
    baseUrl: 'https://my.seobull.ru',
    basePath: '',
    InfoCookieName: 'cookiesAllowed',
    demoAccData: {
        email: 'demo@seobull.ru',
        password: 'demo',
    },
    ..._.pick(configSource, envSettingNames),
}

if (typeof commonConfig.afterRegStub === 'string') {
    commonConfig.afterRegStub = (commonConfig.afterRegStub === 'true')
}

if (typeof commonConfig.devTools === 'string') {
    commonConfig.devTools = (commonConfig.devTools === 'true')
}

let runtimeConfig

const browserConfig = Object.assign(
    {},
    commonConfig,
    // Специфичные настройки для браузера
    {
    }
)

if (isBrowser) {
    runtimeConfig = browserConfig
} else {
    runtimeConfig = Object.assign(
        {},
        commonConfig,
        // Специфичные настройки для сервера
        {
            ..._.pick(
                configSource,
                [
                    'localApiUrl'
                ]
            ),
            // На сервере добавляем настройки для браузера,
            // чтобы встроить их в html и передать браузеру.
            browser: browserConfig
        }
    )
    if (runtimeConfig.localApiUrl === 'same') {
        runtimeConfig.localApiUrl = runtimeConfig.apiUrl
    }
}

export default runtimeConfig
