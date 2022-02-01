import matter from 'gray-matter'

function PostPage({data, content}) {
  const {title} = data;

  return (
    <>
      <h1>{title}</h1>
      <div>{content}</div>
    </>
  )
}

PostPage.getInitialProps = async (context) => {
  const { slug } = context.query
  
  // Import our .md file using the `slug` from the URL
  const content = await import(`../../_blog/${slug}.md`);
  
  // Parse .md data through `matter`
  const data = matter(content.default);
  
  // Pass data to our component props
  return { ...data };
}

export default PostPage;