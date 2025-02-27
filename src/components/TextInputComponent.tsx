import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

function TextInputComponent() {

    const [value, setValue] = useState('')

    console.log(value);

    return (
        <View style={styles.container}>
            <Text style={styles.header}> Text Input Component : </Text>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder='Enter your name here'
                style={styles.input} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        marginBottom: 10
    },
    header: {
        marginTop: 30,
        // textAlign: 'center',
        fontSize: 20
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: 'grey',
        margin: 10,
        paddingHorizontal: 10
    }
})


export default TextInputComponent;