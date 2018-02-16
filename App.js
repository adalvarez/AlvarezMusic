import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';
import { Icon } from 'react-native-elements'

export default class App extends Component {
	render() {
		let image = 'https://pbs.twimg.com/profile_images/378800000285401980/1936531c6ba639dca437e7c14061020c_400x400.jpeg';
		let name = 'Javier Domínguez "Zeta"';
		let likes = 200;
		let comments = 10;

		return (
			<View style={styles.container}>
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
	image:{
		width: 150,
		height: 150,
	},
	artistBox: {
		backgroundColor: 'white',
		flexDirection: 'row',
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
