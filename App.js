import {createStackNavigator } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage.js';
import PeoplePageDetail from './src/pages/PeoplePageDetail.js';
import {capitalizeFirstLetter} from './src/util';

export default createStackNavigator ({
		'Main' : {
			screen : PeoplePage
		},
		'PaginaDetalhe' : {
			screen: PeoplePageDetail,
			navigationOptions: ({ navigation })=> {
				const peopleName = capitalizeFirstLetter(navigation.state.params.people.name.first);
			
				
				return ({
					title: peopleName,
					headerTitleStyle: {
						color: 'white',
						fontSize: 30,
						textAlign:'center',
						flexGrow: 1,
						

		}
				});
			}
		}, 
		
},

{
	navigationOptions: {
		title: 'Pessoas!' ,
		headerTintColor: 'white',
		headerStyle: {
			backgroundColor: '#0080ff',
			borderBottomWidth: 1,
			borderBottomColor: '#C5C5C5'

		},
		headerTitleStyle: {
			color: 'white',
			fontSize: 34,
			textAlign:'center',
			flexGrow: 1,
		}
	}
});