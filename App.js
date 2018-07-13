/**
 * App feito no curso de desenvovimento de apps para iOs e Android React Native.
*/

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity , Image, ScrollView } from 'react-native';

import Icone from './src/components/icone';

const pedra = require('./images/pedra.png');
const papel = require('./images/papel.png');
const tesoura = require('./images/tesoura.png');
var vitorias = 0;
var derrotas = 0;
var empates = 0;
type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state ={ escolhaUsuario: '', escolhaComputador: '' };
  };
  jokenpo(escolhaUsuario) {
    const numAleatorio = Math.floor(Math.random() * 3 + 1);
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
        empates   += 1;
    }
    else if (escolhaComputador === 'Pedra' && escolhaUsuario === 'Papel') {
        resultado = 'Você ganhou!';
        vitorias   += 1;
    }
    else if (escolhaComputador === 'Pedra' && escolhaUsuario === 'Tesoura') {
        resultado = 'Você perdeu!';
        derrotas   += 1;
    }
    else if (escolhaComputador === 'Papel' && escolhaUsuario === 'Tesoura') {
        resultado = 'Você ganhou!';
        vitorias   += 1;
    }
    else if (escolhaComputador === 'Papel' && escolhaUsuario === 'Pedra') {
        resultado = 'Você perdeu!';
        derrotas   += 1;
    }
    else if (escolhaComputador === 'Tesoura' && escolhaUsuario === 'Pedra') {
        resultado = 'Você ganhou!';
        vitorias   += 1;
    }
    else  {
        resultado = 'Você perdeu!';
        derrotas   += 1;
    }

    this.setState({ escolhaUsuario, escolhaComputador, resultado, empates, vitorias, derrotas });
  };
  render() {
    return (
      <ScrollView style={styles.main}>
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
          <View style={styles.tabela}>
            <View style={styles.item}>
              <Text style={styles.vitorias}>Vitórias: </Text>
              <Text style={styles.vitorias}>{this.state.vitorias}</Text>
            </View>
              <View style={styles.item}>
                <Text style={styles.empates}>Empates:</Text>
                <Text style={styles.empates}>{this.state.empates}</Text>
              </View>
                <View style={styles.item}>
                  <Text style={styles.derrotas}>Derrotas: </Text>
                  <Text style={styles.derrotas}>{this.state.derrotas}</Text>
                </View>


          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main:{
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
      marginTop: 20,
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
  tabela: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
},
  vitorias: {
    fontSize: 18,
    color: '#9AB628',
    margin: 5
  },
  empates: {
    fontSize: 18,
    color: '#2E90E2',
    margin: 5
  },
  derrotas: {
    fontSize: 18,
    color: '#EA325F',
    margin: 5
  }
});
