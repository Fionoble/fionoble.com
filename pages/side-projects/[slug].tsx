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
  const { slug } = context.query
  
  // Import our .md file using the `slug` from the URL
  const content = await import(`../../content/side-projects/${slug}.md`);
  
  // Parse .md data through `matter`
  const data = matter(content.default);
  
  // Pass data to our component props
  return { ...data };
}

export default PostPage;