import React, { Component } from 'react';
import { View, Text, StyleSheet, BackHandler } from 'react-native';
import {LPButton} from '../component/LPButton';


export default class LoginScreen extends Component {
  // configurando opções de navegação
  static navigationOptions = ({navigation}) => ({
    title: 'Página principal'
  });

  constructor(props) {
    super(props);
    this.state = {};

    this.proxima = this.proxima.bind(this);
    this.sair = this.sair.bind(this);
  }

  proxima() {
    this.props.navigation.navigate('Login')
  }

  sair() {
    BackHandler.exitApp();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Tela Principal</Text>
        <LPButton titulo="Próxima tela" onPress={() => {this.proxima()}}></LPButton>
        <LPButton titulo="Sair" onPress={() => {this.sair()}}></LPButton>
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