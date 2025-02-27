import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function StylingDemo() {
    return (
        <View style={styles.container}>
            <View
                style={{
                    backgroundColor: 'blue',
                    padding: 10,
                    borderRadius: 5,
                    marginBottom: 10
                }}>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 15,
                        fontWeight: 'bold'
                    }}
                >
                    Inline Styling Example
                </Text>
                <View style={[styles.combineStyle, { borderWidth: 2, borderColor: 'green' }]}></View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    combineStyle: {
        backgroundColor: 'lightyellow',
        padding: 10,
        borderRadius: 5
    }
})


export default StylingDemo;
