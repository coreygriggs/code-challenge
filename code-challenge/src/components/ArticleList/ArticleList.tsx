import React from 'react';
import './ArticleList.scss';
import {Container, List} from "@material-ui/core";
import Article from "../Article/Article.lazy";
import {RootStateOrAny, useSelector} from "react-redux";

const ArticleList = () => {
    const { articles } = useSelector((state: RootStateOrAny) => state);

    return (
        <Container>
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
        </Container>
    );
}

export default ArticleList;
