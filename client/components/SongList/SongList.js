import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import SongsQuery from '../../queries/fetchSongs';

class SongList extends Component {
	onSongDelete(id) {
		this.props
			.mutate({
				variables: {
					id
				}
			})
			.then(() => this.props.data.refetch());
	}

	render() {
		const songItems = this.props.data.songs
			? this.props.data.songs.map(m => (
					<li key={m.id} className="collection-item">
						{m.title}
						<i
							className="material-icons right"
							onClick={() => this.onSongDelete(m.id)}
						>
							delete
						</i>
					</li>
			  ))
			: null;
		if (this.props.data.loading) {
			return (
				<div>
					<i>Loading...</i>
				</div>
			);
		}
		return (
			<section className="container">
				<h1>SongList</h1>
				<ul className="collection">{songItems}</ul>
				<Link to="/add-song" className="btn-floating btn-large red right">
					<i className="material-icons">add</i>
				</Link>
			</section>
		);
	}
}

const query = SongsQuery;

const mutation = gql`
	mutation DeleteSong($id: ID) {
		deleteSong(id: $id) {
			title
		}
	}
`;

export default graphql(mutation)(graphql(query)(SongList));
