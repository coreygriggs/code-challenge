import React from 'react';
import './ArticleList.scss';
import { List } from "@material-ui/core";
import Article from "../Article/Article.lazy";
import {RootStateOrAny, useSelector} from "react-redux";

export interface ArticleListProps {
    articles: any[]
}

const ArticleList = () => {
    const { articles } = useSelector((state: RootStateOrAny) => state);

    return (
        <List className="ArticleList">
            {articles.map((article: { title: string, byline: string, section: string }, index: number) =>
                <Article
                    // using this as key since it seems to have a unique GUID
                    key={index}
                    title={article.title}
                    byline={article.byline}
                    section={article.section} />
            )}
        </List>
    );
}

export default ArticleList;
