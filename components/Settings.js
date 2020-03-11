import React from 'react'
import { View, Text } from 'react-native'
import Bottom from './Bottom'

class Settings extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text>Settings</Text>
        <Bottom />
      </View>
    )
  }
}

export default Settings