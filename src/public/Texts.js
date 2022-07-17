import Logo from "../../assets/logo.png";
import tomate from "../../assets/frutas/Tomate.png";
import brocolis from "../../assets/frutas/Brócolis.png";
import batata from "../../assets/frutas/Batata.png";
import pepino from "../../assets/frutas/Pepino.png";
import abobora from "../../assets/frutas/Abóbora.png";

const cestaDetails = {
  topo:{
    titulo: "Detalhe da Cesta",
  },
  detalhes:{
    nome: "Cesta de Verduras",
    logoFarm: Logo,
    nomeFarm: "Jennie Kim - Farm",
    descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.",
    valor:"R$ 40,00",
    button: "Comprar",
  },
  itens:{
    titulo: "Itens da Cesta",
    Lista:[
      {
        nome: "Tomate",
        imagem: tomate,
      },
      {
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        nome: "Batata",
        imagem: batata,
      },
      {
        nome: "Pepino",
        imagem: pepino,
      },
      {
        nome: "Abóbora",
        imagem: abobora,
      },
    ]
  }
}

export default cestaDetails;