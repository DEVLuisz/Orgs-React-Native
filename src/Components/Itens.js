import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Texto from "./Texto";

export default function Itens({ item: { nome, imagem } }) {
  return (
    <View style={styles.item}>
      <Image source={imagem} style={styles.imagem} />
      <Texto style={styles.texto}>{nome}</Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  imagem: {
    width: 46,
    height: 46,
  },
  texto: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  },
});
