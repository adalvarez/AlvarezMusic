import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	View
} from 'react-native';
import ArtistList from './ArtistList.js';
import { getArtists } from './api-client.js'

export default class App extends Component {
	state = {
		artists: []
	}
	componentDidMount(){
		getArtists()
			.then(data=> this.setState({artists: data}))
	}
	render() {
		return (
			<View style={styles.container}>
				<ArtistList artists={ this.state.artists }/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightgray',
		...Platform.select({
			ios: {
				paddingTop:50,
			},
			android:{
				paddingTop:0,
			}
		})
	},
});
