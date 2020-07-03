import React from 'react'
import {StyleSheet, ScrollView, View, Image, TextInput, Text} from 'react-native';
import {connect} from "react-redux";

class ProfilPage extends React.Component {
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

            <View style={styles.inputView}>
              <Text style={styles.inputLabel}> Nom </Text>
              <TextInput
                style={styles.inputText}
                onChangeText={(value) => this.props.dispatch({ type: 'SAVE_NOM', value })}
                defaultValue={this.props.nom}
              />
            </View>

            <View style={styles.inputView}>
              <Text style={styles.inputLabel}> Prénom </Text>
              <TextInput
                style={styles.inputText}
                onChangeText={(value) => this.props.dispatch({ type: 'SAVE_PRENOM', value })}
                defaultValue={this.props.prenom}
              />
            </View>

            <View style={styles.inputView}>
              <Text style={styles.inputLabel}> Nom de la peluche </Text>
              <TextInput
                style={styles.inputText}
                onChangeText={(value) => this.props.dispatch({ type: 'SAVE_PELUCHE', value })}
                defaultValue={this.props.peluche}
              />
            </View>

          </View>
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
  shadow: {
    shadowColor: '#caaffe',
    shadowOffset: {width: 5, height: 6},
    shadowRadius: 1,
    shadowOpacity: 0.5,
    marginTop: -30
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
  inputLabel: {
    textAlign: 'left',
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 10,
    color: '#ababab',
    fontWeight: '700',
    fontSize: 20,
    width: '45%'
  },
  inputView: {
    flexDirection: 'row',
    flex: 1,
    padding: 1,
    marginBottom: 10,
  },
  inputText: {
    borderColor: '#ababab',
    borderWidth: 1,
    width: '45%'
  }
})

const mapStateToProps = (state) => {
  return {
    nom: state.toggleProfile.nom,
    prenom: state.toggleProfile.prenom,
    peluche: state.toggleProfile.peluche,
  }
}

export default connect(mapStateToProps)(ProfilPage)