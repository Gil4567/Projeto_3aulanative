import React from 'react';
import { View, Text } from 'react-native';

export default function Contacts({navigation}){
    return(
        <View style={{marginTop:60}}>
            <View>
                <Text>Nome: Ana Silva</Text>
                <Text>Telefone: (62) 90999 0987</Text>
                <Text onPress={()=> navigation.navigate('Information', {
                    nome: 'Ana Silva',
                    telefone: '(62) 977871567',
                    idade: '21',
                    email: 'naosei@native.com.br'
                })}>Informações...</Text>
            </View>
            <View style={{marginTop:60}}>
                <Text>Nome: Rafa Silva</Text>
                <Text>Telefone: (62) 90999 0987</Text>
                <Text onPress={()=> navigation.navigate('Information', {
                    nome: 'Rafa Silva',
                    telefone: '(62) 977871567',
                    idade: '28',
                    email: 'naosei@native.com.br'
                })}>Informações...</Text>
            </View>
            <View style={{marginTop:60}}>
                <Text>Nome: Joana Silva</Text>
                <Text>Telefone: (62) 90999 0987</Text>
                <Text onPress={()=> navigation.navigate('Information', {
                    nome: 'Joana Silva',
                    telefone: '(62) 977871567',
                    idade: '32',
                    email: 'naosei@native.com.br'
                })}>Informações...</Text>
            </View>
        </View>
    )
}