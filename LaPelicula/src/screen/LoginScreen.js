import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {LPButton} from '../component/LPButton';


export default class LoginScreen extends Component {
  // configurando opções de navegação
  static navigationOptions = ({navigation}) => ({
    title: 'Página de Login',
    headerStyle: {
      backgroundColor: 'blue'
    },
    headerTintColor: 'white'
  });
  constructor(props) {
    super(props);
    this.state = {};

    this.proxima = this.proxima.bind(this);
  }

  proxima() {
    this.props.navigation.navigate('Sobre')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Tela de login</Text>
        <LPButton titulo="Próxima tela" onPress={() => {this.proxima()}}></LPButton>
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