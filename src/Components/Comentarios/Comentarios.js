import React, { Fragment, useState } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    TextInput
} from "react-native";

import estilo from './estilo';


const Comentarios = ({ comentarios }) => {
    const [estComentarios, setComentarios] = useState(comentarios);


    const adicionarComentario = () => {
        console.warn(conteudoCampoInput);
        campoInput.clear();
        const novoComentario = {
            date: Date.now(),
            text: conteudoCampoInput,
            userName: "Bugan"
        }

        setComentarios([...estComentarios, novoComentario]);
    }


    let campoInput;
    let conteudoCampoInput = "";
    return (
        <Fragment>

            <FlatList
                data={estComentarios}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                <View style={estilo.naMesmaLinha}>
                    <Text>{item.userName} </Text>
                    <Text> {item.text}</Text>
                </View>
                }
            />
            <View style={estilo.naMesmaLinha}>
                <TextInput
                    ref={textInput => campoInput = textInput}
                    onChangeText={texto => conteudoCampoInput = texto}
                    placeholder={"Deixe seu comentário..."}
                    style={{ flex: 1 }}
                />
                <TouchableOpacity onPress={adicionarComentario}>
                    <Image source={require("../../../res/img/send.png")}
                        style={estilo.imgSend} />
                </TouchableOpacity>
            </View>
        </Fragment>
    );
};

export default Comentarios;