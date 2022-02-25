import Image from 'next/image'
import styled, {css} from 'styled-components'

const CenteredWrapper = styled.div`
  display: block;
  margin: 0 auto;
  
  ${props => {
    return (css`
      width: ${props.width}px;
    `)
  }}
`

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
  const metaWidth = image.properties.alt.match(/{([^}]+)x/)
  const metaHeight = image.properties.alt.match(/x([^}]+)}/)
  const width = metaWidth ? metaWidth[1] : '768'
  const height = metaHeight ? metaHeight[1] : '432'
  
  return (
    <CenteredWrapper width={width}>
      <Image
        src={image.properties.src}
        width={width}
        height={height}
        className="postImg"
        alt={alt}
        priority={isPriority}
      />
    </CenteredWrapper>
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
}

export default MarkdownComponents
