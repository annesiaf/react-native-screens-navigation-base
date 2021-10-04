import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const SecondScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}> SecondScreen </Text>

            {/* 
            Si tienes ganas de iterar sobre un arreglo, y mostrar los elementos, un buen candidato es FlatList
                    <FlatList /> 
            Si quieres que los elementos no excedan el FlatList, puedes usar SafeAreaView 
            */}

            <Button 
                onPress={ () => navigation.navigate('HomeScreen') }
                title='Go Home!'
            />
        </View>
    )
}

export default SecondScreen;


