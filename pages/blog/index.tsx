import Image from "next/image";
import Link from "next/link";
import {PageLayout} from '../../components/styles/PageStyles';
import {
  PostPreviewContainer, 
  PostPreviewCard, 
  Title, 
  TimeStamp, 
  ImageWrapper
} from '../../components/blog';

function PostPage({data}) {

  console.log("Posts", data)

  return (
    <PageLayout>
      <PostPreviewContainer>
        {data.map(((post, index) => {
        const slightRandomRotation = `${index % 2 == 0 ? '-' : ''}${(Math.random() * 2)}`;
        return (
          <Link href={`/blog/${post.slug}`} key={index} passHref>
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
    </PageLayout>
  )
}

PostPage.getInitialProps = async () => {
  const content = await import(`../../content/blog/index.json`);
  const data = content.default;
  
  return { data };
}

export default PostPage;