// app/projects/components/InfiniteScroll.tsx
"use client"

import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface InfiniteScrollProps {
  onLoadMore: () => void;
  hasMore: boolean;
  isLoading: boolean;
  children: React.ReactNode;
  loader?: React.ReactNode;
  endMessage?: React.ReactNode;
}

export function InfiniteScroll({
  onLoadMore,
  hasMore,
  isLoading,
  children,
  loader,
  endMessage
}: InfiniteScrollProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          onLoadMore();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isLoading, hasMore, onLoadMore]
  );

  return (
    <div className="space-y-6">
      {children}
      
      {/* Elemento sentinela para trigger do scroll */}
      {hasMore && (
        <div ref={lastElementRef} className="h-10 flex items-center justify-center">
          {isLoading ? (
            loader || (
              <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                <div className="w-6 h-6 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
                <span>Carregando mais projetos...</span>
              </div>
            )
          ) : (
            <span className="text-sm text-gray-400 dark:text-gray-600">
              Role para carregar mais
            </span>
          )}
        </div>
      )}

      {/* Mensagem de fim */}
      {!hasMore && endMessage && (
        <div className="text-center py-8">
          {endMessage}
        </div>
      )}
    </div>
  );
}