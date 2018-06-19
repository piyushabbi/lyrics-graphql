import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Components
import SongList from './components/SongList/SongList';
import AddSong from './components/AddSong/AddSong';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql'
});

const Root = () => {
	return (
		<ApolloProvider client={client}>
			<HashRouter>
				<Switch>
					<Route path="/" exact component={SongList} />
					<Route path="/add-song" component={AddSong} />
				</Switch>
			</HashRouter>
		</ApolloProvider>
	);
};

ReactDOM.render(<Root />, document.querySelector('#root'));
