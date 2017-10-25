import React from 'react';
import { StyleSheet, Text, View, Button, DatePickerAndroid, TimePickerAndroid } from 'react-native';
import Expo from 'expo';
import moment from 'moment';
import {Options} from './src/components/options';
import {days, times} from './src/data';

export default class App extends React.Component {

  constructor(props) {
    super(props);    
    this.state = {
      days : days,
      times : times,
      chosen : 0
    };
  } 


 onChooseTime =(e)=>{ 
  let chosed = e;  
  this.setState({
    chosen : chosed
  });
 }

  render() {  

    return (      
      <View style={styles.container}>

        <Options
          values={this.state.days}
          chosen={this.state.chosen}
          onChoose={this.onChooseTime}
        />

        <Options
          values={this.state.times}   
          chosen={this.state.chosen}
          onChoose={this.onChooseTime}       
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
