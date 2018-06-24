import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricList extends Component {
	likeLyric(id, likes) {
		this.props.mutate({
			variables: {
				id
			},
			optimisticResponse: {
				__typename: 'Mutation',
				likeLyric: {
					id,
					__typename: 'LyricType',
					likes: likes + 1
				}
			}
		});
	}
	render() {
		const list =
			this.props.lyrics &&
			this.props.lyrics.map(lyric => (
				<li key={lyric.id} className="collection-item">
					{lyric.content}
					<i className="right">({lyric.likes})</i>
					<i
						style={{ color: 'royalblue', cursor: 'pointer' }}
						className="material-icons right"
						onClick={() => this.likeLyric(lyric.id, lyric.likes)}
					>
						thumb_up
					</i>
				</li>
			));
		return (
			<React.Fragment>
				{this.props.lyrics.length ? (
					<React.Fragment>
						<h3>
							<i>Lyrics</i>
						</h3>
						<ul className="collection">{list}</ul>
					</React.Fragment>
				) : null}
			</React.Fragment>
		);
	}
}

const mutation = gql`
	mutation LikeLyric($id: ID) {
		likeLyric(id: $id) {
			id
			likes
		}
	}
`;

export default graphql(mutation)(LyricList);
