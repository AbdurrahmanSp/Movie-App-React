import React from 'react';
// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
// components
import HeroImage from './HeroImage';
import Grid from './Grid/Index';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';
// hook
import { useHomeFetch } from '../hooks/useHomeFetch';
// image
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const {
        state,
        loading,
        error,
        searchTerm,
        randomMovie,
        setSearchTerm,
        setIsLoadingMore
    } = useHomeFetch();

    if (error) return <div>Opss, something is went wrong ...</div>

    return (
        <>
            {!searchTerm && state.results[randomMovie] ? (
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[randomMovie].backdrop_path}`}
                    title={state.results[randomMovie].original_title}
                    text={state.results[randomMovie].overview}
                />
            ) : null}
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
                {state.results.map(movie => (
                    <Thumb
                        key={movie.id}
                        clickable={true}
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage
                        }
                        movieId={movie.id}
                    />
                ))}
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button text="Load More" callback={() => setIsLoadingMore(true)} />
            )}
        </>
    );
};

export default Home;