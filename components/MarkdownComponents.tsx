import Image from 'next/image';

const MarkdownComponents: object = {
    p: paragraph => {
      const { node } = paragraph
      
      if (node.children[0].tagName === "img") {
        const image = node.children[0]
        const alt = image.properties.alt?.replace(/ *\{[^)]*\} */g, "")
        const isPriority = image.properties.alt?.toLowerCase().includes('{priority}')
        const metaWidth = image.properties.alt.match(/{([^}]+)x/)
        const metaHeight = image.properties.alt.match(/x([^}]+)}/)
        const width = metaWidth ? metaWidth[1] : "768"
        const height = metaHeight ? metaHeight[1] : "432"
        
        return (
          <Image
            src={image.properties.src}
            width={width}
            height={height}
            className="postImg"
            alt={alt}
            priority={isPriority}
          />
        )
      }
      return <p>{paragraph.children}</p>
    },
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

export default MarkdownComponents;
