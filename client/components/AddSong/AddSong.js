import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

class AddSong extends Component {
	constructor() {
		super();
		this.state = {
			songValue: ''
		};
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}

	onSubmitHandler(e) {
		e.preventDefault();
		this.props
			.mutate({
				variables: {
					title: this.state.songValue
				}
			})
			.then(() => this.props.history.push('/'));
	}

	render() {
		return (
			<div className="container">
				<Link to="/">Back</Link>
				<h1>Create a Song</h1>
				<form onSubmit={this.onSubmitHandler}>
					<label>Song Title</label>
					<input
						type="text"
						value={this.state.songValue}
						onChange={e => this.setState({ songValue: e.target.value })}
					/>
				</form>
			</div>
		);
	}
}

const mutation = gql`
	mutation AddSong($title: String) {
		addSong(title: $title) {
			title
		}
	}
`;

export default graphql(mutation)(AddSong);
