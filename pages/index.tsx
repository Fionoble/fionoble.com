import styled from 'styled-components';
import Image from 'next/image';

const Layout = styled.div`
  width: 100%;
  padding: 20px;

  h1 {
    font-size: 20px;
  }
`;
const imageLayout = styled.div``;
// const Hero = styled.div``;
// const Content = styled.div``;

function Home() {
  return <Layout>
    <h1>Welcome my little corner of the internet!</h1>
    <p>This is where I do things!</p>
    <p></p>
    
    <Image 
      src="/avatar.JPG"
      width={240}
      height={330}
    />
  </Layout>
}

export default Home;
