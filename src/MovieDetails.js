import React, { Component } from 'react'
import { Poster } from './Movie'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'
export default class MovieDetails extends Component {
	state = {
		movie: [],
	}

	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.shape({
				id: PropTypes.number,
			}),
		}),
	}

	async componentDidMount() {
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=bf3fef6940a888d79a9d94ca68dff306&language=en-US`,
			)
			const movie = await response.json()
			console.log(movie)
			this.setState({ movie })
		} catch (e) {
			console.log(e)
		}
	}
	render() {
		const { id, title, poster_path, overview, backdrop_path, release_date } = this.state.movie

		return (
			<Overdrive id={id}>
				<MovieWrapper backdrop={BACKDROP_PATH + backdrop_path}>
					<MovieInfo>
						<Poster src={POSTER_PATH + poster_path} />
						<div>
							<h2>{title}</h2>
							<h3>{release_date}</h3>
							<h5>{overview}</h5>
						</div>
					</MovieInfo>
				</MovieWrapper>
			</Overdrive>
		)
	}
}

const MovieWrapper = styled.div`
	position: relative;
	padding-top: 50vh;
	background-size: cover;
	background: url(${props => props.backdrop}) no-repeat;
`
const MovieInfo = styled.div`
	background: white;
	text-align: left;
	padding: 2rem 10%;
	display: flex;
	> div {
		margin-left: 20px;
	}
	img {
		position: relative;
		top: -5rem;
	}
`
