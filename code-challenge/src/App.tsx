import React, {useEffect, useState} from 'react';
import './App.css';
import ApiService from './services/ApiService';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import ArticleList from "./components/ArticleList/ArticleList.lazy";
import Search from "./components/Search/Search.lazy";
import { useDispatch, useSelector } from 'react-redux';
import { store } from "./redux/createStore";

type RootState = ReturnType<typeof store.getState>;


function App() {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const apiService = new ApiService();
    apiService.get()
        .then((response) => {
            // console.log(response)
          if (response.error) {
              setError(response.error);
          } else {
              dispatch({ type: 'SET_BASE_ARTICLES', payload: { articles: response } });
          }
        });
  }, []);

  return (
    <div className="App">
        <AppBar>
            <Toolbar>
                <Typography variant="h6">
                    New York Times Top Articles
                </Typography>
                <Search />
            </Toolbar>
        </AppBar>
        {error && 'The articles could not be retrieved. Please try again later.'}
        {!error && <ArticleList />}
    </div>
  );
}

export default App;
