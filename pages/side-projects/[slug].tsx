import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

function PostPage({data, content}) {
  const {title} = data;

  return (
    <>
      <h1>{title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </>
  )
}

PostPage.getInitialProps = async (context) => {
  const { slug } = context.query;
  const content = await import(`../../content/side-projects/${slug}.md`);
  const data = matter(content.default);
  return { ...data };
}

export default PostPage;