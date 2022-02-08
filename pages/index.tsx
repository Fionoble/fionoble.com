import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

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
        src="/welcome_wave.jpg"
        width={240}
        height={440}
        alt="A picture of me!"
      />
    </ImageLayout>
    <p>
      {`I'm Phiroze Noble (or Fionoble). I'm a Web Development manager based out of Toronto, Canada. 
      I like warm hugs and great conversations! I decided to make this site for fun and so that 
      I wouldn't lose touch with the technical parts of web development. That and to share all the fun 
      things I'm working on! Fun is relative though 😅 I mean, I definitely find them fun!`}
    </p>
    <div>
      {`If you're interested in getting in touch:`}
      <ul>
        <li>Linked In</li>
        <li>Github</li>
        <li>Instagram</li>
      </ul>
    </div>
  </Layout>
}

export default Home;
