import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';
import { Icon } from 'react-native-elements'

export default class ArtistBox extends Component {
	render() {
		let { image, name, likes, comments } = this.props.artist;
		return (
			<View style={styles.artistBox}>
				<Image source={{uri:image}} style={styles.image}/>
				<View style={styles.info}>
					<Text style={styles.name}>{name}</Text>
					<View style={styles.social}>
						<View style={styles.iconContainer}>
							<Icon
								name='ios-heart-outline'
								type='ionicon'
								color='gray'
								size={30}
							/>
							<Text style={styles.count}>{likes}</Text>
						</View>
						<View style={styles.iconContainer}>
							<Icon
								name='ios-chatboxes-outline'
								type='ionicon'
								color='gray'
								size={30}
							/>
							<Text style={styles.count}>{comments}</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	image:{
		width: 150,
		height: 150,
	},
	artistBox: {
		margin: 5,
		elevation: 4,
		backgroundColor: 'white',
		flexDirection: 'row',
		shadowColor: 'black',
		shadowOpacity: .2,
		shadowOffset: {
			height: 1,
			width: -2,
		},
	},
	info:{
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	name:{
		fontSize: 20,
		color: 'black'
	},
	social:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 60,
		marginTop: 15,
	},
	iconContainer:{
		flex:1,
		alignItems: 'center'
	},
	count:{
		color: 'gray'
	}
});
