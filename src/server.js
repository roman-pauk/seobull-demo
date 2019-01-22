import React from 'react';
import {
    StaticRouter
} from 'react-router-dom';
import express from 'express';
import {
    renderToString
} from 'react-dom/server';
import {
    Provider
} from 'react-redux';

import serialize from 'serialize-javascript';
import {
    ApolloProvider,
    getDataFromTree
} from 'react-apollo';
import pretty from 'pretty';
import { Helmet } from 'react-helmet'

import configureStore from './store'
import { getAPIClient } from './universal/apiClient';
import App from './App';
import config from './config';
import { isProduction } from 'apollo-utilities';


const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const {basePath} = config;
const pathPrefix = basePath.replace(/\/$/, "");
const publicPath = process.env.PUBLIC_PATH.replace(/\/$/, "");
const fullPublicPath = `${pathPrefix}${publicPath}`;


const server = express();
server.use(express.urlencoded({extended: true}));

async function renderReactApp(req) {
    const location = req.url;
    const apolloClient = getAPIClient({ssrMode: true, req});
    const context = {};
    const args = Object.assign({}, req.body || {});
    const initialState = {args};
    const store = configureStore(initialState);

    const InitialView = (
        <Provider store={store}>
            <ApolloProvider client={apolloClient}>
                <StaticRouter location={location} context={context}>
                    <App />
                </StaticRouter>
            </ApolloProvider>
        </Provider>
    );

    await getDataFromTree(InitialView);

    let reactHtml = '';

    try {
        reactHtml = renderToString(InitialView)
    } catch (error) {
        console.error('Server rendering error: ', error);
        throw error;
    }

    const preloadedState = serialize(store.getState());
    const preloadedApolloState = serialize(apolloClient.extract());
    return {
        reactHtml,
        preloadedState,
        preloadedApolloState,
        redirect: context.url,
    }
}


async function renderPage(req) {
    const br = req.headers['user-agent'];
    const {
        reactHtml,
        preloadedState,
        preloadedApolloState,
        redirect
    } = await renderReactApp(req);

    if (redirect) {
        {redirect};
    }

    const helmet = Helmet.renderStatic();

    const GTM_ID = 'GTM-N9LVKRR';

    const gtm_head = `<!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');</script>
    <!-- End Google Tag Manager -->`;

    const gtm_body = `<!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->`;

    const page = pretty(
        `<!doctype html>
        <html lang="">
        <head>
        ${isProduction() ? gtm_head : ''}
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <link rel="shortcut icon" sizes="16x16" href="${fullPublicPath}/images/favicon/favicon.png"/>
        <link rel="shortcut icon" sizes="32x32" href="${fullPublicPath}/images/favicon/favicon@2x.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="${fullPublicPath}/images/favicon/apple-touch-icon.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="${fullPublicPath}/images/favicon/apple-touch-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="167x167" href="${fullPublicPath}/images/favicon/apple-touch-icon-167x167.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="${fullPublicPath}/images/favicon/apple-touch-icon-180x180.png"/>
        <link rel="icon" sizes="192x192" href="${fullPublicPath}/images/favicon/icon-hires.png"/>
        <meta name="msapplication-TileImage" content="${fullPublicPath}/images/favicon/icon-normal.png"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,500,600,700,800" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,800" rel="stylesheet">
        ${
            assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''
        }
        </head>
        <body class="${/mobile/i.test(br) ? 'mobile-browser' : 'desctop-browser'}">
        ${isProduction() ? gtm_body : ''}
        <div id="root">${reactHtml}</div>
        <script type="text/javascript">window.__PRELOADED_STATE__ = ${preloadedState}</script>
        <script type="text/javascript">window.__APOLLO_STATE__ = ${preloadedApolloState}</script>
        <script>window.env = ${serialize(config.browser)};</script>
        ${
            isProduction()
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
        </body>
        </html>`
    );
    return {page};
}


async function mainHandler(req, res) {
    let renderRes;
    try {
        renderRes = await renderPage(req);
    } catch (error) {
        console.error('Internal server error: ', error);
        return res.status(500).end('Internal server error: ', error);
    }
    const {page, redirect} = renderRes;
    if (redirect) {
        res.redirect(redirect);
    }
    return res
        .status(200)
        .set('content-type', 'text/html')
        .send(page);
}


server
    .disable('x-powered-by')
    .use(publicPath, express.static(process.env.RAZZLE_PUBLIC_DIR))
    .get('/*', mainHandler)
    .post('/*', mainHandler);

export default server;
