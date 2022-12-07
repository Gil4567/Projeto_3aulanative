import React from 'react';
import { View, Text } from 'react-native';

export default function Information({ route }){
    return(
        <View style={{marginTop:60}}>
            <Text>Nome: {route.params?.nome}</Text>
            <Text>Telefone: {route.params?.telefone}</Text>
            <Text>Idade: {route.params?.idade}</Text>
            <Text>Email: {route.params?.email}</Text>
        </View>
    )
}