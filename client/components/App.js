import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import SongList from '../components/SongList/SongList';
import AddSong from '../components/AddSong/AddSong';
import SongDetail from '../components/SongDetail/SongDetail';

const App = () => {
	return (
		<Switch>
			<Route path="/" exact component={SongList} />
			<Route path="/add-song" component={AddSong} />
			<Route path="/details/:id" component={SongDetail} />
		</Switch>
	);
};

export default App;
