import React from 'react';
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';

import PeopleList from '../components/PeopleList.js';
import axios from 'axios';

export default class PeoplePage extends React.Component {
 
  constructor(props) {

      super(props);
      this.state = {
        peoples:[],
        loading: false,
        error: false
      };
  }

  componentDidMount(){
    this.setState({
      loading: true,
    })
    setTimeout(() => {
      axios 
            .get('https://randomuser.me/api/?nat=BR&results=15')
            .then(response => {
               const {results } = response.data;
               
               this.setState({ 
                    peoples: results,
                    loading: false,
               });
            }).catch (error => {
                this.setState({error: true,loading:false})
            })    
    }, 1500);
      
  }




  render() {
           
         return (
          <View style={styles.container}>
            {
              this.state.loading 
                ?  <ActivityIndicator size="large" color="#0000ff"/> 
                : this.state.error
                  ? <Text style={styles.errorText}>Error 404! :( </Text>
              : <PeopleList peoples={this.state.peoples} 
              onPressItem={PageParams=> {
                this.props.navigation.navigate('PaginaDetalhe',PageParams);
              }} />
            }

          </View>        
         
        );
      }
}

const styles = StyleSheet.create ({
    container:{
      flex:1,
      justifyContent: 'center'

    },
    errorText:{
      fontWeight: 'bold',
      color: 'red',
      alignSelf: 'center'
    }

});
