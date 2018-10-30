import React from 'react';
import {FlatList, Text,StyleSheet } from 'react-native';
import PeopleListItem from './PeopleListItem.js';

const PeopleList = props => {
	
	const { peoples, onPressItem } = props;
    

	return (
		<FlatList styles={styles.container} data={peoples} renderItem={({item})=> (
			<PeopleListItem 
				people={item} 
				navigatePeoplePageDetail ={onPressItem} />
		)}
		 keyExtractor={item => item.login.uuid} />
	) 
}; 


const styles = StyleSheet.create({
	container : {
		backgroundColor: '#a8c9f4'
	},
})

export default PeopleList;
