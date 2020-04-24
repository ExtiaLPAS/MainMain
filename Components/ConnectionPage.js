import React from 'react';
import {Text, View} from 'react-native';

class ConnectionPage extends React.Component {
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> ConnectionPage will be the component that deals with the Bluetooth connection with the Raspberry. OnOpen of the application if bluetooth connection is not set, ConnectionPageis where the user should go to enable it. To be implemented </Text>
            </View>
            
        )
    }
}

export default ConnectionPage;