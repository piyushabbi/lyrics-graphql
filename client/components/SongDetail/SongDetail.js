import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import LyricCreate from '../LyricCreate/LyricCreate';
import LyricList from '../LyricList/LyricList';

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
				<h2>{song.title}</h2>
				<LyricList lyrics={song.lyrics} />
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
