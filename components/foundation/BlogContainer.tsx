import ReactMarkdown from "react-markdown";

const BlogContainer = ({props}) => {
  // const Link = props.external ? (p => <a {...p} tartget="_blank"/>) : NextLink;

  return (
    <ReactMarkdown {...props} />
  )
};

export default BlogContainer;
