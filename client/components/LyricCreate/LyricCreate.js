import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: ''
		};
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(e) {
		e.preventDefault();
		this.props.mutate({
			variables: {
				songId: this.props.id,
				content: this.state.content
			}
		});
		this.setState({
			content: ''
		});
	}
	render() {
		return (
			<form style={{ maxWidth: '600px' }} onSubmit={this.onSubmit}>
				<label>Add a Lyrics</label>
				<input
					type="text"
					value={this.state.content}
					onChange={e => this.setState({ content: e.target.value })}
				/>
			</form>
		);
	}
}

const mutation = gql`
	mutation AddLyricToSong($content: String, $songId: ID) {
		addLyricToSong(content: $content, songId: $songId) {
			id
			lyrics {
				id
				content
				likes
			}
		}
	}
`;

export default graphql(mutation)(LyricCreate);
