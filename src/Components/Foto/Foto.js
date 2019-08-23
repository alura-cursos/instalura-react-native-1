import React, { Fragment, useState } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import estilo from './estilo';


const Foto = ({ urlFoto, descricao, qntLikes }) => {
    const [curtiu, setCurtiu] = useState(false);
    const [likes, setLikes] = useState(qntLikes)

    const curtirFoto = () => {
        let qnt = likes;
        if(curtiu){
            qnt--;
        }else{
            qnt++;
        }
        setLikes(qnt)
        setCurtiu(!curtiu)
    }
    return (
        <Fragment>

            <Image
                source={{ uri: urlFoto }}
                style={estilo.imagem}
            />
            <Text>{descricao}</Text>
            <View style={estilo.viewLike}>
                <TouchableOpacity onPress={curtirFoto}>
                    <Image
                        source={ImgLike(curtiu)}
                        style={estilo.like}
                    />
                </TouchableOpacity>
                <Text>curtidas {likes}</Text>
            </View>
        </Fragment>
    )
};


const ImgLike = (curtiu) => {
    if (curtiu) {
        return require("../../../res/img/s2-checked.png")
    } else {
        return require("../../../res/img/s2.png")
    }
}


export default Foto;
