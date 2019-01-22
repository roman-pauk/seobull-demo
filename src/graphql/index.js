import gql from 'graphql-tag'

const analyticsCredentials = `
    {
        login
        isPasswordSet
        verified
        message
    }
`
const corpInfo = `
lastCorporateInfo {
    type
    name
    address
    inn
    kpp
}
`
const currentPurchase = `
    currentPurchase {
        months
        startTime
        finishTime
        plan {
            id
            monthPrice
            texts
            forecast {
                engine
                monthValues
                dates
            }
            tasks {
                title
                priority
                days
            }
        }
    }
`
const currentPurchaseStatistic = `
    currentPurchase {
        plan {
            id
            texts
            totalTextsAmount
            linksAmount
            totalLinksAmount
            tasks {
                title
                priority
                days
            }
            monthPrice
            forecast {
                engine
                monthValues
            }
            cameUp {
                domain
                months
            }
        }
    }
`

const project = `
    {
        id
        domain
        webEngine
        regions
        state
        requiredToPayMonths
        startTime
        currentPeriod {
            startDate
            finishDate
        }
        siteCredentials {
            text
        }
        ${currentPurchase}
        analyticsCredentials {
            yandex ${analyticsCredentials}
            google ${analyticsCredentials}
            liveInternet ${analyticsCredentials}
            yandexWebmaster ${analyticsCredentials}
            googleWebmaster ${analyticsCredentials}
        }
        analysis {
            id
            plans {
                id
                paidMonths
                monthPrice
                prices {
                    price
                    months
                }
            }
        }
    }
`

const authResult = `
   {
        accessToken
        user {
            id
            email
            name
            duty
            phone
        }
   }
`
const pendingPayment = `
    pendingPayment {
        id
    }
`
const user = `
    {
        id
        name
        email
        currency
        demo
        phone
        duty
        cookiePolicyAccepted
        ${pendingPayment}
        ${corpInfo}
        defaultProject ${project}
    }
`

const projectWithAnalysis = `
    id
    state
    requiredToPayMonths
    startTime
    logo
    analysis {
        phrases {
            pageInfo {
                total
            }
        }
        mainWords
        myDomain {
            visibilityYandex
            visibilityGoogle
            visibilityScore

            dr
            referrers

            textsScore
            unicity
            unicityScore
            words
            wordsScore
            spam
            spamScore
            water
            waterScore
            orthography
            orthographyScore
            linksAmount
            linksScore
            drScore
            linksAmountScore
            referrersScore
            yandexTop {
                top10
                top20
                top100
            }
            googleTop {
                top10
                top20
                top100
            }
            positionsScore
            density
            engineData {
                engine
                visibility
                top {
                    top10
                    top20
                    top100
                }
            }
        }
        tasks {
            title
            description
            images
        }
    }
`

const analisysDetails = {
    textAnalize: `
        analysis {
            id
            mainWords
            domains {
            domain
            unicity
            words
            spam
            water
            orthography
            density
            }
        }
    `,
    linksCount: `
        analysis {
            id
            domains {
                domain
                ur
                dr
                linksAmount
                referrers
              }
        }
    `,
    sitePosition: `
        analysis {
            id
            domains {
            domain
            }
            phrases(slice: {skip: 0, limit: 1000}) {
                pageInfo {
                    total
                }
                nodes {
                    phrase
                    basicFreq
                    sharpFreq
                    yandex
                    google
                }
            }
        }
    `
}

const plans = `
    plans {
        id
        title
        totalWorkMonths
        totalVisits
        totalLinksAmount
        totalLinkBuilding
        totalTextsAmount
        totalSeoHours
        totalDevHours
        monthPrice
    }
`


const projectWithAnalysisAndPlans = `
    id
    state
    requiredToPayMonths
    startTime
    logo
    analysis {
        phrases {
            pageInfo {
                total
            }
        }
        mainWords
        myDomain {
            dr
            referrers

            textsScore
            unicity
            unicityScore
            words
            wordsScore
            spam
            spamScore
            water
            waterScore
            orthography
            orthographyScore
            linksAmount
            linksScore
            drScore
            linksAmountScore
            referrersScore
            yandexTop {
                top10
                top20
                top100
            }
            googleTop {
                top10
                top20
                top100
            }
            positionsScore
            density
            textsAnalyzed {
                url
                name
            }
            visibilityScore
            engineData {
                engine
                visibility
                visibilityScore
                top {
                    top10
                    top20
                    top100
                }
            }
        }
        tasks {
            title
            description
            images
        }
        showCheque
        averageCheque
        conversion
        ${plans}
    }
`


