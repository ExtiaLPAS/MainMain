import React from 'react';
import {Text, View} from 'react-native';

class AboutUsPage extends React.Component {
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> AboutUsPage contains informations about the project, the company, maybe contacts for support for example. To be implemented </Text>
            </View>
            
        )
    }
}

export default AboutUsPage;