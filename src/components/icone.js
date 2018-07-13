

import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Icone extends Component<Props> {
  render(){
    if (this.props.escolha == "Pedra") {
      return(
        <View style={styles.jogador}>
          <Text>{this.props.jogador}</Text>
          <Image
            source={require('../../images/pedra.png')}
             style={styles.imagem}
          />
        </View>
      );
    }
    else if (this.props.escolha == "Papel") {
      return(
        <View style={styles.jogador}>
          <Text>{this.props.jogador}</Text>
          <Image
            source={require('../../images/papel.png')}
             style={styles.imagem}
          />
      </View>
      );

    }
    else if (this.props.escolha == "Tesoura") {
      return(
        <View style={styles.jogador}>
          <Text>{this.props.jogador}</Text>
          <Image
            source={require('../../images/tesoura.png')}
             style={styles.imagem}
          />
        </View>
      );

    }
    else{
      return false;
    }
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
