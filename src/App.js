import React from 'react';
// styles
import { GlobalStyle } from './GlobalStyle';
// routing
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import { NotFound } from 'http-errors';
// context
import UserProvider from './contex';

// const App = () => <div>Start here!</div>

const App = () => (

    <Router>
        <UserProvider>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:movieId' element={<Movie />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
            <GlobalStyle />
        </UserProvider>
    </Router>
);

export default App;
