import App from 'next/app'
import Page  from '../components/foundation/Page'
import '../styles/markdown.css'

class AppPage extends App {
  render() {
    const {Component, pageProps} = this.props

    return (
      <Page>
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
