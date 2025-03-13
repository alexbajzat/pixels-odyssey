import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <ParticlesBackground />
      </div>
      
      <main className="relative max-w-2xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-6 text-green-500 inline-block">
            > Hello World_
          </h1>
          <div className="w-24 bg-green-500 mx-auto mb-8" />
          <p className="text-zinc-400 leading-relaxed">
            Building micro-SaaS products in public.
          </p>
        </section>

        {/* About Me Section */}
        <section className="mb-16 border-y border-zinc-800 py-12">
          <h2 className="text-2xl font-bold mb-6 text-green-500">> About Me_</h2>
          <div className="max-w-xl mx-auto space-y-4 text-zinc-400">
            <p>
              👋 I'm Alex Bajzat, a software engineer turned indie hacker.
            </p>
            <p>
              🚀 Currently building micro-SaaS products and documenting my journey
              from ideation to launch.
            </p>
            <p>
              💡 Passionate about finding market opportunities and turning them
              into sustainable businesses.
            </p>
          </div>
          <div className="mt-8 flex justify-center space-x-6 text-zinc-500">
            <a href="https://twitter.com/yourusername" className="hover:text-green-500 transition-colors">
              𝕏
            </a>
            <a href="https://linkedin.com/in/your-profile" className="hover:text-green-500 transition-colors">
              in
            </a>
            <a href="https://instagram.com/yourusername" className="hover:text-green-500 transition-colors">
              ig
            </a>
          </div>
        </section>

        {/* Updated Blog Posts Section */}
        <section>
          <h2 className="text-2xl font-bold mb-12 text-green-500 text-center">> Latest Posts_</h2>
          <div className="space-y-6">
            {posts.map((post) => (
              <Link 
                key={post.id} 
                href={`/posts/${post.id}`}
                className="block group"
              >
                <article className="border border-zinc-800 rounded-lg p-4 hover:border-green-500/50 transition-all duration-300 flex gap-4">
                  <div className="w-24 h-24 flex-shrink-0">
                    <div className="w-full h-full bg-zinc-800 rounded overflow-hidden">
                      {/* Fallback icon if no thumbnail */}
                      {!post.thumbnail ? (
                        <div className="w-full h-full flex items-center justify-center text-green-500">
                          <span className="text-2xl">📝</span>
                        </div>
                      ) : (
                        <img 
                          src={post.thumbnail} 
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-lg text-zinc-100 group-hover:text-green-500 transition-colors">
                        {post.title}
                      </h3>
                      <time className="text-sm text-zinc-500 flex-shrink-0">
                        {post.date}
                      </time>
                    </div>
                    <p className="text-zinc-400 text-sm mt-1 line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
} 