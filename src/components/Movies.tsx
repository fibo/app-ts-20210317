import Movie, {MovieProps} from './Movie'
import React, {useCallback, useEffect, useRef, useState} from "react";

interface MoviesProps {
    movies?: MovieProps[]
}

export default function Movies({movies = []}: MoviesProps) {
    const [searchText, setSearchText] = useState('');
    const [filter, setFilter] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);


    const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    }, []);

    const search = useCallback(() => {
        setFilter(searchText);
    }, [searchText]);

    const onBlurHandler = useCallback(() => {
        setFilter(searchText);
    }, [searchText]);

    useEffect(() => {
        // if (inputRef.current) {
        //     inputRef.current.focus()
        // }
        inputRef.current!.focus();
    }, [inputRef])

    useEffect(() => {
        const element = document.querySelector('body') as HTMLElement;
        //element.style.overflow = 'hidden';
    }, [])

    return (
        <>
            <div>
                <input type="search" onChange={onChangeHandler} value={searchText} onBlur={onBlurHandler} ref={inputRef} />
                <button onClick={search}>Search</button>
            </div>
            <div>
                {movies.filter(movie => movie.title.includes(filter)).map((movie, i) => (
                    <Movie key={i} {...movie} />
                ))}
            </div>
        </>
    )
}
