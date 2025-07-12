import ArticleCard from './components/ArticleCard';
import FeaturedArticleCard from './components/FeaturedArticleCard';
import allArticles from '@/app/lib/articles'; // Zmena: bez {} zátvoriek

const featuredArticle = allArticles.find((article) => article.id === 0);
const articles = allArticles.filter((article) => article.id !== 0);

export default function Home() {
  if (!featuredArticle) {
    return (
      <main className="max-w-screen-xl mx-auto px-8 py-4">
        <p>Hlavný článok sa nenašiel.</p>
      </main>
    );
  }

  return (
    <main className="max-w-screen-xl mx-auto px-8 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12">
        <div className="lg:col-span-2">
          <div className="mb-12">
            <FeaturedArticleCard
              id={featuredArticle.id}
              title={featuredArticle.title}
              summary={featuredArticle.summary}
              imageUrl={featuredArticle.imageUrl}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8">Najnovšie správy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <ArticleCard
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  imageUrl={article.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-bold mb-8">Populárne správy</h2>
          <div className="space-y-6">
            <div className="group">
              <p className="font-semibold group-hover:text-white/80">
                U.S. downs suspected Chinese spy balloon over the Atlantic coast
              </p>
              <p className="text-sm text-zinc-400 mt-1">4 min read</p>
            </div>
            <div className="w-full h-px bg-zinc-700"></div>
            <div className="group">
              <p className="font-semibold group-hover:text-white/80">
                Mystery Portrait May Be a Raphael. Artificial Intelligence
                Suggests.
              </p>
              <p className="text-sm text-zinc-400 mt-1">6 min read</p>
            </div>
            <div className="w-full h-px bg-zinc-700"></div>
            <div className="group">
              <p className="font-semibold group-hover:text-white/80">
                LeBron James Keeps the World Watching
              </p>
              <p className="text-sm text-zinc-400 mt-1">5 min read</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}