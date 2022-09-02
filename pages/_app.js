import Head from "next/head";



import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Olawoyin Daniel</title>
      <meta name="description" content="Hello my name is Olawoyin Daniel, am a full stack/ front-end developer. Am savvy at developing scalable and maintainable web applications." />
      <link rel="icon" href="/favicon.ico" />
      <meta name="author" content="Olawoyin Daniel" />
      <meta name="keywords" content="olawoyin, Daniel, portfolio, web developer, frontend developer, react developer, developer" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
