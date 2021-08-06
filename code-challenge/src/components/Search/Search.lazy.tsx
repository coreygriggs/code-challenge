import React, { lazy, Suspense } from 'react';
import {SearchProps} from "./Search";

const LazySearch = lazy(() => import('./Search'));

const Search = (props: JSX.IntrinsicAttributes & SearchProps & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySearch {...props} />
  </Suspense>
);

export default Search;
