import { StyleSheet, Dimensions } from "react-native";

const largura = Dimensions.get("screen").width;

const estilo = StyleSheet.create({
    imagem: {
        width: largura,
        height: largura
    }
})

export default estilo;