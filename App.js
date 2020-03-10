import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './Components/HomePage'
import Navigation from './Navigation/Navigation'
import 'react-native-gesture-handler';

export default function App() {
  return (
    <View>
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({

});
