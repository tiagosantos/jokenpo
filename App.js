/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity , Image } from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state ={ escolhaUsuario: '', escolhaComputador: '' , imagem: '' };
  };
  jokenpo(escolhaUsuario){

    let numAleatorio = Math.floor(Math.random() * 3 + 1);
    let imagem = '';
    let escolhaComputador = '';

    switch (numAleatorio) {
      case 1: escolhaComputador = 'Pedra'; break;
      case 2: escolhaComputador = 'Papel'; break;
      case 3: escolhaComputador = 'Tesoura'; break;
    }

    let resultado = '';

    if (escolhaComputador == escolhaUsuario) {
        resultado = 'Empate';
    }
    else if (escolhaComputador == 'Pedra' && escolhaUsuario == 'Papel') {
        resultado = 'Você ganhou!';
    }
    else if (escolhaComputador == 'Pedra' && escolhaUsuario == 'Tesoura') {
        resultado = 'Você perdeu!';
    }
    else if (escolhaComputador == 'Papel' && escolhaUsuario == 'Tesoura') {
        resultado = 'Você ganhou!';
    }
    else if (escolhaComputador == 'Papel' && escolhaUsuario == 'Pedra') {
        resultado = 'Você perdeu!';
    }
    else if (escolhaComputador == 'Tesoura' && escolhaUsuario == 'Pedra') {
        resultado = 'Você ganhou!';
    }
    else  {
        resultado = 'Você perdeu!';
    }

    this.setState({
      escolhaUsuario : escolhaUsuario,
      escolhaComputador : escolhaComputador,
      resultado : resultado,
      imagem : imagem,
    });
  };
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.botoes}>
          <TouchableOpacity
            onPress={ () => {this.jokenpo('Pedra')}}>
            <Image
              source={require('./images/pedra.png')}
               style={styles.imagem}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ () => {this.jokenpo('Papel')}}>
            <Image
              source={require('./images/papel.png')}
               style={styles.imagem}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ () => {this.jokenpo('Tesoura')}}>
            <Image
              source={require('./images/tesoura.png')}
               style={styles.imagem}
            />
          </TouchableOpacity>
      </View>

        <View style={styles.resultados}>
          <Text style={styles.escolha}>Escolha do computador: {this.state.escolhaComputador}</Text>
          <Text style={styles.escolha}>Escolha do usuário: {this.state.escolhaUsuario}</Text>
          <Text style={styles.resultado}>{this.state.resultado}</Text>
          </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  botoes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  imagem:{
    width: 100,
    height: 100,
    margin: 5
  },
  resultados: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0
  },
  resultado:{
    fontSize: 20,
    color: '#2E90E2'
  },
});
