import React, { lazy, Suspense } from 'react';
import { ArticleListProps } from './Article';

const LazyArticle = lazy(() => import('./Article'));

const Article = (props: JSX.IntrinsicAttributes & ArticleListProps & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyArticle {...props} />
  </Suspense>
);

export default Article;
