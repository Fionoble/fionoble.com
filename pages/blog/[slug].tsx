import matter from 'gray-matter'

function PostTemplate({data, content}) {
  // This holds the data between `---` from the .md file
  // const {data:metadata = {}, content} = data;
  const {title} = data;

  console.log(data)

  return (
    <>
      <h1>{title}</h1>
      <div>{content}</div>
    </>
  )
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query
  
  // Import our .md file using the `slug` from the URL
  const content = await import(`../../_blog/${slug}.md`);
  
  // Parse .md data through `matter`
  const data = matter(content.default);
  
  // Pass data to our component props
  return { ...data };
}

export default PostTemplate;