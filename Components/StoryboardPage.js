import React from 'react';
import {Text, View} from 'react-native';
import StoryList from './StoryList'

class StoryboardPage extends React.Component {
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <StoryList/>
            </View>
        )
    }
}

export default StoryboardPage;