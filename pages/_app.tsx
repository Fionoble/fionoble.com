import App from 'next/app';
import Page  from '../components/foundation/Page'

class AppPage extends App {
  render() {
    const {Component} = this.props;

    return (
      <Page>
        <Component />
      </Page>
    )
  }
}

export default AppPage ;
