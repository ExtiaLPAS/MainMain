import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Animation from 'lottie-react-native';

import anim from '../assets/17663-stories-button.json'


class HomePage extends React.Component {

  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (

      <View style={{flex: 1, backgroundColor: 'white', marginBottom: 0, padding: 0, marginTop: 0}}>
        <View style={{marginTop: 60, marginLeft: 15}}>

          <Text style={{fontSize: 32, justifyContent: 'center', fontWeight: '700', marginLeft: 20, marginBottom: 0}}>
            Hello,
          </Text>

          <View style={{flex: 0, flexDirection: 'row', elevation: 2}}>

            <Text
              style={{fontSize: 32, justifyContent: 'center', fontWeight: '700', marginLeft: 20, marginBottom: 10,}}>
              Main-Main.
            </Text>

            <Image
              source={require('../assets/main-main_full.png')}
              style={{
                height: 50,
                width: 50,
                alignItems: 'center',
                justifyContent: 'flex-end',
                borderRadius: 100,
                borderWidth: 1,
                marginLeft: 90,
                marginBottom: 0
              }}
            />

          </View>
        </View>

        <View style={{
          flex: 1,
          borderRadius: 100,
          backgroundColor: 'white',
          marginBottom: 50,
          padding: 0,
          marginTop: 30,
          width: 300,
          height: 80,
          alignItems: 'center',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <Image
            source={require('../assets/Main_main_jour_resize.jpeg')}
            style={styles.imageBack}/>
          <Text style={styles.text_image}>Veilleuse Allumé</Text>

          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={styles.image_animation_reading}
            loop={true}
            source={anim}/>
        </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageBack: {

    borderRadius: 20,
    height: '80%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  text_image: {
    position: "absolute",
    top: 349,
    left: 20,
    fontSize: 25,
    justifyContent: 'center',
    fontWeight: '600',
    color: 'white'
  },
  image_animation_reading: {
    height: 160,
    width: 160,
    margin: 4,
    marginTop: 5,
    marginRight: 'auto',
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center'
  }


})

export default HomePage;