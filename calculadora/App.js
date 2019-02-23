import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

class Botao extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    //estilos 
    this.styles = StyleSheet.create({
      botao: {
        width: 150,
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
      primeiroNumero: '',
      segundoNumero: '',
      resultado: ''
    }
    this.getPrimeiroNumero = this.getPrimeiroNumero.bind(this);
    this.getSegundoNumero = this.getSegundoNumero.bind(this);
    this.calcular = this.calcular.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  getPrimeiroNumero(texto) {
    let state = this.state;
    if(texto == '') {
      state.primeiroNumero = 0   
    } else {
      state.primeiroNumero = parseFloat(texto);
    }


    // MUITO IMPORTANTE!!!
    this.setState(state);
  }

  getSegundoNumero(texto) {
    let state = this.state;
    if(texto == '') {
      state.segundoNumero = 0   
    } else {
      state.segundoNumero = parseFloat(texto);
    }


    // MUITO IMPORTANTE!!!
    this.setState(state);
  }  

  // implementando função clicar

  calcular() {

    let state = this.state;
    if((parseFloat(this.state.primeiroNumero) > 0) && (parseFloat(this.state.segundoNumero) > 0)) {
      state.resultado = (parseFloat(this.state.primeiroNumero) + parseFloat(this.state.segundoNumero))
    } else {
      state.resultado = ''; 
    }

    this.setState(state);
  }

  limpar() {
    let state = this.state;
    state.primeiroNumero = ''   
    state.segundoNumero = ''   
    state.resultado = ''; 
    this.setState(state);
  }  
  render()  {
    return (
       
      <View style={styles.principal}>
         {/* header */}
         <View style={styles.header}>
           <Text style={styles.texto}>Calculadora</Text>
         </View>

        {/* body */}
         <View style={styles.body}>
           <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>
             <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
               <TextInput placeholder='Primeiro Número' keyboardType='numbers-and-punctuation' autoFocus onChangeText={(texto) => this.getPrimeiroNumero(texto)}>{this.state.primeiroNumero}</TextInput>
               <TextInput placeholder='Segundo Número' keyboardType='numbers-and-punctuation' onChangeText={(texto) => this.getSegundoNumero(texto)}>{this.state.segundoNumero}</TextInput>
             </View>

             <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
               <Botao cor='blue' titulo='Calcular' borda='2' onPress={this.calcular}></Botao>
              <Botao cor='red' titulo='Limpar' borda='2' onPress={this.limpar}></Botao>
             </View>

           <View style={styles.resultado}>
             <Text style={{fontSize: 80, color: 'green'}}>{this.state.resultado}</Text>
           </View>            
        
           </View>
         </View>
          {/* footer */}    
         <View style={styles.footer}>
           <Text style={styles.texto}>Rodapé</Text>
         </View>                
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
  header: {
    backgroundColor: 'green', 
    height: 40, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  body: {
    backgroundColor: 'white', 
    flex: 1
  },
  footer: {
    backgroundColor: 'blue', 
    height: 40, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  texto: {
    fontSize: 20, 
    color: '#FFFFFF'
  },
  resultado: {
    backgroundColor: 'white', 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
});