import React from 'react';
import {View, Text,StyleSheet } from 'react-native';


const capitalizeFirstLetter = string => {
		return string[0].toUpperCase() + string.slice(1)
	}

export default capitalizeFirstLetter;	