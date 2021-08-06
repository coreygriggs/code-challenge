import React from 'react';
import './Search.scss';
import {IconButton, InputBase, Paper} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {useDispatch} from "react-redux";

const Search = () => {
    const dispatch = useDispatch();

    const updateArticles = (event: any) => {
        if (event.target.value) {
            dispatch({ type: 'FILTER_ARTICLES', payload: { searchTerm: event.target.value } });
        }
    }

    return (
        <Paper className="Search" component="form">
            <InputBase
                className="SearchInputBase"
                placeholder="Search by title, byline, or section"
                inputProps={{ 'aria-label': 'Search by title, byline, or section' }}
                onChange={updateArticles}
            />
            <IconButton type="submit" aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

export default Search;
