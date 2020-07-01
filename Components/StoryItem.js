import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';


class StoryItem extends React.Component{

    render(){
        const {story, displayDetailForStory} = this.props
        console.log(this.props)

        return(

        <TouchableOpacity
            onPress={()=>displayDetailForStory(story)}>

            <View style={styles.main_Container}>
                <Image
                    source={require('../assets/histoire_sorcière.jpg')}
                    style={styles.image}/>

                <View style={styles.content_container}> 
                    <View style={ styles.header_container}>
                        <Text style={styles.title}> {story.title} </Text>
                            <View style={{marginTop: 15, marginRight: 10 }}>
                                <Icon color='#7158B6' size={20} name='heart' ></Icon>
                            </View>
                    </View>

                    <View style={ styles.description_container}>
                        <Text style= {styles.description_text}>{story.description} </Text>
                    </View>

                </View>

            </View>
        </TouchableOpacity>  
        )
    }
}

const styles = StyleSheet.create({

    main_Container: {
        height: 100,
        flexDirection : 'row',
        marginRight: 16,
        marginLeft: 16,
        borderWidth: 0,
        margin : 10,
        borderRadius: 12,
        paddingBottom : 0,
        backgroundColor : 'white'
    },
    image: {
        width: 90,
        height: 90,
        margin: 5,
        backgroundColor: 'gray',
        borderRadius: 25,
        borderColor : 'black',
        borderWidth : 0.5
    },
    content_container:{
        flex: 1,
        margin: 4,
        marginBottom: 10
    },
    header_container : {
        flex :3,
        flexDirection : 'row'
    },
    title : {
        fontWeight: '600',
        fontSize :25,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 0,
        color : 'black',
        marginTop: 12
    },
    description_container : {
        flex : 3
    },
    description_text : {
        color: '#ababab',
        marginTop : 1,
        fontSize : 15
    }


})

export default StoryItem