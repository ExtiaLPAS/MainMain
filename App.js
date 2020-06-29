import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavigationTabs from './Navigation/Navigation'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTabs/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
