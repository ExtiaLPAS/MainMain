import React from 'react';
import {Text, View, FlatList} from 'react-native';

class HomePage extends React.Component {
    render(){
        return(
            <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'},{key: 'a1'}, {key: 'b1'},{key: 'a2'}, {key: 'b2'},{key: 'a3'}, {key: 'b3'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />
            </View>
        )
    }
}

export default HomePage;