import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function FlexLayout() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Layout using flex</Text>
            <Text>Main Axis (Row)</Text>
            <View style={styles.rowContainer}>
                <View style={[styles.box, styles.redBox]} />
                <View style={[styles.box, styles.blueBox]} />
                <View style={[styles.box, styles.greenBox]} />
                <View style={[styles.box, styles.orangeBox]} />
            </View>
            <Text>Cross Axis (Column)</Text>
            <View style={styles.colContainer}>
                <View style={[styles.box, styles.redBox]} />
                <View style={[styles.box, styles.blueBox]} />
                <View style={[styles.box, styles.greenBox]} />
                <View style={[styles.box, styles.orangeBox]} />
            </View>
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
        fontSize: 30
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    colContainer: {
        flexDirection : 'column',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    box: {
        width: 50,
        height: 50,
        margin : 10
    },
    redBox: {
        backgroundColor: 'red',
    },
    blueBox: {
        backgroundColor: 'blue',
    },
    greenBox: {
        backgroundColor: 'green',
    },
    orangeBox: {
        backgroundColor: 'orange',
    }
})


export default FlexLayout;
