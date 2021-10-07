import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const AddTodo = ( { submitHandler } ) => {

    // Para crear nuestra nueva tarea, es necesario partir de un sring vacio
    const [ text, setText ] = useState('');

    // Y para efectivamente agregarla a nuestro FlatList, debemos capturar el valor ingresado
    const changeHandler = ( value ) => {
        setText( value )
    }

    return (
        <View>
            <TextInput
                style={ styles.input }
                placeholder='Nueva tarea...'
                // onChangeText={ (value) => changeHandler(value) }
                onChangeText={ changeHandler }
            />

            { /* Notese que estamos haciendo desestructuracion en nuestro functionalComponent AddTodo para "traernos" la funcion submitHandler */ }
            <Button 
                onPress={ () => submitHandler(text) }
                title='Agregar tarea'
                color='#009688'
            />
        </View>
    )
}

export default AddTodo;

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#009688'
    }
})