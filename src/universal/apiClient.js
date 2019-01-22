import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { onError } from "apollo-link-error"
import { setContext } from "apollo-link-context";
import { InMemoryCache, IntrospectionFragmentMatcher } from "apollo-cache-inmemory"
import fetch from 'isomorphic-fetch'

import config from '../config'


const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: {
        __schema: {
            types: []
        }
    }
})


const makeAuthorizationLink = (cookie) => setContext((request, previousContext) => {
    if (cookie) {
        return {
            headers: {cookie}
        };
    }
    const token = localStorage.getItem('jwt');
    if (token) {
        return {
            headers: {Authorization: token}
        };
    }
});


const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        if (!Array.isArray(graphQLErrors)) {
            console.error('[GraphQL error]: unexpected error format:', graphQLErrors)
        } else {
            console.log("graphQLErrors", graphQLErrors)
            graphQLErrors.forEach((error) => {
                if (error === null) {
                    console.error("GraphQL API error formating is broken.")
                    return
                }
                const { message, locations, path } = error
                console.error(
                    `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${path}`
                )
            })
        }
    }
    if (networkError) {
        console.error(`[Network error]: ${networkError}`)
    }
})


// Возвращает клиент API.
// Создавать клиент на стороне SSR стоит при обработке каждого запроса,
// передавая express req в качестве первого аргумента, если нужна авторизация,
// если не нужна, то можно не передавать, даже на стороне SSR.
// При создании клиента на стороне браузера стоит передавать req=null.
function createClient({ssrMode, req, initialState, apiUrl}) {
    apiUrl = apiUrl || (ssrMode ? config.localApiUrl : config.apiUrl)
    const httpLinkArgs = {
        uri: apiUrl,
        credentials: 'same-origin',
        fetch,
        useGETForQueries: true
    }

    const link = ApolloLink.from([
        errorLink,
        makeAuthorizationLink(ssrMode ? req.headers['cookie'] : undefined),
        createHttpLink(httpLinkArgs),
    ])

    const apiClient = new ApolloClient({
        connectToDevTools: !ssrMode,
        ssrMode,
        // Remember that this is the interface the SSR server will use to connect to the
        // API server, so we need to ensure it isn't firewalled, etc
        link,
        cache: new InMemoryCache({ fragmentMatcher, addTypename: false }).restore(initialState || {}),
    })
    return apiClient
}


// Глобальный клиент API
let globalClient = null


// Возвращает клиент к API.
// Если передан req, то возвращается каждый раз новый клиент,
// так стоит делать на стороне сервера.
function getAPIClient({ssrMode, req, initialState} = {}) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (ssrMode) {
        return createClient({ssrMode, req, initialState})
    }

    // Reuse client on the client-side
    if (!globalClient) {
        globalClient = createClient({initialState})
    }

    return globalClient
}


export {
    // Для сервера экспортируем конструктор API client,
    // чтобы создавать по экземпляру на каждый запрос.
    createClient,

    // Для универсального кода экспортируем хелпер,
    // возвращающий нужный API client
    getAPIClient,
}
