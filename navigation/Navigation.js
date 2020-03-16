import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import HomeScreen from '../components/HomeScreen'
import FlashlightScreen from '../components/FlashlightScreen'
import StoryScreen from '../components/StoryScreen'
import SettingsScreen from '../components/SettingsScreen'

const Tab = createMaterialBottomTabNavigator();



class NavigationBar extends React.Component {
    render() {
        return (
            <Tab.Navigator barStyle={{ backgroundColor: '#FFFFFF' }} >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Veilleuse"
                    component={FlashlightScreen}
                    options={{
                        tabBarLabel: 'Veilleuse',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="flashlight" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Histore"
                    component={StoryScreen}
                    options={{
                        tabBarLabel: 'Histore',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="video-vintage" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="cogs" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        )
    }
}
export default NavigationBar;
