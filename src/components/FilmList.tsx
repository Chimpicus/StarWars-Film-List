import React from 'react';

const FilmList = () => {
    //  vvv - uncomment later on - vvv
    const { data: films, isPending, error } = useFetch('http://localhost:8000/films');

    return <div className="FilmList">Film List</div>;
};

export default FilmList;
