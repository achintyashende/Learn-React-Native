import React, { useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native';

function Basics() {

    const [count, setCount] = useState<number>(0);

    return (
        <View>
            {/* View component */}
            <View style={styles.container}>
                <Text>Hello Achintya</Text>
            </View>
            <View style={styles.boxContainer}>
                <View style={styles.redBox} />
                <View style={styles.blueBox} />
                <View style={styles.greenBox} />
            </View>

            {/* Text component */}
            <Text style={styles.myText}>This is my first text.</Text>
            <Text style={styles.nestedText}>Texts component can be <Text style={styles.bold}>Nested</Text></Text>

            {/* Image Component */}
            <Image
                style={styles.img}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkMa5nc8TsQv49NV66I15S_E70CIlWUjxLCg&s' }} />
            <Image
                style={styles.img2}
                source={require('../../assets/gtav.png')} />

            {/* Button Component */}
            <Text style={styles.nestedText}>The Count is : {count}</Text>
            <View style={styles.buttonSection}>
                <Button color={'green'} title='Increase Count' onPress={() => setCount(count + 1)} />
                <Button
                    color={'red'}
                    title='Decrease Count'
                    onPress={() => setCount(count - 1)}
                    disabled={true}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 10,
        backgroundColor: '#fa8',
        display: 'flex',
        alignItems: 'center'
    },
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    redBox: {
        backgroundColor: 'red',
        width: 50,
        height: 50

    },
    blueBox: {
        backgroundColor: 'blue',
        width: 50,
        height: 50
    },
    greenBox: {
        backgroundColor: 'green',
        width: 50,
        height: 50
    },
    myText: {
        marginTop: 30,
        textAlign: 'center',
        fontSize: 30
    },
    nestedText: {
        fontSize: 18
    },
    bold: {
        fontWeight: 'bold'
    },
    img: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
    },
    img2: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
    },
    buttonSection: {
        margin: 30,
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center'
    }

})

export default Basics;

