import React, { lazy, Suspense } from 'react';

const LazyArticleList = lazy(() => import('./ArticleList'));

const ArticleList = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyArticleList {...props} />
  </Suspense>
);

export default ArticleList;
