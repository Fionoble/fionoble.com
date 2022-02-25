import Image from 'next/image'
import Link from 'next/link'
import {
  PostPreviewContainer, 
  PostPreviewCard, 
  Title, 
  TimeStamp, 
  ImageWrapper
} from '../../components/blog'

type PostMetaItem = {
  title: string;
  date: string;
  alt: string;
  excerpt: string;
  thumbnail: string;
  slug: string;
}

type PostPageProps = {
  data: PostMetaItem[];
}

function PostPage({data}: PostPageProps) {
  // TODO Create shared components
  return (
    <>
      <PostPreviewContainer>
        {data.map(((post, index) => {
          const slightRandomRotation = `${index % 2 == 0 ? '-' : ''}${(Math.random() * 2)}`
          return (
            <Link href={`/blog/${post.slug}`} key={index} passHref>
              <PostPreviewCard rotation={slightRandomRotation}>
                <Title>{post.title}</Title>
                <TimeStamp>{post.date}</TimeStamp>
                <ImageWrapper>
                  <Image src={post.thumbnail} layout="fixed" width="280" height="100" alt={post.alt} />
                </ImageWrapper>
                <div>{post.excerpt}</div>
              </PostPreviewCard>
            </Link>
          )}))
        }
      </PostPreviewContainer>
    </>
  )
}

PostPage.getInitialProps = async () => {
  const content = await import('../../content/blog/index.json')
  const data = content.default
  return { data }
}

export default PostPage