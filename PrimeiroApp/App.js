import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {

  render()  {
    return (
       
      <View style={styles.principal}>
         {/* header */}
         <View style={styles.header}>
           <Text style={styles.texto}>Cabeçalho</Text>
         </View>

          {/* body */}
         <View style={styles.body}>
         <Text style={styles.texto_body}>Texto</Text>
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
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'flex-end'
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
  texto_body: {
    color: 'yellow', 
    fontSize: 80, 
  }
});