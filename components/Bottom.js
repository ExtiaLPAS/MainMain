import React from 'react'
import { View, Text, Image  } from 'react-native'

class Bottom extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'white' }}>
        <Image
          style={{width: 80, height: 55, marginBottom:10}}
          source={require('../assets/logo.png')} 
          />
      </View>
    )
  }
}

export default Bottom