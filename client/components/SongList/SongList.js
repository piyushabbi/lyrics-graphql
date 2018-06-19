import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
	render() {
		const songItems = this.props.data.songs
			? this.props.data.songs.map(m => (
					<li key={m.id} className="collection-item">
						{m.title}
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
			</section>
		);
	}
}

const query = gql`
	{
		songs {
			title
			id
		}
	}
`;

export default graphql(query)(SongList);
