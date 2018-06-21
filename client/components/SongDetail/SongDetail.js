import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import fetchSongQuery from '../../queries/fetchSong';

class SongDetail extends Component {
	render() {
		return (
			<div className="container">
				<h1>Song Detail</h1>
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
