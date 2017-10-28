import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { movies } from '../../data';
import Item from './item';
import Popup from '../popup/popup';


export default class List extends Component {

  static navigationOptions = {
    title: 'List',
  };

  
  state = {
    popupIsOpen: false,
    // Day chosen by user
    chosenDay: 0,       // choose first day by default
    // Time chosen by user
    chosenTime: null,
  }

  bookTicket = () => {
    // Make sure they selected time 
    if (!this.state.chosenTime) {
      alert('Please select show time');
    } else {
      // Close popup
      this.closeMovie();
      // Navigate away to Confirmation route

      this.props.navigation.navigate('Details')

      /*
      this.props.navigator.push({
        name: 'confirmation',
        // Generate random string
        code: Math.random().toString(36).substring(6).toUpperCase(),
      });
      */
    }
  }

  openPopUp = (movie) => {
    this.setState({
      popupIsOpen: true,
      movie,	
    });
  }

  closePopUp = () => {
    this.setState({
      popupIsOpen: false,
      // Reset values to default ones
      chosenDay: 0,
      chosenTime: null,
    });
  }

  chooseDay = (day) => {
    this.setState({
      chosenDay: day,
    });
  }

  chooseTime = (time) => {
    this.setState({
      chosenTime: time,
    });
  }
 

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
		      // Hide all scroll indicators
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {movies.map((movie, index) => <Item
            movie={movie}
            onOpen={this.openPopUp}
            key={index}
          />)}
        </ScrollView>

        <Popup
          movie={this.state.movie}
          isOpen={this.state.popupIsOpen}
          onClose={this.closePopUp}
          chosenDay={this.state.chosenDay}
          chosenTime={this.state.chosenTime}
          onChooseDay={this.chooseDay}
          onChooseTime={this.chooseTime}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,         // start below status bar
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap',       // allow multiple rows
  },
});