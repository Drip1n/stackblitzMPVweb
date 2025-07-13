'use client';

// ... (všetky importy a logika zostávajú rovnaké) ...
import { useState, useMemo, useEffect } from 'react';
import ArticleCard from './components/ArticleCard';
import PopularArticleItem from './components/PopularArticleItem';
import MainFeaturedCard from './components/MainFeaturedCard';
import TopRightFeaturedCard from './components/TopRightFeaturedCard';
import BottomRightFeaturedCard from './components/BottomRightFeaturedCard';
import LoadingSkeleton from './components/LoadingSkeleton';
import allArticlesData from './lib/articles';
import { useSearchParams } from 'next/navigation';

const INITIAL_ARTICLES_COUNT = 6;

export default function Home() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search') || '';
  
  const [visibleArticlesCount, setVisibleArticlesCount] = useState(INITIAL_ARTICLES_COUNT);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredArticles = useMemo(() => {
    return searchTerm
      ? allArticlesData.filter((article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : allArticlesData;
  }, [searchTerm]);

  const mainFeatured = filteredArticles.find((a) => a.id === 0);
  const topRightFeatured = filteredArticles.find((a) => a.id === 7);
  const bottomRightFeatured = filteredArticles.find((a) => a.id === 8);
  const regularArticles = filteredArticles.filter((a) => !a.isFeatured);
  const popularArticles = allArticlesData.slice(1, 6);
  const visibleArticles = regularArticles.slice(0, visibleArticlesCount);
  const hasMoreArticles = visibleArticlesCount < regularArticles.length;

  if (isLoading && !searchTerm) {
    return <HomePageSkeleton />;
  }

  return (
    <div className="relative">
      {/* HORNÁ, TMAVÁ SEKCIA */}
      <div className="relative z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 pt-8 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[36rem]">
            <div className="lg:col-span-2 h-full">
              {mainFeatured && (
                <MainFeaturedCard
                  id={mainFeatured.id}
                  title={mainFeatured.title}
                  imageUrl={mainFeatured.imageUrl}
                />
              )}
            </div>
            <div className="lg:col-span-1 flex flex-col gap-8">
              {topRightFeatured && (
                <TopRightFeaturedCard
                  id={topRightFeatured.id}
                  title={topRightFeatured.title}
                  summary={topRightFeatured.summary}
                  imageUrl={topRightFeatured.imageUrl}
                />
              )}
              {bottomRightFeatured && (
                <div className="bg-white rounded-lg shadow-lg">
                  <BottomRightFeaturedCard
                    id={bottomRightFeatured.id}
                    title={bottomRightFeatured.title}
                    author={bottomRightFeatured.author}
                    readTime={bottomRightFeatured.readTime}
                    imageUrl={bottomRightFeatured.imageUrl}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* === SPODNÁ, BIELA SEKCIA === */}
      <div className="relative z-10 bg-white text-zinc-800 -mt-96">
        {/* TOTO POSÚVA OBSAH NIŽŠIE */}
        <div className="pt-96">
          <main className="max-w-screen-xl mx-auto px-4 sm:px-8 py-8 -mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
              <div className="lg:col-span-2">
                {regularArticles.length > 0 ? (
                  <div>
                    <h2 className="text-3xl font-bold mb-8 border-b border-zinc-200 pb-4">Najnovšie správy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                      {visibleArticles.map((article) => (
                        <ArticleCard
                          key={article.id}
                          id={article.id}
                          title={article.title}
                          imageUrl={article.imageUrl}
                        />
                      ))}
                    </div>
                    {hasMoreArticles && !searchTerm && (
                      <div className="text-center mt-12">
                        <button
                          onClick={() => setVisibleArticlesCount(prev => prev + 6)}
                          className="bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                          Zobraziť viac
                        </button>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
              <div className="lg:col-span-1 mt-12 lg:mt-0">
                <h2 className="text-3xl font-bold mb-8 border-b border-zinc-200 pb-4">Populárne správy</h2>
                <div className="space-y-6 pt-8">
                  {popularArticles.map((article, index) => (
                    <div key={article.id}>
                      <PopularArticleItem
                        id={article.id}
                        title={article.title}
                        readTime={article.readTime}
                      />
                      {index < popularArticles.length - 1 && (
                        <div className="w-full h-px bg-zinc-200 mt-6"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

// ... (HomePageSkeleton zostáva rovnaká)
function HomePageSkeleton() {
  return (
    <div className="relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 pt-8 pb-48">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[36rem]">
          <div className="lg:col-span-2 h-full">
            <LoadingSkeleton className="h-full bg-zinc-800/50" />
          </div>
          <div className="lg:col-span-1 flex flex-col gap-8">
            <LoadingSkeleton className="h-full bg-zinc-800/50" />
            <div className="bg-white rounded-lg shadow-lg">
              <LoadingSkeleton className="h-full bg-zinc-300" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white text-zinc-800 -mt-32 relative z-10 rounded-t-2xl pt-16">
        <main className="max-w-screen-xl mx-auto px-4 sm:px-8 py-8">
          {/* ... skeleton pre spodnú časť ... */}
        </main>
      </div>
    </div>
  );
}
