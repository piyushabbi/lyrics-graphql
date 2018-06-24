import React, { Component } from 'react';

class LyricList extends Component {
	render() {
		const list =
			this.props.lyrics &&
			this.props.lyrics.map(lyric => (
				<li key={lyric.id} className="collection-item">
					{lyric.content}
				</li>
			));
		return (
			<React.Fragment>
				{this.props.lyrics ? (
					<React.Fragment>
						<h3>Lyrics</h3>
						<ul className="collection">{list}</ul>
					</React.Fragment>
				) : null}
			</React.Fragment>
		);
	}
}

export default LyricList;
