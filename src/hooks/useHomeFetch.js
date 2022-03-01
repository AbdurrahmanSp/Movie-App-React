import { useState, useEffect } from 'react';
// API
import API from '../API';
// Helpers
import { isPersistedState } from '../helpers';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [randomMovie, setRandomMovie] = useState(0);


    const fetchMovies = async (page, searchTerm = '') => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);

            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };

    // Search and initial
    useEffect(() => {
        if (!searchTerm) {
            const sessionState = isPersistedState('homeState');

            if (sessionState) {
                setState(sessionState);
                return;
            }
        }
        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm]);

    // Load More
    useEffect(() => {
        if (!isLoadingMore) return;

        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page]);

    // Interval random movie
    useEffect(() => {
        const deley = 7000;

        const interval = setInterval(() => {
            const randomMovie = Math.floor(Math.random() * state.results.length);
            setRandomMovie(randomMovie);
        }, deley);

        return () => clearInterval(interval);
    }, [state]);

    return {
        state,
        loading,
        error,
        searchTerm,
        randomMovie,
        setSearchTerm,
        setIsLoadingMore
    };
};