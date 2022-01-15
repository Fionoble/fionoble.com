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
  margin-top: 4em;
  float: right;
  margin-right: 25px;
  border: 1px black solid;
  background-color: #fefefe;
  line-height: 0;
  transform: rotate(4deg);
`;

const Clear = styled.div`
  clear: both;
`;

function About() {
  return <Layout>
    
    <ImageLayout>
      <Image 
        src="/avatar.JPG"
        width={240}
        height={330}
        alt="A picture of me!"
      />
    </ImageLayout>
    
    <h1>{`Hey! I'm Fionoble!`}</h1>
    <p>
      {`I'm Phiroze Noble (or Fionoble). I'm a Web Development manager based out of Toronto, Canada. 
      I like warm hugs and great conversations! I decided to make this site for fun and so that 
      I wouldn't lose touch with the technical parts of web development.`}
    </p>
    <p>
      {`I'm Phiroze Noble (or Fionoble). I'm a Web Development manager based out of Toronto, Canada. 
      I like warm hugs and great conversations! I decided to make this site for fun and so that 
      I wouldn't lose touch with the technical parts of web development.`}
    </p>
    
    <Clear/>
  </Layout>
}

export default About;
