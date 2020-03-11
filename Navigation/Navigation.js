import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomePage from '../Components/HomePage'
import SettingsPage from '../Components/SettingsPage'
import React from 'react'
import StoryboardPage from '../Components/StoryboardPage'
import NightLightPage from '../Components/NightLightPage'
import LSFPage from '../Components/LSFPage'

const Tab = createMaterialBottomTabNavigator();

class NavigationTabs extends React.Component {
    render(){
        return(
            <Tab.Navigator   initialRouteName="HomePage"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad' }}>
          <Tab.Screen name="Accueil" component={HomePage} options={{tabBarLabel: 'Profile',tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="account" color={color} size={26} />),}}/>
          <Tab.Screen name="Histoires" component={StoryboardPage} />
          <Tab.Screen name="Veilleuse" component={NightLightPage} />
          <Tab.Screen name="LSF" component={LSFPage} />
          <Tab.Screen name="Paramètres" component={SettingsPage} />
        </Tab.Navigator>
        )
    }
}

export default NavigationTabs;
