import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import SongList from '../components/SongList/SongList';
import AddSong from '../components/AddSong/AddSong';

const App = () => {
	return (
		<Switch>
			<Route path="/" exact component={SongList} />
			<Route path="/add-song" component={AddSong} />
		</Switch>
	);
};

export default App;
