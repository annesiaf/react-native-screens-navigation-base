import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';


const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={stlyes.container}>
            <Text style={stlyes.title}> Home Screen </Text>

            { /* Si necesitas la imagen dese carpeta local, usa require */}

            <TouchableOpacity onPress={ () => alert('Sigue a Damian Sire!')}>
                <Image
                    style={ stlyes.image }
                    source={{ uri: 'https://areajugones.sport.es/wp-content/uploads/2021/02/pikachu-pokemon.jpg' }}
                />
            </TouchableOpacity>

            <Button
                onPress={() => navigation.navigate('SecondScreen')}
                title='Go to Second Screen'
            />
        </View>
    )
}

export default HomeScreen;

const stlyes = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    image: { 
        width: 500, 
        height: 500 
    }
})