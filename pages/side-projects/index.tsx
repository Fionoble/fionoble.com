import styled, {css} from 'styled-components';
import Image from "next/image";
import Link from "next/link";

const PostPreviewCard = styled.div`
  margin: 20px;
  padding: 8px;
  width: 300px;
  height: 300px;
  background-color: #fff;
  position: relative;
  flex-grow: 0;
  border: 2px black solid;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.2);
  overflow: hidden;
  text-overflow: elipsis;
  transition: transform 0.3s;

  ${props => {
    return (css`
      transform: rotate(${props.rotation}deg); 

      &:hover {
        transform: rotate(${props.rotation}deg) translateY(5px); 
      }
    `)}
  }

`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 900;
`;
const TimeStamp = styled.div`
  font-size: 11px;
  font-weight: 900;
`;

const ImageWrapper = styled.div`
  line-height: 0;
`;

const PostPreviewContainer = styled.div`
  display: flex;
  with: 100%;
  flex-wrap: wrap;
`;

function PostPage({data}) {

  console.log("Posts", data)

  return (
    <>
      <h1>{`Here are some of my thoughts`}</h1>
      <p>{`This is an attempt to capture some of my thoughts and expereinces online so that I can share them. Maybe others could learn from them.`}</p>
      <PostPreviewContainer>
        {data.map(((post, index) => {
        const slightRandomRotation = `${index % 2 == 0 ? '-' : ''}${(Math.random() * 2)}`;
        return (
          <Link href={`/side-projects/${post.slug}`} key={index} passHref>
            <PostPreviewCard rotation={slightRandomRotation}>
              <Title>{post.title}</Title>
              <TimeStamp>{post.date}</TimeStamp>
              <ImageWrapper>
                <Image src={post.thumbnail} layout="fixed" width="100" height="100" alt={post.alt} />
              </ImageWrapper>
              <div>{post.excerpt}</div>
            </PostPreviewCard>
          </Link>
        )}))}
      </PostPreviewContainer>
    </>
  )
}

PostPage.getInitialProps = async () => {
  const content = await import(`../../content/side-projects/index.json`);
  const data = content.default;
  
  return { data };
}

export default PostPage;