import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  padding: 20px;

  h1 {
    font-size: 20px;
  }
`;
// const Hero = styled.div``;
// const Content = styled.div``;

function Home() {
  return <Layout>
    <h1>Welcome my little corner of the internet!</h1>
    <p>I built this site to expand all areas of my development craft. Check out the architecture and code here! [Github link here]</p>
  </Layout>
}

export default Home;
