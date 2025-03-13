import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-lg text-gray-600">
          Hi, I'm [Your Name]. This is my personal blog where I share my thoughts
          and experiences about [your blog topics].
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.id} className="border-b pb-6">
              <Link href={`/posts/${post.id}`}>
                <h3 className="text-xl font-semibold hover:text-blue-600">
                  {post.title}
                </h3>
              </Link>
              <p className="text-gray-500 text-sm">{post.date}</p>
              <p className="text-gray-700 mt-2">{post.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
} 