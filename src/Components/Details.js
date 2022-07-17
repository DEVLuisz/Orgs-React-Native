import React from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import Texto from "./Texto";


export default function Details ( {nome, logoFarm, nomeFarm, descricao, valor, button }) {
  return (
    <>
    
    <Texto style={styles.nome}>{nome}</Texto>
    <View style={styles.farm}>
    <Image source={logoFarm} style={styles.logo}/>
    <Texto style={styles.nomeFarm}>{nomeFarm}</Texto>
    </View>
    <Texto style={styles.descricao}>{descricao}
    </Texto>
    <Texto style={styles.valor}>{valor}</Texto>
    
    <TouchableOpacity style={styles.botao}>
      <Texto style={styles.botaoText}>{button}</Texto>
    </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  nome:{
    color: "#464646",
    lineHeight: 42,
    fontSize: 26,
    fontWeight: "bold",
  },
  farm:{
    flexDirection: "row",
    paddingVertical: 12,
  },
  logo:{
    width: 32,
    height: 32,
  },
  nomeFarm:{
    lineHeight: 26,
    fontSize: 16,
    marginLeft: 12,
  },
  descricao:{
    color: "#A3A3A3",
    lineHeight: 26,
    fontSize: 16,
  },
  valor:{
    color: "#2A9F85",
    lineHeight: 42,
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 8,
  },
  botao:{
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 7,
  },
  botaoText:{
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  }
})