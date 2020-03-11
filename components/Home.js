import React from 'react'
import { View, Text } from 'react-native'
import Bottom from './Bottom'

class Home extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{flex:4}}>
          <Text>Home</Text>
          <Text>zaydazuygygzgzdz</Text>
          <Text>zaydazuygygzgzdz</Text>
        </View>
        <Bottom />
      </View>
    )
  }
}

export default Home