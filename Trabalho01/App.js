import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ListView } from 'react-native';

class Botao extends Component {

  constructor(props) {
    super(props);

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
   
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2  });

    console.disableYellowBox = true;
    this.oArrayPessoas = [];

 // definindo um objeto de estado(state)
    this.state = {
      nome: '',
      idade: '',
      dataSource: this.ds.cloneWithRows([])
    };    

    this.getNome = this.getNome.bind(this);
    this.getIdade = this.getIdade.bind(this);
    this.salvar = this.salvar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.5, width: "100%", backgroundColor: "#000" }} />
    );
  };
  
  GetListViewItem(rowData){
    Alert.alert(rowData);
  }  

  getNome(texto) {
    let state = this.state;
    state.nome = texto;

    // MUITO IMPORTANTE!!!
    this.setState(state);
  }

  getIdade(texto) {
    let state = this.state;
    state.idade = parseInt(texto);


    // MUITO IMPORTANTE!!!
    this.setState(state);
  }  

  // implementando função clicar

  salvar() {   
   

    if(this.state.nome == ''){
      alert('Informe um nome');
    } else if(this.state.idade == ''){
      alert('Informe uma idade');
    } else {
      this.oArrayPessoas.push('Nome: ' + this.state.nome + '. Idade:  ' + this.state.idade + '.');
      let state = this.state;
      state = {
        nome: '',
        idade: '',
        dataSource: this.ds.cloneWithRows(this.oArrayPessoas.slice())
      }; 
      this.setState(state);
  }
  }

  limpar() {
    let state = this.state;
    state.nome = '';   
    state.idade = '';   
    state.dataSource = this.ds.cloneWithRows([]);
    this.oArrayPessoas = [];
    this.setState(state);
  }  
  render()  {
    return (
       
      <View style={styles.principal}>
         {/* header */}
         <View style={styles.header}>
           <Text style={styles.texto}>Cadastro de Pessoas</Text>
         </View>

        {/* body */}
         <View style={styles.body}>
           <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>
             <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
               <TextInput placeholder='Nome' autoFocus onChangeText={(texto) => this.getNome(texto)}>{this.state.nome}</TextInput>
               <TextInput placeholder='Idade' keyboardType='number-pad' onChangeText={(texto) => this.getIdade(texto)}>{this.state.idade}</TextInput>
             </View>

             <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
               <Botao cor='blue' titulo='Salvar' borda='2' onPress={this.salvar}></Botao>
               <Botao cor='red' titulo='Limpar' borda='2' onPress={this.limpar}></Botao>
             </View>

            <View style={styles.container}>
              <ListView
                dataSource={this.state.dataSource}
                renderSeparator={this.ListViewItemSeparator}
                renderRow={ rowData => ( <Text style={styles.rowViewContainer}>{rowData} </Text> )}
                />
            </View>             
           </View>
         </View>
          {/* footer */}    
         <View style={styles.footer}>
           <Text style={styles.texto}>Atividade 01</Text>
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
    backgroundColor: 'blue', 
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
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e5e5e5"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  rowViewContainer:{
    fontSize: 18,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  }  
});