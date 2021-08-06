import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArticleList from './ArticleList';

describe('<ArticleList />', () => {
  test('it should mount', () => {
    render(<ArticleList />);
    
    const articleList = screen.getByTestId('ArticleList');

    expect(articleList).toBeInTheDocument();
  });
});