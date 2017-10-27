import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View
} from 'react-native';
import { movies } from '../../data';
import Item from './item';

export default class List extends Component {

  static navigationOptions = {
    title: 'List',
  };

  render() {
    return (
      <View>
        <ScrollView>
          {movies.map((movie, index) => 
          <Item
            movie={movie}
            onOpen={this.openMovie}
            key={index}
          />)}
        </ScrollView>
      </View>
    );
  }
}