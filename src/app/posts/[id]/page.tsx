import { getPostData, getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPostData(params.id);

  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <Link 
        href="/" 
        className="text-green-500 hover:text-green-400 transition-colors mb-12 block"
      >
        cd ..
      </Link>
      <h1 className="text-3xl font-bold mb-4 text-green-500">{post.title}</h1>
      <time className="text-zinc-500 mb-8 block">{post.date}</time>
      <div 
        className="prose prose-invert prose-pre:bg-zinc-800 prose-pre:border prose-pre:border-zinc-700 max-w-none
          prose-a:text-green-500 prose-a:no-underline hover:prose-a:text-green-400
          prose-headings:text-green-500"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
} 