import React, { useState } from 'react'
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

function TouchableComponent() {

    const [opacityCount, setOpacityCount] = useState(0);
    const [highlightCount, setHighlightCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Touchable Component</Text>
            <TouchableOpacity
                onPress={() => setOpacityCount(opacityCount + 0.1)}
                style={styles.button}
            >
                <Text style={styles.btnText}>
                    Touchable Opacity
                </Text>
            </TouchableOpacity>

            <TouchableHighlight
                underlayColor={'grey'}
                onPress={() => setHighlightCount(highlightCount + 1)}
                style={styles.button}
            >
                <Text style={styles.btnText}>
                    Touchable Highlight
                </Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    header: {
        marginTop: 30,
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 15
    },
    button: {
        backgroundColor: 'limegreen',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
    },
    btnText: {
        color: 'white',
    }
})


export default TouchableComponent;