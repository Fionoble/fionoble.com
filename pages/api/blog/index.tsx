import fs from 'fs';
import { join } from 'path'
import matter from 'gray-matter';

type Post = {
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
}

const postsDirectory = join(process.cwd(), '_blog');

export default function handler(req, res) {
  console.log(getAllPosts());
};

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1: Post, post2: Post) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getPostSlugs(fields = []) {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}