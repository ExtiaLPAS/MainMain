import React from 'react'
import { View, Text, Image } from 'react-native'
import Bottom from './Bottom'
import { CheckBox, Icon } from 'react-native-elements'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
  }


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text style={{ margin: 30, textAlign: 'center', padding: 10, borderColor: 'black', borderRadius: 5, borderWidth: 1 }}>Connexion avec main main</Text>
        <View style={{ marginHorizontal:20 ,flex: 2, flexDirection: 'row' }}>
          <View style={{  alignItems:'center', justifyContent:'center',flex: 2, flexDirection: 'row'}}>
            <Icon
              name='bluetooth'
              size={50}
              />
          </View>
          <View style={{ flex:3, alignItems: 'center', justifyContent: 'center' }}>
            <CheckBox
              center
              title="Click Here"
              checked={this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked })}
            />
            <CheckBox
              center
              title="Click Here"
              checked={this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked })}
            />
          </View>
        </View>
        <Bottom />
      </View>
    )
  }
}

export default Home