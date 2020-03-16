import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import HomeScreen from './components/HomeScreen'
import FlashlightScreen from './components/FlashlightScreen'
import StoryScreen from './components/StoryScreen'
import SettingsScreen from './components/SettingsScreen'

import NavigationBar from './navigation/Navigation'

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NavigationBar />
    </NavigationContainer>
  );
}
