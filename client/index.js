import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Components
import SongList from './components/SongList/SongList';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql'
});

const Root = () => {
	return (
		<ApolloProvider client={client}>
			<SongList />
		</ApolloProvider>
	);
};

ReactDOM.render(<Root />, document.querySelector('#root'));
