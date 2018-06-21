import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import LyricCreate from '../LyricCreate/LyricCreate';

import fetchSongQuery from '../../queries/fetchSong';

class SongDetail extends Component {
	render() {
		const { song } = this.props.data;
		if (!song) {
			return null;
		}
		return (
			<div className="container">
				<Link to="/">Back</Link>
				<h1>{song.title}</h1>
				<LyricCreate id={this.props.match.params.id} />
			</div>
		);
	}
}
const query = fetchSongQuery;

export default graphql(query, {
	options: props => {
		return {
			variables: {
				id: props.match.params.id
			}
		};
	}
})(SongDetail);