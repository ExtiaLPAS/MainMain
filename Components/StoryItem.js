import React from 'react';
import {Text, View,Image} from 'react-native';
import React from 'react';

class StoryItem extends React.Component {
    render() {
        return(

            <View style={{ flexDirection: 'colum' }}>
                <View style={{flex: 2}}>
                    <Image source={require('../assets/main-main_full.png')}></Image>
                </View>
                <View style={{flex:3, flexDirection:'row'}}>
                    <View style={{flex:1}, styles.title}>
                        <Text>Insert Story Title</Text>
                    </View>
                    <View style={{flex:4}}>
                        <Text>Insert Story abstract here </Text>
                    </View>
                </View>
            </View>

        )
    }
}

const styles = {
    storyItem: {
        border: 'solid',
        
    },
    title: {
        fontWeight: 'bold'
    }
}

export default StoryItem;