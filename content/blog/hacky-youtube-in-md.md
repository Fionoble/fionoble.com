---
title: 'Hacky youtube in markdown'
date: '2020-03-16T05:35:07.322Z'
---

So in my last post I wanted to embed a youtube video of me skate boarding. Since I'm using ReactMarkdown here I realized it wouldn't be super straight forward. I searched some tutorials and github discussions and realized that this seemed to be harder than it needs to be! Why is there no youtube web play plugin for ReactMarkdown? And if there is, why am I struggling to find it?

Anywho, complaining aside, I decided not to over complicate the implementation of my site and use what I already had available. 

I currently use react markdown and pass in custom components to (primarily) interpret images. This is what is looks like:

```ts
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
```

Notice the `NextImage` component. Since I'm using NextJS i need to use the framework provided image so it can handle the image routing and optimization.

Note: the `p` tag implementation is actually just accommodating for some weird embedding output from ReactMarkdown. 

Here's what the NextImage component looks like:

```ts
const NextImage = ({image}: NextImageForMarkdownProps) => {
  const alt = image.properties.alt?.replace(/ *\{[^)]*\} */g, '')
  const isPriority = image.properties.alt?.toLowerCase().includes('{priority}')
  const metaWidth = image.properties.alt.match(/{([^}]+)x/)
  const metaHeight = image.properties.alt.match(/x([^}]+)}/)
  const width = metaWidth ? metaWidth[1] : '768'
  const height = metaHeight ? metaHeight[1] : '432'
  const src = image.properties.src
  
  return (
    <>
      <div style={{ display: 'flex',
        justifyContent: 'center',}}>
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
```

So when I insert the following into my markdown files, it parses the relevant metadata and passes it to the component.

```md
![Sweet image {100x250}{priority}](/link/to/the/best/image.png)
```

I didn't come up with any of this by the way. I found this implementation online [here](https://amirardalan.com/blog/use-next-image-with-react-markdown). Super helpful walkthrough! The biggest gotcha though is if you have the letter x in your image title! Then the size metadata doesn't make it's way in and I'm not a regex dev so I'll just live with that :) 

Anyway, copying the super convenient and easy to understand method of passing flags to the the image component that was used for the `isPriority` check, I interpret if I should use an image component or an iFrame component by adding a check for a `{video}` tag. 

```ts
// copying this
const isPriority = image.properties.alt?.toLowerCase().includes('{priority}')

// to this
const isVideo = image.properties.alt?.toLowerCase().includes('{video}')
```

Then here is the new component with the new check on the media link:

```ts
const NextMedia = ({image}: NextImageForMarkdownProps) => {
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
      <div style={{ display: 'flex',
        justifyContent: 'center',}}>
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
```

So now my Image Component is more of a Media Component so I'll renamed it to `NextMedia`. Now adding the following will actually result in an embedded youtube video! 

```md
![YouTube video player {560x315}{video}](https://www.youtube.com/embed/F4apScOVlQo)
```

This took no time to implement and even though it's pretty scrappy, it's easy to understand! Hopefully it helps you if this is something you are looking to do! You can checkout the full implementation in the [github repo of this site](https://github.com/Fionoble/fionoble.com).