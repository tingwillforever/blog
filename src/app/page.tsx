import { getAllPosts, getPostsByPage } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export default function Home() {
  const { posts, totalPages } = getPostsByPage(1, 10);

  return (
    <div className="container max-w-screen-2xl py-10">
      <section className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          欢迎来到我的博客
        </h1>
        <p className="text-xl text-muted-foreground">
          记录技术学习心得，分享项目开发经验
        </p>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">最新文章</h2>
        </div>

        {posts.length > 0 ? (
          <div className="flex flex-col space-y-8">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-muted-foreground">
              还没有文章，开始创作吧！
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
