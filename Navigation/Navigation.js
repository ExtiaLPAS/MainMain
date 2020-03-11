import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack'

import HomePage from '../Components/HomePage'
import SettingsPage from '../Components/SettingsPage'
import React from 'react'
import StoryboardPage from '../Components/StoryboardPage'
import NightLightPage from '../Components/NightLightPage'
import LSFPage from '../Components/LSFPage'
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import PanToolIcon from '@material-ui/icons/PanTool';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

const Stack=createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

class NavigationTabs extends React.Component {
    render(){
        return(
            <Tab.Navigator   initialRouteName="HomePage"
            activeColor="#4d4d4d"
            inactiveColor="#4d4d4d"
            barStyle={{ backgroundColor: '#ddeaeb' }}>
          <Tab.Screen name="Accueil" component={HomePage} style={styles.icons} options={{tabBarLabel: "Accueil",tabBarIcon: () => (<HomeIcon/>)}}/>
          <Tab.Screen name="Histoires" component={StoryboardPage} style={styles.icons}  options={{tabBarLabel: 'Histoires',tabBarIcon: () => (<SpeakerNotesIcon/>)}}/>
          <Tab.Screen name="Veilleuse" component={NightLightPage} style={styles.icons}  options={{tabBarLabel: 'Veilleuse',tabBarIcon: () => (<EmojiObjectsIcon/>)}}/>
          <Tab.Screen name="LSF" component={LSFPage} style={styles.icons}  options={{tabBarLabel: 'LSF',tabBarIcon: () => (<PanToolIcon/>)}}/>
          <Tab.Screen name="Paramètres" component={SettingsPage} style={styles.icons}  options={{tabBarLabel: 'Paramètres',tabBarIcon: () => (<SettingsIcon/>)}}/>
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
