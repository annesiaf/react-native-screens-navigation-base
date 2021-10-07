import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={styles.container}>

                <Text style={ styles.title }> Insertar imagen 'clickeable' de forma local</Text>
                <TouchableOpacity onPress={() => alert('Sigue a @Brahianpdev en Twitter!')}>
                    <Image
                        style={styles.image}
                        source={require('../assets/brahi.png')}
                    />
                </TouchableOpacity>
                <Text style={ styles.subtitle }> Para lograr el efecto, usamos un Touchable, que tiene comportamiento similar a un boton pero nos ofrece mas personalizacion, ve el codigo para ver como se hizo n_n</Text>

                <Text style={ styles.title }> Insertar imagen desde una url </Text>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://areajugones.sport.es/wp-content/uploads/2021/02/pikachu-pokemon.jpg' }}
                />
                <Text style={ styles.subtitle }> Tambien podrias convertirla en imagen clickeable con un touchable, como se hizo en el ejemplo anterior n_n</Text>

                <Image
                    style={styles.image}
                    source={{ uri: 'https://areajugones.sport.es/wp-content/uploads/2021/05/squirtle-pokemon.jpg' }}
                />
                <Text style={ styles.subtitle }>Noten que todo nuestro View, tiene estilo container y esta dentro de un ScrollView, esto nos permite, estilizar nuestro View que engloba la app, y ademas, scrollear hacia abajo </Text>

                <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('CrudScreen')}
                // title='Go to Crud Screen'
            >
                <Text style={styles.buttonText}> Go CRUD </Text>
            </TouchableOpacity>

            </View>


        </ScrollView>
    )
}

export default HomeScreen;

{/* Una forma de manejar los estilos es mediante
un objeto que los contengan, como se ve a continuación */}

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
        alignItems: 'center'
    },
    image: {
        width: 250,
        height: 250,
        padding: 3
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        padding: 10
    }
})