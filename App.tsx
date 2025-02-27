import React, { useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Basics from './src/components/Basics';
import TextInputComponent from './src/components/TextInputComponent';
import NestedScroll from './src/components/NestedScroll';




function App(): React.JSX.Element {


  return (
    <View>
      <ScrollView contentContainerStyle = {styles.scrollViewContainer}
      nestedScrollEnabled = {true}>
        <TextInputComponent />
        <Basics />
        <NestedScroll/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    backgroundColor: '#fa8',
    display: 'flex',
    alignItems: 'center'
  },
  scrollViewContainer: {
    padding : 20,
  }
})



export default App;
