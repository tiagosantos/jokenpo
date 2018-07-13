import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const pedra = require('../../images/pedra.png');
const papel = require('../../images/papel.png');
const tesoura = require('../../images/tesoura.png');
class Icone extends Component<Props> {
  render() {
    if (this.props.escolha === "Pedra") {
      return(
        <View style={styles.jogador}>
          <Text>{this.props.jogador}</Text>
          <Image
            source={ pedra }
             style={styles.imagem}
          />
        </View>
      );
    }
    else if (this.props.escolha === "Papel") {
      return(
        <View style={styles.jogador}>
          <Text>{this.props.jogador}</Text>
          <Image
            source={ papel }
             style={styles.imagem}
          />
      </View>
      );
    }
    else if (this.props.escolha === "Tesoura") {
      return(
        <View style={styles.jogador}>
          <Text>{this.props.jogador}</Text>
          <Image
            source={ tesoura }
             style={styles.imagem}
          />
        </View>
      );
    }
    return false;
  };
};

const styles = StyleSheet.create({
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
  jogador: {
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default Icone;
