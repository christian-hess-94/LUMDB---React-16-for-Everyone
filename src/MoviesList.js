import React, { PureComponent } from 'react'
import Movie from './Movie'
import styled from 'styled-components'

export default class MoviesList extends PureComponent {
	state = {
		movies: [],
	}
	async componentDidMount() {
		try {
			const response = await fetch(
				'https://api.themoviedb.org/3/discover/movie?api_key=bf3fef6940a888d79a9d94ca68dff306&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
			)
			const movies = await response.json()
			console.log(movies)
			this.setState({ movies: movies.results })
		} catch (e) {
			console.log(e)
		}
	}
	render() {
		const { movies } = this.state

		return <MovieGrid>{movies.map(movie => <Movie key={movie.id} movie={movie} />)}</MovieGrid>
	}
}

const MovieGrid = styled.div`
	display: grid;
	padding: 1rem;
	grid-template-columns: repeat(8, 1fr);
	grid-row-gap: 0.5rem;
`
