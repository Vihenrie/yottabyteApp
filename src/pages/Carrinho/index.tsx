import React from "react";
import { Dimensions, Image, Text, View, StyleSheet } from "react-native";
import logo from "../../../assets/logo-editor.png"

const width = Dimensions.get('screen').width;

export default function Carrinho() {
    return <>
        <Image source={logo}/>
        <Text>Lista de compras</Text>
        <View>
            <Text>Carrinho de compras</Text>

            <View>
                <Image source={logo}></Image>
                <Text>Fazenda Etec Cidade do Livro</Text>
            </View>
            
            <Text>Placa de Vídeo</Text>
            <Text>R$40,00</Text>
        </View>
    </>
}

const estilos = StyleSheet.create({

})