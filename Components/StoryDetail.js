import React from 'react'
import {StyleSheet, Image, ScrollView, View} from 'react-native';
import {Text, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import {AirbnbRating} from 'react-native-elements';
import {Slider} from 'react-native-elements';

class StoryDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <ScrollView style={styles.scrollview_container} scrollIndicatorInsets={{right: 1}}>

        <View style={{backgroundColor: '#caaffe'}}>
          <View style={{
            borderBottomRightRadius: 45,
            borderBottomLeftRadius: 45,
            borderRadius: 0,
            backgroundColor: 'white'
          }}>

            <View style={styles.shadow}>
              <Image
                source={require('../assets/histoire_sorcière.jpg')}
                style={styles.image}/>
            </View>

            <View style={{flexDirection: 'row', marginTop: -25}}>
              <View style={styles.shadow_title}>
                <Text h3 style={styles.title}> {this.props.route.params.item.title} </Text>
              </View>

              <View style={{alignItems: "center", marginLeft: 170, marginTop: 30}}>
                <Icon color='#7158B6' size={30} name='heart'/>
              </View>
            </View>

            <Text style={styles.title_auteur}> Auteur </Text>

            <View style={{marginTop: -40, marginBottom: 20, justifyContent: 'center', alignItems: 'center'}}>
              <AirbnbRating reviews size={30}/>
            </View>

            <View style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: "center",
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: 1
            }}>

              <View style={{marginTop: 10, right: 50, alignItems: "center", transform: [{scaleX: -1},]}}>
                <Icon color='black' size={30} name='forward'/>
              </View>

              <View style={{justifyContent: "center", alignItems: "center"}}>
                <View style={styles.shadow_title}>
                  <Icon reverse color='#caaffe' size={70} name='play'/>
                </View>
              </View>

              <View style={{marginTop: 10, left: 50, alignItems: "center"}}>
                <Icon color='black' size={30} name='forward'/>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>


              <View style={{marginLeft: 30, marginTop: 5}}>
                <Icon color='#7158B6' size={30} name='sound'/>
              </View>

              <View style={{
                flex: 1,
                alignItems: 'stretch',
                justifyContent: 'center',
                marginLeft: 20,
                marginRight: 30,
                marginBottom: 30
              }}>
                <Slider
                  thumbTintColor='#caaffe'/>
              </View>


            </View>

            <Divider style={{backgroundColor: '#caaffe'}}/>
          </View>
        </View>

        <View style={{backgroundColor: '#caaffe'}}>

          <Text h4 style={styles.title_description}> Description </Text>
          <Text style={styles.description}>{this.props.route.params.item.description}</Text>
        </View>

      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  scrollview_container: {
    flex: 1,
    backgroundColor: '#caaffe'
  },
  image: {
    height: 250,
    width: 250,
    margin: 10,
    marginTop: 40,
    borderRadius: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image_animation_reading: {
    height: 70,
    width: 70,
    margin: 4,
    marginTop: 5,
    marginRight: 'auto',
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center'

  }
  ,
  description: {
    textAlign: 'center',
    margin: 15,
    fontSize: 20,
    color: 'white'
  },
  title: {
    textAlign: 'left',
    margin: 10,
    marginBottom: 5,
    color: 'black',
    fontWeight: '700'
  },
  title_description: {
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
    fontWeight: '500'
  },
  title_auteur: {
    textAlign: 'left',
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 10,
    color: '#ababab',
    fontWeight: '700',
    fontSize: 20
  },
  shadow: {
    shadowColor: '#caaffe',
    shadowOffset: {width: 5, height: 6},
    shadowRadius: 1,
    shadowOpacity: 0.5,
    marginTop: -30
  },
  shadow_title: {
    shadowColor: '#EDDFFE',
    shadowOffset: {width: 6, height: 4},
    shadowOpacity: 1
  }


})


export default StoryDetail