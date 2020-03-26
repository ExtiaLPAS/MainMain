import React from 'react';
import {Text, View,FlatList} from 'react-native';
import ConnectionPage from '../Components/ConnectionPage';
import AboutUsPage from '../Components/AboutUsPage';

import settings from '../Utils/Settings'

class SettingsPage extends React.Component {
    render(){
        return(
            <View style={ styles.container}>
            <FlatList
                    data={settings}
                    keyExtractor={(item) => item.title}
                    renderItem={({item}) => <Text style={ styles.listItem}>{item.title}</Text>}
                />
            </View>
           
        )
    }
}

    const styles = {
        container: {
            flex: 1,
            marginTop: 10,
            borderColor: 'black',
            borderBottom: '1px solid'
        },
        listItem: {
            backgroundColor: "#e0e0e0",
            padding: 20,
            marginHorizontal: 2,
            fontSize: 14,
        }
    }

export default SettingsPage;