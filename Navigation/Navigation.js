import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack'

import HomePage from '../Components/HomePage'
import SettingsPage from '../Components/SettingsPage'
import React from 'react';
import StoryboardPage from '../Components/StoryboardPage'
import NightLightPage from '../Components/NightLightPage'
import LSFPage from '../Components/LSFPage'



const Stack=createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

class NavigationTabs extends React.Component {
    render(){
        return(
            <Tab.Navigator   initialRouteName="HomePage"
            activeColor="#4d4d4d"
            inactiveColor="#4d4d4d"
            barStyle={{ backgroundColor: '#ddeaeb' }}>
          <Tab.Screen name="Accueil" component={HomePage} style={styles.icons} options={{tabBarLabel: "Accueil",tabBarIcon: () => (true)}}/>
          <Tab.Screen name="Histoires" component={StoryboardPage} style={styles.icons}  options={{tabBarLabel: 'Histoires',tabBarIcon: () => (true)}}/>
          <Tab.Screen name="Veilleuse" component={NightLightPage} style={styles.icons}  options={{tabBarLabel: 'Veilleuse',tabBarIcon: () => (true)}}/>
          <Tab.Screen name="LSF" component={LSFPage} style={styles.icons}  options={{tabBarLabel: 'LSF',tabBarIcon: () => (true)}}/>
          <Tab.Screen name="Paramètres" component={SettingsPage} style={styles.icons}  options={{tabBarLabel: 'Paramètres',tabBarIcon: () => (true)}}/>
        </Tab.Navigator>
        )
    }
}

// Search.js

// ...

const styles = {
    icons:{
        color: 'red',
        fontFamily: 'Helvetica-Bold'
    }
}

export default NavigationTabs;
