import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import MarkdownComponents from '../../components/MarkdownComponents'

type PostProps = {
  data: {
    title: string;
  }
  content: string;
}

function PostPage({data, content}: PostProps) {
  const {title} = data

  return (
    <>
      <h1>{title}</h1>
      <ReactMarkdown components={MarkdownComponents}>{content}</ReactMarkdown>
    </>
  )
}

PostPage.getInitialProps = async (context) => {
  const { slug } = context.query
  const content = await import(`../../content/side-projects/${slug}.md`)
  const data = matter(content.default)
  return { ...data }
}

export default PostPage