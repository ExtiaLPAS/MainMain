import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './Components/HomePage'
import TabMenu from './Components/TabMenu'

export default function App() {
  return (
    <View>
      <HomePage/>
      <TabMenu/>
    </View>
  );
}

const styles = StyleSheet.create({

});
