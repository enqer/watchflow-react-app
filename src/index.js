import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Movies from "./components/movies/movies";
import Home from "./components/home/home";
import NotFound from "./components/common/notFound";
import Ranking from "./components/ranking/ranking";
import News from "./components/news/news";
import NewsPage from "./components/news/newsPage";
import AddMovie from "./components/movies/addMovie";
import Movie from "./components/singleMovie/movie";
import {isExpired} from "react-jwt";
import Search from "./components/search/search";
import {createRoot} from "react-dom/client";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
                      <Routes>
                           <Route path="/"  element={<App /> }>
                               <Route path="/" element={<Navigate to="home" />}/>
                               <Route path="home" element={<Home />}/>
                               <Route path="search" element={<Search />}/>
                               <Route path="movies" element={<Movies />}/>
                               <Route path="movies/add" element={isExpired(localStorage.getItem('token')) ? <Navigate replace to="/home" /> : <AddMovie />}/>
                               <Route path="movie/:id" element={<Movie />}/>
                               <Route path="ranking" element={<Ranking />}/>
                               <Route path="news" element={<News />}/>
                               <Route path="news/:id" element={<NewsPage />}/>
                               <Route path="*" element={<NotFound/>}/>
                           </Route>
                      </Routes>
                   </BrowserRouter>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