export const m_signUp = gql`
    mutation SignUpUser($input: SignUpInput!) {
        signUp (input: $input) ${authResult}
    }
`
export const m_logIn = gql`
    mutation SignUpUser($input: SignInInput!) {
        signIn (input: $input) {
            accessToken
        }
    }
`
// export const m_logIn = gql`
//     mutation SignUpUser($input: SignInInput!) {
//         signIn (input: $input) {
//             accessToken
//             user ${user}
//         }
//     }
// `

export const m_createProject = gql`
    mutation ProjectCreate($input: ProjectCreateInput!) {
        projectCreate (input: $input) ${project}
    }
`

export const m_analiticAccess = gql`
    mutation projectSetAnalyticsCredentials($input: ProjectAnalyticsCredentialsInput!) {
        projectSetAnalyticsCredentials (input: $input) {
            errorMessage
            project ${project}
        }
    }
`

export const m_siteAccess = gql`
    mutation projectSetSiteCredentials($input: ProjectSiteCredentialsInput!) {
        projectSetSiteCredentials (input: $input) {
            project ${project}
        }
    }
`

export const m_setEngine = gql`
    mutation projectSetWebEngine($input: ProjectSetWebEngineInput!) {
        projectSetWebEngine (input: $input) {
            project ${project}
        }
    }
`

export const m_setAnalitic = gql`
    mutation projectAnalyticsSet($input: ProjectAnalyticsSetInput!) {
        projectAnalyticsSet (input: $input) {
            project ${project}
        }
    }
`

export const m_payment = gql`
    mutation projectFirstPaymentStub($input: ProjectFirstPaymentStubInput!) {
        projectFirstPaymentStub (input: $input) {
            project ${project}
        }
    }
`

export const m_checkPromo = gql`
    mutation userCheckPromo($input: UserCheckPromoInput!) {
        userCheckPromo (input: $input) {
            type
        }
    }
`

export const m_setPlan = gql`
    mutation projectSetPlan($input: ProjectSetPlanInput!) {
        projectSetPlan (input: $input) {
            project ${project}
        }
    }
`
export const m_setProjectState = gql`
    mutation projectSetState($input: ProjectSetStateInput!) {
        projectSetState (input: $input) {
            project ${project}
        }
    }
`
export const m_updateUser = gql`
    mutation userSelfUpdate($input: UserSelfUpdateInput!) {
        userSelfUpdate (input: $input) {
            user ${user}
        }
    }
`
export const m_updateProject = gql`
    mutation projectUpdate($input: ProjectUpdateInput!) {
        projectUpdate (input: $input) {
            project ${project}
        }
    }
`

//payment
export const m_paymentStart = gql`
    mutation paymentStart($input: PaymentStartInput!) {
        paymentStart (input: $input) {
            url
            payment {
                id
                gateId
            }
        }
    }
`

export const m_paymentFinish = gql`
    mutation paymentFinish($input: PaymentFinishInput!) {
        paymentFinish (input: $input) {
            payment {
                id
                amount
                purpose {
                    type
                    ... on PaymentPurposeProjectPlan {
                        project ${project}
                        months
                        __typename
                    }
                    ... on PaymentPurposeBalance {
                        __typename
                    }
                }
            }
        }
    }
`

export const m_paymentCancel = gql`
    mutation paymentCancel($input: PaymentCancelInput!) {
        paymentCancel (input: $input) {
            user {
                id
                ${pendingPayment}
            }
        }
    }
`

//payment end

export const m_userAcceptCookiePolicy = gql`
    mutation userAcceptCookiePolicy {
        userAcceptCookiePolicy {
            user {
                id
                cookiePolicyAccepted
            }
        }
    }
`

export const m_passwordReset = gql`
    mutation userPasswordResetTokenSend ($input: UserPasswordResetTokenSendInput!) {
        userPasswordResetTokenSend (input: $input) {
            success
        }
    }
`

export const m_passwordNew = gql`
    mutation userPasswordReset ($input: UserPasswordResetInput!) {
        userPasswordReset (input: $input) {
            success
        }
    }
`

/*---------------------------------------------------QUERIES-------------------------------------------------------*/

export const q_me = gql`
    query {
        userCurrent ${user}
    }
`

export const q_auditAndOffer = gql`
    query {
        userCurrent {
            id
            defaultProject {
                ${projectWithAnalysisAndPlans}
            }
        }
    }
`

