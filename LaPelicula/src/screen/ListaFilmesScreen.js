import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class ListaFilmesScreen extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>Lista de filmes</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});