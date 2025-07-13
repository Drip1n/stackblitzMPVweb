'use client';

import { useState, useMemo, useEffect } from 'react';
import ArticleCard from './components/ArticleCard';
import FeaturedArticleCard from './components/FeaturedArticleCard';
import PopularArticleItem from './components/PopularArticleItem';
import SecondaryFeaturedCard from './components/SecondaryFeaturedCard';
import LoadingSkeleton from './components/LoadingSkeleton';
import allArticlesData from './lib/articles';
import { useSearchParams } from 'next/navigation';

const INITIAL_ARTICLES_COUNT = 4;

export default function Home() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search') || '';
  
  const [visibleArticlesCount, setVisibleArticlesCount] = useState(INITIAL_ARTICLES_COUNT);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
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
  const secondaryFeatured = filteredArticles.filter((a) => a.isFeatured && a.id !== 0).slice(0, 2);
  const regularArticles = filteredArticles.filter((a) => !a.isFeatured);
  const popularArticles = allArticlesData.slice(1, 6);

  const visibleArticles = regularArticles.slice(0, visibleArticlesCount);
  const hasMoreArticles = visibleArticlesCount < regularArticles.length;

  if (isLoading && !searchTerm) {
    return <HomePageSkeleton />;
  }

  return (
    <main className="max-w-screen-xl mx-auto px-4 sm:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
        <div className="lg:col-span-2">
          {searchTerm && (
            <h2 className="text-2xl font-bold mb-8">
              Výsledky pre: "{searchTerm}"
            </h2>
          )}

          {/* === NOVÉ ROZLOŽENIE FEATURED SEKCE === */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            <div className="lg:col-span-1 flex flex-col gap-4">
              {secondaryFeatured.map(article => (
                <SecondaryFeaturedCard key={article.id} id={article.id} title={article.title} />
              ))}
            </div>
            <div className="md:col-span-2 lg:col-span-2">
              {mainFeatured && (
                <FeaturedArticleCard
                  id={mainFeatured.id}
                  title={mainFeatured.title}
                  summary={mainFeatured.summary}
                  imageUrl={mainFeatured.imageUrl}
                />
              )}
            </div>
          </div>

          {regularArticles.length > 0 ? (
            <div>
              <h2 className="text-3xl font-bold mb-8 border-b border-zinc-800 pb-4">Najnovšie správy</h2>
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
                    onClick={() => setVisibleArticlesCount(prev => prev + 4)}
                    className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Zobraziť viac
                  </button>
                </div>
              )}
            </div>
          ) : searchTerm ? (
            <p>Nenašli sa žiadne články zodpovedajúce vyhľadávaniu.</p>
          ) : null}
        </div>

        <div className="lg:col-span-1 mt-12 lg:mt-0">
          <h2 className="text-3xl font-bold mb-8 border-b border-zinc-800 pb-4">Populárne správy</h2>
          <div className="space-y-6 pt-8">
            {popularArticles.map((article, index) => (
              <div key={article.id}>
                <PopularArticleItem
                  id={article.id}
                  title={article.title}
                  readTime={article.readTime}
                />
                {index < popularArticles.length - 1 && (
                  <div className="w-full h-px bg-zinc-800 mt-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function HomePageSkeleton() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 sm:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
            <div className="space-y-4 lg:col-span-1">
              <LoadingSkeleton className="h-40" />
              <LoadingSkeleton className="h-40" />
            </div>
            <div className="lg:col-span-2">
              <LoadingSkeleton className="h-80" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <LoadingSkeleton className="h-64" />
            <LoadingSkeleton className="h-64" />
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="space-y-6">
            {[...Array(5)].map((_, i) => <LoadingSkeleton key={i} className="h-12" />)}
          </div>
        </div>
      </div>
    </main>
  );
}
