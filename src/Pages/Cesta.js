import React from "react";
import { ScrollView, StyleSheet, View, FlatList } from "react-native";
import Details from "../Components/Details";
import Itens from "../Components/Itens";
import Texto from "../Components/Texto";
import Top from "../Components/Top";

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <FlatList
        data={itens.Lista}
        renderItem={Itens}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Top {...topo} />
              <View style={styles.cestaView}>
                <Details {...detalhes} />
                <Texto style={styles.titulo}> {itens.titulo}</Texto>
              </View>
            </>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  cestaView: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 32,
    fontSize: 20,
    lineHeight: 32,
  },
});
