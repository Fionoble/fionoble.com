import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {
  PostPreviewContainer, 
  PostPreviewCard, 
  Title, 
  TimeStamp, 
  ImageWrapper,
  Filter
} from '../../components/blog'

type PostMetaItem = {
  title: string;
  date: string;
  alt: string;
  excerpt: string;
  thumbnail: string;
  slug: string;
  tags: string[];
}

type PostPageProps = {
  data: PostMetaItem[];
  filters: string[];
}

function PostPage({data, filters}: PostPageProps) {
  // TODO Create shared components
  const router = useRouter()
  const setNewFilter = (filter:string) => {
    if(filter) router.query.filter = filter
    else delete router.query.filter
    router.push(router)
  }

  return (
    <>
      <h1>{'Blog'}</h1>
      <Filter filters={filters} onFilterSelect={setNewFilter} initialFilter={router.query.filter} />
      <p>{'Just a place where I dump some of my thoughts, experiences and some cool things I learn.'}</p>
      <PostPreviewContainer>
        {data.map(((post, index) => {
          const slightRandomRotation = `${index % 2 == 0 ? '-' : ''}${(Math.random() * 2)}`
          return (
            <Link href={`/blog/${post.slug}`} key={index} passHref>
              <PostPreviewCard rotation={slightRandomRotation}>
                <Title>{post.title}</Title>
                <TimeStamp>{post.date}</TimeStamp>
                <ImageWrapper>
                  <Image src={decodeURI(post.thumbnail)} layout="fixed" width="280" height="100" alt={post.alt} />
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

PostPage.getInitialProps = async (context) => {
  const content = await import('../../content/blog/index.json')
  const activeFilter = context.query.filter
  const data = content.default
  const filters = data.reduce((p, c) => ([...p, ...c.tags]), [])
  const filteredData = activeFilter ? 
    data.filter((postData) => postData.tags.includes(activeFilter))
    : data
  return { 
    data: filteredData,
    filters: [...new Set<string>(filters)]
  }
}

export default PostPage