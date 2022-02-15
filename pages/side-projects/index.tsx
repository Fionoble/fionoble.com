import Image from "next/image";
import Link from "next/link";
import {
  PostPreviewContainer, 
  PostPreviewCard, 
  Title, 
  TimeStamp, 
  ImageWrapper
} from '../../components/blog';

function PostPage({data}) {
  return (
    <>
      <h1>{`Side Projects`}</h1>
      <p>{`I've realized that I have a ton of hobbies and side projects. 
      So this is an attempt to capture some of them and share them with 
      anyone who may be interested!`}</p>
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