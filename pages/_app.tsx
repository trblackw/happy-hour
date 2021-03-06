import React from 'react';
import '../styles/index.css';
import Layout from '../components/Layout';
import Head from 'next/head';
import Header from "../components/Header";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Router from 'next/router';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <link rel="shortcut icon" href="/static/favicon.png" />
                <title>Happy Hour</title>
            </Head>
            <Header />

            <Component {...pageProps} />
        </Layout>
    );
}