export const q_progress = gql`
    query {
        userCurrent {
            id
            defaultProject {
                ${projectWithAnalysis}
            }
        }
    }
`
export const q_example = gql`
    query {
        projectExample {
            ${projectWithAnalysis}
        }
    }
`
//examples details for modal table
export const q_exampleTextAnalize = gql`
    query {
        projectExample {
            id
            ${analisysDetails.textAnalize}
        }
    }
`

export const q_exampleSitePosition = gql`
    query {
        projectExample {
            id
            ${analisysDetails.sitePosition}
        }
    }
`

export const q_exampleLinksCount = gql`
    query {
        projectExample {
            id
            ${analisysDetails.linksCount}
        }
    }
`
//examples details end

//project details for modal table
export const q_projectTextAnalize = gql`
    query {
        userCurrent {
            id
            defaultProject {
                id
                ${analisysDetails.textAnalize}
            }
        }
    }
`

export const q_projectSitePosition = gql`
    query {
        userCurrent {
            id
            defaultProject {
                id
                ${analisysDetails.sitePosition}
            }
        }
    }
`

export const q_projectLinksCount = gql`
    query {
        userCurrent {
            id
            defaultProject {
                id
                ${analisysDetails.linksCount}
            }
        }
    }
`
//project details end


export const q_statistic = gql`
    query {
        userCurrent {
            id
            defaultProject {
                id
                state
                requiredToPayMonths
                startTime
                textsPublished
                currentPurchase {
                    plan {
                        id
                    }
                }
                currentPeriod {
                    startDate
                }
                tasks {
                    title
                    priority
                    status
                    description
                    images
                }
                links(period: all) {
                    pageInfo {
                        total
                    }
                    nodes {
                        location
                        target
                    }
                }
                texts {
                    pageInfo {
                        total
                    }
                    nodes {
                        status
                        page
                        textLink
                    }
                }
                basicForecast {
                    engine
                    monthValues
                }
                traffic {
                    engine
                    monthValues
                }
                ${currentPurchaseStatistic}
                overview {
                    linksAmount
                    textsScore
                    engineData {
                        visibility
                        engine
                        top {
                            engine
                            top10
                            top20
                            top100
                            below100
                            total
                        }
                        traffic {
                            day
                            week
                            month
                            total
                        }
                    }
                }
                prevOverview {
                    linksAmount
                    textsScore
                    engineData {
                        visibility
                        engine
                        top {
                            engine
                            top10
                            top20
                            top100
                            below100
                            total
                        }
                        traffic {
                            day
                            week
                            month
                            total
                        }
                    }
                }
                analysis {
                    id
                    domains {
                        domain
                        visibilityYandex
                        visibilityGoogle
                        textsScore
                        yandexTop {
                            top10
                            top20
                            top100
                            below100
                        }
                        googleTop {
                            top10
                            top20
                            top100
                            below100
                        }
                        linksScore
                        linksAmount
                    }
                }
                phrases(slice: {skip: 0, limit: 1000}) {
                    pageInfo {
                        total
                    }
                    nodes {
                        phrase
                        engineData {
                            engine
                            positions
                        }
                    }
                    dates
                    top {
                        engine
                        top10
                        total
                    }
                }
                measurements {
                    nodes {
                        date
                        domains {
                            domain
                            textsScore
                            visibilityYandex
                            visibilityGoogle
                            yandexTop {
                                top10
                                top20
                                top100
                            }
                            googleTop {
                                top10
                                top20
                                top100
                            }
                            linksScore
                            linksAmount
                        }
                    }
                }
            }
        }
    }
`
export const q_payments = gql`
    query {
        userCurrent {
            id
            balance
            defaultProject {
                state
                requiredToPayMonths
                currentPurchase {
                    plan {
                        id
                    }
                }
            }
            payments(slice: { limit: 100 }) {
                pageInfo {
                    total
                }
                nodes {
                    id
                    time
                    status
                    amount
                    currency
                    purpose {
                        ... on PaymentPurposeProjectPlan {
                            months
                            purchase {
                              startTime
                              finishTime
                            }
                            __typename
                        }
                        ... on PaymentPurposeBalance {
                            __typename
                        }
                    }
                    gateId
                    gateInfo {
                        ... on PaymentGateInfoCorporate {
                            originalBillUrl
                            __typename
                        }
                    }
                }
            }
        }
    }
`

export const q_stQueryes = gql`
    query {
        userCurrent {
            defaultProject {
                analysis {
                    phrases(domainsLimit: 1, slice: { skip: 0, limit: 1000 }) {
                        nodes {
                            phrase
                            yandex
                            google
                        }
                    }
                }
            }
        }
    }
`
