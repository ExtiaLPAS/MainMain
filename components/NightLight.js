import React from 'react'
import { View, Text, Image, Switch } from 'react-native'
import Bottom from './Bottom'

class NightLight extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      click: false,
      status: 'checked'
    }
  }


  clicked() {
    this.setState({
      click: !this.state.click
    })
  }
  render() {
    let textContent, path;

    if (this.state.click) {
      textContent = 'Les yeux de main main sont allumées !';
      path = require('../assets/main_main_on.png');

    } else {
      textContent = 'Allume les yeux de main main';
      path = require('../assets/main_main.png');
    }

    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text style={{ margin: 30, textAlign: 'center', borderColor: 'black', borderRadius: 5, borderWidth: 1, padding: 10 }}>{textContent}</Text>
        <View style={{ flex: 2.5, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{ width: 200, height: 190 }}
            source={path}
          />
        </View>
        <View style={{ flex: 0.4 ,alignItems: 'flex-end', borderColor: 'black'}}>
          <Switch
          style={{marginRight: 30}}
            value={this.state.click}
            onValueChange={() => this.clicked()}
          />
        </View>
        <Bottom />
      </View>
    )
  }
}

export default NightLight
