import App from 'next/app'
import Page  from '../components/foundation/Page'
import Script from 'next/script'
import '../styles/markdown.css'

class AppPage extends App {
  render() {
    const {Component, pageProps} = this.props

    return (
      <Page>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-34VJYNR6BP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-34VJYNR6BP');
          `}
        </Script>
        <Component {...pageProps} />
      </Page>
    )
  }
}

AppPage.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default AppPage 
