import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationTabs from './Navigation/Navigation'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTabs/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
