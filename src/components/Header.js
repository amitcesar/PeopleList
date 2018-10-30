import React from 'react';
import {View, Text, StyleSheet} from 'react-native';




const Header = (props) => (

		<View style={style.container}>
			<Text style={ style.title}> {props.title} </Text>
		</View>
	);


const style = StyleSheet.create( {
	container: {
		marginTop: 33,
		backgroundColor: '#0080ff',

		alignItems: 'center',
		justifyContent: 'center',
	
	},
	title: {
		fontSize: 52,
		color: '#fff',
	}
});
export default Header;