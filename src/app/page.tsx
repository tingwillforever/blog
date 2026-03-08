import { getAllPosts, getPostsByPage } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export default function Home() {
  const { posts, totalPages } = getPostsByPage(1, 10);

  return (
    <div className="container" style={{ maxWidth: 'var(--content-max-width)', padding: '3rem 1.5rem' }}>
      {/* Hero Section */}
      <section className="mb-12">
        <h1 
          className=""
          style={{ 
            fontSize: '2.5rem',
            fontWeight: 600,
            marginBottom: '1rem',
            color: 'var(--foreground)'
          }}
        >
          欢迎来到我的博客
        </h1>
        <p 
          className="text-xl"
          style={{ 
            fontSize: '1.25rem',
            color: 'var(--foreground-muted)',
            lineHeight: '1.6'
          }}
        >
          记录技术学习心得，分享项目开发经验
        </p>
      </section>

      {/* Latest Posts Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 
            className="text-2xl font-bold"
            style={{ 
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'var(--foreground)'
            }}
          >
            最新文章
          </h2>
        </div>

        {posts.length > 0 ? (
          <div className="flex flex-col">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div 
            className="text-center py-16"
            style={{ color: 'var(--foreground-muted)' }}
          >
            <p className="text-base">还没有文章，开始创作吧！</p>
          </div>
        )}
      </section>
    </div>
  );
}
