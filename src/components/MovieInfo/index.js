import React from 'react';
import PropTypes from "prop-types";

// component
import Thumb from '../Thumb';
// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// image
import NoImage from '../../images/no_image.jpg';
// styles
import { Wrapper, Content, Text } from './MovieInfo.styles';
import Movie from '../Movie';

const MovieInfo = ({ movie }) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb
                image={
                    movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : NoImage
                }
                clickable={false}
                alt="move-thumb"
            />
            <Text>
                <h1>{movie.tile}</h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>

                <div className="rating-directors">
                    <div>
                        <h3>RATING</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                        {movie.directors.map(diretor => (
                            <p key={diretor.credit_id}>{diretor.name}</p>
                        ))}
                    </div>
                </div>
            </Text>
        </Content>
    </Wrapper>
);

MovieInfo.propTypes = {
    movie: PropTypes.object
}

export default MovieInfo;