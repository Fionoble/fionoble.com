---
title: 'This website'
excerpt: ''
coverImage: '/.jpg'
date: '2020-03-16T05:35:07.322Z'
---

I figured that this website would be an appropriate first post for the side projects I'm working on. I made the repo in github public so folks can take a look, fork or get inspiration. It's not as clean as it could be but I figured I'd ship it early and improve it as I need to.

For example, I'm manually entering these entries into a JSON file to populate the index page. Once that JSON gets a bit too large I'll look into a DB solution. For now, JSON file gets me there quicker. 

There are also a bunch of code optimization and clean I could apply but I'll get to them when as I contribute to it. 

## Tech stack

So now, more about the site. What did I build it with: 
* [NextJs](https://nextjs.org/)
* [Styled Components](https://styled-components.com/)
* [React Markdown](https://github.com/remarkjs/react-markdown)  
* No DB (yet)
* Hosted Vercel (CI included)

I know these aren't new and shiny but I'm familiar with them and I opted to ship something sooner rather than learning something new. I'll be looking into other side projects where I'll get to explore some of the new and shiny things (like [remix](https://remix.run/)) soon.

Vercel's experience with hosting was actually quite nice. It was easy to get up and runing and for one personal project I don't have to pay anything. That may change once this site takes off and I need to start handling crazy high traffic. (Tone: sarcasm). 

<img src="/blog/vercel-screen.png" alt="Screen shot of Vercel" />

It was also extremely simple to set up CI with github. Then I set up some simple github workflows to running linting and type-checks. I didn't set up tests because... well it's just my personal site and there isn't much to test. That and tests are super annoying to write... yea, I said it. 

The style I went for was hand drawn. Not a new concept but I enjoy it and I've been recently trying to get back my drawing and art skills so it just felt appropriate for me.

I think the funniest part is that I had worked on a hand drawn avatar of myself which took me over a week to complete and I was more or less content with it. Then when I started building this site I wanted to do a welcome avatar waving to my visitors to make the expereince a little warmer. I litereally spent 30 mintues on this avatar start to finish and I actually like it SO much more than the one I spent over a week on. Funny how things played out!

<img portrait src="/blog/avatar.jpg" alt="Long Avatar" />
<img portrait src="/welcome_wave.jpg" alt="Quick Avatar" />
