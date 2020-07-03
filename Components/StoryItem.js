import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import {TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux'

class StoryItem extends React.Component {

  _toggleFavorite(){
    const action = { type: "TOGGLE_FAVORITE", value: this.props.story }
    this.props.dispatch(action)
  }

  render() {
    const {story, displayDetailForStory} = this.props

    return (
      <>
          <View style={styles.main_Container}>
            <TouchableWithoutFeedback  onPress={() => displayDetailForStory(story)}>
              <Image
                source={require('../assets/histoire_sorcière.jpg')}
                style={styles.image}
              />
            </TouchableWithoutFeedback >

            <View style={styles.content_container}>
              <View style={styles.header_container}>
                  <Text style={styles.title} onPress={() => displayDetailForStory(story)}> {story.title} </Text>
                <View style={styles.fav}>
                  <Icon
                    color='#7158B6'
                    size={20}
                    name={this.props.favoritesStories && this.props.favoritesStories.findIndex(item => item.title === story.title) !== -1 ? 'heart' : 'hearto'}
                    onPress={() => this._toggleFavorite()}
                  />
                </View>
              </View>

              <View>
                <TouchableWithoutFeedback  onPress={() => displayDetailForStory(story)}>
                  <Text style={styles.description_text}>{story.description} </Text>
                </TouchableWithoutFeedback >
              </View>

            </View>

          </View>
      </>
    )
  }
}

const styles = StyleSheet.create({

  main_Container: {
    height: 100,
    flexDirection: 'row',
    marginRight: 16,
    marginLeft: 16,
    borderWidth: 0,
    margin: 10,
    borderRadius: 12,
    paddingBottom: 0,
    backgroundColor: 'white'
  },
  image: {
    width: 90,
    height: 90,
    margin: 5,
    backgroundColor: 'gray',
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 0.5
  },
  content_container: {
    flex: 1,
    margin: 4
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title: {
    fontWeight: '600',
    fontSize: 25,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 0,
    color: 'black'
  },
  description_text: {
    color: '#ababab',
    marginTop: 1,
    fontSize: 15
  },
  fav: {
    width: '10%'
  }
})

const mapStateToProps = (state) => {
  return {
    favoritesStories: state.toggleFavorite.favoritesStories
  }
}

export default connect(mapStateToProps)(StoryItem)