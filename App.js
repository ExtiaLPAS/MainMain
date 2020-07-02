import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavigationTabs from './Navigation/Navigation'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <NavigationTabs/>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({

});
