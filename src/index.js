import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Movies from "./components/movies/movies";
import Home from "./components/home/home";
import NotFound from "./components/main/notFound";
import Ranking from "./components/ranking/ranking";
import News from "./components/news/news";
import NewsPage from "./components/news/newsPage";
import SignIn from "./components/logIn/signIn";
import AddMovie from "./components/movies/addMovie";
import Movie from "./components/singleMovie/movie";



ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
                      <Routes>
                           <Route path="/" element={<App />}>
                               <Route path="/" element={<Home />}/>
                               <Route path="/movies" element={<Movies />}/>
                               <Route path="/movies/add" element={<AddMovie />}/>
                               <Route path="/movie/:id" element={<Movie />}/>
                               <Route path="/ranking" element={<Ranking />}/>
                               <Route path="/news" element={<News />}/>
                               <Route path="/news/:id" element={<NewsPage />}/>
                               {/*<Route path="/signin" element={<SignIn />}/>*/}
                               <Route path="*" element={<NotFound/>}/>
                           </Route>
                      </Routes>
                   </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
