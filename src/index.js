import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Movies from "./components/movies";
import Home from "./components/home";
import NotFound from "./components/notFound";
import Ranking from "./components/ranking";
import News from "./components/news";



ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
                      <Routes>
                           <Route path="/" element={<App />}>
                               <Route path="/" element={<Home />}/>
                               <Route path="/movies" element={<Movies />}/>
                               <Route path="/ranking" element={<Ranking />}/>
                               <Route path="/news" element={<News />}/>
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
