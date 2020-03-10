import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Components/HomePage';
import LSFPage from '../Components/LSFPage';
import NightLightPage from '../Components/NightLightPage';
import SettingsPage from '../Components/SettingsPage';
import StoryboardPage from '../Components/StoryboardPage'
import React from 'react'
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { TabNavigator } from 'react-navigation'

/**
 * This class is needed for navigation purposes, it contains all the code necessary to set the navigation
 * system up between all the pages, hence why all of them are imported in there
 */

 const Tab = createBottomTabNavigator();

 export default class Navigation extends React.Component {
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Accueil" component={HomePage}></Tab.Screen>
                    <Tab.Screen name="Histoires" component={StoryboardPage}></Tab.Screen>
                    <Tab.Screen name="LSF" component={LSFPage}></Tab.Screen>
                    <Tab.Screen name="Paramètres" component={SettingsPage}></Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
 }