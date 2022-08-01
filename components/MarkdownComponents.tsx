import Image from 'next/image'
// SyntaxHighlight.tsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark as SyntaxStyle } from 'react-syntax-highlighter/dist/cjs/styles/prism'


type NextImageForMarkdownProps = {
  image: {
    properties: {
      alt: string;
      src: string;
    }
  }
}

const NextImage = ({image}: NextImageForMarkdownProps) => {
  const alt = image.properties.alt?.replace(/ *\{[^)]*\} */g, '')
  const isPriority = image.properties.alt?.toLowerCase().includes('{priority}')
  const isVideo = image.properties.alt?.toLowerCase().includes('{video}')
  const metaWidth = image.properties.alt.match(/{([^}]+)x/)
  const metaHeight = image.properties.alt.match(/x([^}]+)}/)
  const width = metaWidth ? metaWidth[1] : '768'
  const height = metaHeight ? metaHeight[1] : '432'
  const src = image.properties.src

  if(isVideo){
    return (
      <div style={{ display: 'flex',
        justifyContent: 'center',}}>
        <iframe 
          width={width} 
          height={height}
          src={src}
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        />
      </div>
    )
  }
  
  return (
    <>
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Image
          src={src}
          width={width}
          height={height}
          className="postImg"
          alt={alt}
          priority={isPriority}
        />
      </div>
    </>
  )
}

const MarkdownComponents: object = {
  p: paragraph => {
    const { node } = paragraph
    
    if (node.children[0].tagName === 'img') {
      const image = node.children[0]
      return <NextImage image={image}/>
    }
    return <p>{paragraph.children}</p>
  },
  img: image => {
    return <NextImage image={image}/>
  },
  code({inline, className,...props}) {
    // Set code language declared in code block: ```lang
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        style={SyntaxStyle}
        language={match[1]}
        PreTag="div"
        className="codeStyle"
        {...props}
      />
    ) : (
      <code className={className} {...props} />
    )
  }
}

export default MarkdownComponents
