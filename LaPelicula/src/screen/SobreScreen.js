import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LPButton } from '../component/LPButton';
import { StackActions, NavigationActions } from
  'react-navigation';

export default class SobreScreen extends Component {
  // configurando opções de navegação
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Sobre',
    tabBarIcon: ({ focused, tintColor }) => {
      if (focused) {
        return (
          <Image source={require('../img/cadastrar_ativo.png')}
            style={{ width: 26, height: 26 }} />
        );
      } else {
        return (
          <Image source={require('../img/cadastrar_inativo.png')}
            style={{ width: 26, height: 26 }} />
        );
      }
    }
  });

  constructor(props) {
    super(props);
    this.state = {};

    this.voltar = this.voltar.bind(this);
    this.telaPrincipal = this.telaPrincipal.bind(this);
  }

  voltar() {
    // passando para próxima tela        
    this.props.navigation.goBack();
  }

  telaPrincipal() {
    this.props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: 'ListaFilmesScreen'
          })
        ]
      })
    );
  }

  render() {
    return (
      <View style={styles.container}>
       
         <View style={styles.box}>
           <Text style={styles.inputText}>LaPelicula é um reprodutor/tocador e transmissor multimídia de código aberto.
             Possui suporte a vários formatos de vídeo, como OGM, MPEG1, MPEG-2,
             MPEG-4, DivX, Blu-ray, DVD, VCDs, etc e áudio como OGG, Speex, FLAC, MPC, MP3, WAV e outros.</Text> 
        </View>


        <LPButton titulo="Voltar"
          onPress={() => { this.voltar() }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
    width: 400,
    backgroundColor: 'white',
    opacity: 0.9
  },
  inputText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    margin: 10
  }


});