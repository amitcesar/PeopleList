import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	Image
} from 'react-native';
import Line from '../components/Line';

export default class PeoplePageDetail extends React.Component {
	render() {
			const { people } = this.props.navigation.state.params;
			

		return (
			<View style={styles.container}>
				
				<Image source={{uri: people.picture.large}} style={styles.avatar} /> 
				<View style={styles.DetailContainer}>
					<Line label="Email:" content={people.email}/>	
					<Line label="Cidade:" content={people.location.city}/>	
					<Line label="Estado" content={people.location.state}/>	
					<Line label="Celular:" content={people.cell}/>
					<Line label="Telefone:" content={people.phone}/>
					<Line label="Nacionalidade:" content={people.nat}/>								
				</View>
			</View>
			);
	}
}

const styles = StyleSheet.create ({
	container:{
		padding: 15
	},
	avatar: {
		aspectRatio: 1
	},
	DetailContainer: {
		backgroundColor: '#e2f9ff',
		marginTop: 10,
		elevation: 1
	},
	
});