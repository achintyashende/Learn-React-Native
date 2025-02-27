import { ScrollView, StyleSheet, Text, View } from "react-native";

function NestedScroll() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Nested Scroll Component</Text>
            <ScrollView style={styles.scrollView}
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={true}
                nestedScrollEnabled={true}
                bounces={true}
            >
                {
                    [...Array(20)].map((_, index) => (
                        <View key={index} style={styles.box}>
                            <Text style={styles.boxText}>{index + 1}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        marginBottom: 30,
        marginTop: 30,
        textAlign: 'center',
        fontSize: 24
    },
    container: {
        margin: 20,
    },
    scrollView: {
        height: 250,
        backgroundColor: "#f0f0f0"
    },
    scrollViewContent: {
        padding: 20,
    },
    box: {
        height: 40,
        marginBottom: 10,
        backgroundColor: "red",
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxText: {
        fontWeight: 'bold',
    }
})


export default NestedScroll;