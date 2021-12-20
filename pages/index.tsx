import styled from 'styled-components';
import Image from 'next/image';

const Layout = styled.div`
  width: 100%;
  padding: 20px;

  h1 {
    font-size: 20px;
  }
`;
const ImageLayout = styled.div`
  float: left;
  padding-right: 25px;
`;

function Home() {
  return <Layout>
    <h1>Welcome my little corner of the internet!</h1>
    <ImageLayout>
      <Image 
        src="/avatar.JPG"
        width={240}
        height={330}
        alt="A picture of me!"
      />
    </ImageLayout>
    <p>This is where I do things!This is where I do things!This is where I do things!This is where I do things!This is where I do things!This is where I do things!This is where I do things!This is where I do things!This is where I do things!This is where I do things!This is where I do things!This is where I do things!This is where I do things!This is where I do things!This is where I do things!</p>
    
  </Layout>
}

export default Home;
