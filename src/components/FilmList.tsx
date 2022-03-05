import React from 'react';
import { Link } from 'react-router-dom';

const FilmList = ({ films, title }) => {
    return (
        <div className="film-list">
            <h2>{title}</h2>
            {films.map((film) => (
                <div className="film-preview" key={film.id}>
                    <Link to={`/films/${film.id}`}>
                        <h2 className="title"> {film.title}</h2>
                        <p>written by {film.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default FilmList;
