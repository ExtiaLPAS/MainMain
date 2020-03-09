import React from 'react';
import {Text, View} from 'react-native';

class HomePage extends React.Component {
    render(){
        return(
            <View style={{ alignSelf: 'center' }}>
                <Text style={{ color: 'blue'}}>
                    Home page where bluetooth activation will be checked.
                    Message displayed if no bluetooth available.
                </Text>
            </View>
        )
    }
}

export default HomePage;