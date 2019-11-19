import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
const Movie = ({ movie }) => {
	let { id, title, poster_path } = movie
	return (
		<Link to={`/movie/${id}`}>
			<Overdrive id={id}>
				<Poster src={`${POSTER_PATH}${poster_path}`} alt={`Poster for ${title}`} />
			</Overdrive>
		</Link>
	)
}

Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string,
		overview: PropTypes.string,
		poster_path: PropTypes.string,
		id: PropTypes.number,
	}).isRequired,
}

export default Movie

export const Poster = styled.img`box-shadow: 0 0 35px black;`
