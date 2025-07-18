'use client';

import { useState, useMemo, useEffect } from 'react';
import ArticleCard from './components/ArticleCard';
import PopularArticleItem from './components/PopularArticleItem';
import HeroArticleCard from './components/HeroArticleCard';
import TopSideArticleCard from './components/TopSideArticleCard';
import BottomSideArticleCard from './components/BottomSideArticleCard';
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

          {/* =======================================================================
            === kontrola vysky sekcie ===
            =======================================================================
          */}
          <div className="
            grid
            grid-cols-16 // Grid má vždy 16 stĺpcov
            gap-4 md:gap-8 // Na mobile menšia medzera medzi stĺpcami.
            h-[25rem] md:h-[30rem] // Responzívna výška celej sekcie.
          ">
            
            {/* ĽAVÁ ČASŤ - HLAVNÝ ČLÁNOK */}
            <div className="col-span-9 h-full"> {/* Vždy zaberie 9 z 16 stĺpcov. */}
              {mainFeatured && (
                <HeroArticleCard
                  id={mainFeatured.id}
                  title={mainFeatured.title}
                  summary={mainFeatured.summary}
                  author={mainFeatured.author}
                  readTime={mainFeatured.readTime}
                  imageUrl={mainFeatured.imageUrl}
                />
              )}
            </div>
            
            {/* PRAVÁ ČASŤ - DVA MENŠIE ČLÁNKY */}
            <div className="col-span-7 flex flex-col gap-8"> {/* Vždy zaberie 7 z 16 stĺpcov. */}
              <div className="flex-1 relative">
                {topRightFeatured && (
                  <TopSideArticleCard
                    id={topRightFeatured.id}
                    title={topRightFeatured.title}
                    summary={topRightFeatured.summary}
                    imageUrl={topRightFeatured.imageUrl}
                  />
                )}
              </div>

              <div className="flex-1">
                {bottomRightFeatured && (
                  <BottomSideArticleCard
                    id={bottomRightFeatured.id}
                    title={bottomRightFeatured.title}
                    author={bottomRightFeatured.author}
                    readTime={bottomRightFeatured.readTime}
                    summary={bottomRightFeatured.summary}
                    imageUrl={bottomRightFeatured.imageUrl}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- OPRAVENÁ RESPONZÍVNA BIELA SEKCIA --- */}
      <div className="
        relative z-10 bg-white text-zinc-800
        -mt-[20rem] md:-mt-80 // Responzívny posun nahor
      ">
        <div className="
          pt-[22rem] md:pt-72 // Responzívny posun obsahu nadol
        ">
          <main className="max-w-screen-xl mx-auto px-4 sm:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
              {/* ĽAVÝ STĹPEC (Najnovšie správy) */}
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
              {/* PRAVÝ STĹPEC (Sidebar) */}
              <div className="lg:col-span-1 mt-12 lg:mt-0">
                <h2 className="text-3xl font-bold mb-8 border-b border-zinc-200 pb-4">Populárne správy</h2>
                <div className="space-y-6 pt-8">
                  {popularArticles.map((article, index) => (
                    <div key={article.id}>
                      <PopularArticleItem
                        id={article.id}
                        title={article.title}
                        readTime={article.readTime}
                        author={article.author}
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

// Komponenta HomePageSkeleton ostáva bez zmeny
function HomePageSkeleton() {
  return (
    <div className="relative">
      <div className="relative z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 pt-8 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[40rem]">
            <div className="lg:col-span-2 h-full">
              <LoadingSkeleton className="w-full h-full bg-zinc-800" />
            </div>
            <div className="lg:col-span-1 flex flex-col gap-8">
              <div className="flex-1">
                <LoadingSkeleton className="w-full h-full bg-zinc-800" />
              </div>
              <div className="flex-1 bg-white rounded-lg shadow-lg">
                <LoadingSkeleton className="w-full h-full bg-zinc-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 bg-white text-zinc-800 -mt-80">
        <div className="pt-48">
          <main className="max-w-screen-xl mx-auto px-4 sm:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
              <div className="lg:col-span-2">
                <LoadingSkeleton className="h-10 w-1/3 mb-8 bg-zinc-300" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                  <LoadingSkeleton className="h-64 bg-zinc-300" />
                  <LoadingSkeleton className="h-64 bg-zinc-300" />
                </div>
              </div>
              <div className="lg:col-span-1 mt-12 lg:mt-0">
                <LoadingSkeleton className="h-10 w-1/2 mb-8 bg-zinc-300" />
                <div className="space-y-6 pt-8">
                  {[...Array(5)].map((_, i) => (
                    <LoadingSkeleton key={i} className="h-16 bg-zinc-300" />
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