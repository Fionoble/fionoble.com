import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

const MarkdownComponents: object = {
  img: image => {
    return (
      <Image
        src={image.properties.src}
        alt={image.properties.alt}
        height="768"
        width="432"
      />
    )
  },
}

function PostPage({data, content}) {
  const {title} = data;

  return (
    <>
      <h1>{title}</h1>
      <ReactMarkdown components={MarkdownComponents}>{content}</ReactMarkdown>
    </>
  )
}

PostPage.getInitialProps = async (context) => {
  const { slug } = context.query;
  const content = await import(`../../content/blog/${slug}.md`);
  const data = matter(content.default);
  return { ...data };
}

export default PostPage;