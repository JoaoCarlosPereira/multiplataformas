import React, { Component } from 'react';
import { View, StyleSheet, Image, Button, TouchableOpacity, Text, TextInput } from 'react-native';


class MinhaImagem extends Component {
    // mesmo no componente é necessário escrever um render()

    render() {
      return (
        <Image source={require('./src/img/primeiroapp.png')} 
              style={{width: parseInt(this.props.largura), 
                      height: parseInt(this.props.altura)}}></Image>  
      );
    }
}

class Botao extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    //estilos 
    this.styles = StyleSheet.create({
      botao: {
        width: 240,
        height: 50,
        borderWidth: parseInt(props.borda),
        borderColor: props.cor,
        borderRadius: 25
      },
      botaoArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.cor,
        borderRadius: 25
      },
      botaoTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
      }
    });
  }

  render() {
    return (
  <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
      <View style={this.styles.botaoArea}>
        <Text style={this.styles.botaoTexto}>{this.props.titulo}</Text>
      </View>
  </TouchableOpacity>
    );
  }
}

export default class App extends Component {

  constructor(props) {
    super(props);
    // definindo um objeto de estado(state)
    this.state = {
      texto: ''  
    }
    this.exibirTexto = this.exibirTexto.bind(this);
    this.clicar = this.clicar.bind(this);
  }

  exibirTexto(texto) {
    let state = this.state;
    if(texto == '') {
      state.texto = 'Nenhum texto digitado!'   
    } else {
      state.texto = texto;
    }


    // MUITO IMPORTANTE!!!
    this.setState(state);

  }

  // implementando função clicar

  clicar() {
    alert(this.state.texto);
  }

  render()  {
    return (
       
      <View style={styles.principal}>
        {/* Testando views*/}
        <MinhaImagem altura= '120' largura= '120'></MinhaImagem>
        <Button title='Clique aqui!' onPress={this.clicar}></Button>
        <Botao cor='red' titulo='Clique Aqui!' borda='2' onPress={this.clicar}></Botao>
        <TextInput placeholder='Digite o texto...' autoFocus onChangeText={(texto) => this.exibirTexto(texto)}></TextInput>
        <Text style={styles.texto}>{this.state.texto}</Text>
      </View>
    );
  }

}

// Estilos da aplicação
const styles = StyleSheet.create({
  principal: {
    backgroundColor: 'white', 
    flex: 1
  },
  textoInput: {
    fontSize: 15,
    borderWidth: 1
  },
  texto: {
    fontSize: 40,
    color: 'blue',
    fontWeight: 'bold'
  }
});