import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FilmList from './components/FilmList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    console.log('test');

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <div className="conent">
                    <Routes>
                        <Route path="/" element={<FilmList />}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
