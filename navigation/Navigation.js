import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../components/Home'
import Settings from '../components/Settings'
import History from '../components/History'
import NightLight from '../components/NightLight'

class Navigation extends React.Component {
    render() {
        const Tab = createBottomTabNavigator();
        return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ color, size }) => {
                            if (route.name === 'Home') {
                                return (
                                    <Ionicons
                                        name={'ios-home'
                                        }
                                        size={size}
                                        color={color}
                                    />
                                );
                            } else if (route.name === 'Histoire') {
                                return (
                                    <Ionicons
                                        name={'md-film'}
                                        size={size}
                                        color={color}
                                    />
                                );
                            }
                            else if (route.name === 'Veilleuse') {
                                return (
                                    <Ionicons
                                        name={'ios-cloudy-night'}
                                        size={size}
                                        color={color}
                                    />
                                );
                            }
                            else if (route.name === 'Paramètres') {
                                return (
                                    <Ionicons
                                        name={'md-settings'}
                                        size={size}
                                        color={color}
                                    />
                                );
                            }
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: 'purple',
                        inactiveTintColor: 'gray',
                    }}
                >
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Histoire" component={History} />
                    <Tab.Screen name="Veilleuse" component={NightLight} />
                    <Tab.Screen name="Paramètres" component={Settings} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

export default Navigation