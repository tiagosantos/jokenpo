/**
 * App feito no curso de desenvovimento de apps para iOs e Android React Native.
*/

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity , Image } from 'react-native';

import Icone from './src/components/icone';

const pedra = require('./images/pedra.png');
const papel = require('./images/papel.png');
const tesoura = require('./images/tesoura.png');

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state ={ escolhaUsuario: '', escolhaComputador: '' , imagem: '' };
  };
  jokenpo(escolhaUsuario) {
    const numAleatorio = Math.floor(Math.random() * 3 + 1);
    let imagem = '';
    let escolhaComputador = '';
    switch (numAleatorio) {
      case 1: escolhaComputador = 'Pedra'; break;
      case 2: escolhaComputador = 'Papel'; break;
      case 3: escolhaComputador = 'Tesoura'; break;
      default: escolhaComputador = '';
    }

    let resultado = '';

    if (escolhaComputador === escolhaUsuario) {
        resultado = 'Empatou!';
    }
    else if (escolhaComputador === 'Pedra' && escolhaUsuario === 'Papel') {
        resultado = 'Você ganhou!';
    }
    else if (escolhaComputador === 'Pedra' && escolhaUsuario === 'Tesoura') {
        resultado = 'Você perdeu!';
    }
    else if (escolhaComputador === 'Papel' && escolhaUsuario === 'Tesoura') {
        resultado = 'Você ganhou!';
    }
    else if (escolhaComputador === 'Papel' && escolhaUsuario === 'Pedra') {
        resultado = 'Você perdeu!';
    }
    else if (escolhaComputador === 'Tesoura' && escolhaUsuario === 'Pedra') {
        resultado = 'Você ganhou!';
    }
    else  {
        resultado = 'Você perdeu!';
    }

    this.setState({ escolhaUsuario, escolhaComputador, resultado });
  };
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.titulo}>Escolha uma opção:</Text>
          <View style={styles.botoes}>
              <TouchableOpacity
                onPress={() => { this.jokenpo('Pedra'); }}>
                <Image
                  source={ pedra }
                  style={styles.imagem}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { this.jokenpo('Papel'); }}>
                <Image
                  source={ papel }
                  style={styles.imagem}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { this.jokenpo('Tesoura'); }}>
                <Image
                  source={ tesoura }
                  style={styles.imagem}
                />
              </TouchableOpacity>
          </View>
        <View style={styles.resultados}>
        <Text style={styles.resultado}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaComputador} jogador="Computador" />
          <Icone escolha={this.state.escolhaUsuario} jogador="Você" />
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
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
    marginBottom: 20,
  },
  imagem:{
    width: 100,
    height: 100,
  },
  escolhaUsuario:{
    color: '#9AB628',
    fontSize: 20,
  },
  escolhaComputador:{
    color: "#AC3745",
    fontSize: 20,
  },
  resultados: {
    marginTop: 30,
    alignItems: 'center',
  },
  resultado:{
    marginBottom: 20,
    fontSize: 30,
    color: '#2E90E2',
    fontWeight: 'bold'
  },
  titulo:{
    marginBottom: 20,
    fontSize: 36,
    color: '#EA325F',
    fontWeight: 'bold'
  },
});
