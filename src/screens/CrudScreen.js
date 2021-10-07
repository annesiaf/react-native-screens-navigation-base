import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import AddTodo from '../components/addTodo';

const CrudScreen = () => {
    // Volvemos a usar useNavigation para poder navegar entre nuestros Screens -> StackNavigator 
    const navigation = useNavigation();

    // Creamos un arreglo de objetos en el cual podamos iterar sobre un FlatList
    // Recordar que un FlatList recibe: data, renderItem y keyExtractor (este ultimo lo usariamos si estuviesemos consumiendo una API por ejemplo)
    const [todos, setTodos] = useState([
        { text: 'Seguir a Damian Sire', key: '1' },
        { text: 'Seguir aprendiendo React', key: '2' },
        { text: 'Cocinar para dos dias', key: '3' },
        { text: 'Sacar pasaje temprano', key: '4' },
        { text: 'Sacar el perro a pasear antes de irme', key: '5' },
        { text: 'Programar en el viaje', key: '6' }
    ]);

    // Creamos la funcion para eliminar una tarea filtrando un elemento:
    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key)
        });
    }

    // Creamos una funcion para agregar una nueva tarea:
    // Recordar que el Math.random a toSTring, es unicamente porque en la data, tenemos nuestros KEYS como Strings
    const submitHandler = (text) => {
        setTodos((prevTodos) => {
            return [
                { text: text, key: Math.random().toString() },
                ...prevTodos
            ];
        })
    }


    return (
        <View style={styles.container}>
           
            <Text style={styles.myTodos}> MIS TAREAS </Text>
            <View style={styles.content}>
                <AddTodo submitHandler={submitHandler} />

                <View style={styles.list}>

                    <FlatList
                        data={todos}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                                <Text style={styles.item}>{item.text}</Text>
                            </TouchableOpacity>
                        )}
                    />

                </View>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('HomeScreen')}
            >
                <Text style={styles.buttonText}> BACK </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CrudScreen;

const styles = StyleSheet.create({
    button: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        bottom: 10
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    content: {
        flex: 1
    },
    list: {
        marginTop: 20,
        marginBottom: 20
    },
    myTodos: {
        color: '#009688',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    item: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24,
    }
})