import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	FlatList,
	View
} from 'react-native';
import ArtistBox from './ArtistBox.js';

export default class ArtistList extends Component {
	render() {
		return (
			<FlatList
				data={this.props.artists}
				renderItem={ ({item})=> <ArtistBox artist={item}/> }
			/>
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
