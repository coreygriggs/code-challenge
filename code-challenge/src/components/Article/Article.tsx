import React from 'react';
import './Article.scss';
import {  Divider, ListItem, ListItemText } from '@material-ui/core';

export interface ArticleListProps {
    title: string;
    byline: string;
    section: string;
}

const Article = ({ title, byline, section }: ArticleListProps) => (
  <div className="Article" data-testid="Article">
      <ListItem alignItems="flex-start">
          <ListItemText
              primary={title}
              secondary={`Byline:  ${byline}, Section: ${section}`}
          />
      </ListItem>
      <Divider variant="inset" component="li" />
  </div>
);

export default Article;
