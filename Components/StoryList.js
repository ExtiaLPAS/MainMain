import React from 'react';
import {Text, View,Image,FlatList} from 'react-native';
import stories from '../Utils/Stories'

class StoryList extends React.Component {
    render() {
        return(
            <FlatList
                data={stories}
                keyExtractor={(item) => item.title}
                renderItem={({item}) => 
                <View style={styles.card}>
                <View style={styles.storyItem}>
                    <Image source={require('../assets/main-main_full.png')} style={styles.image}></Image>
                    <View style={styles.description}>
                    <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.abstract}>{item.description}</Text>
                    </View>
                </View>
            </View>
            }/>
            
        )
    }
}

const styles = {
    card: {
        flexDirection: 'column',
        borderStyle: 'solid',
        borderColor: 'gray',
        borderWidth: 'thin',
        margin: 5
    },
    storyItem: {
        flexDirection: 'row',
    },
    image: {
        flex : 2 ,
        width: 80,
        height: 80,
        borderRightStyle: 'solid',
        borderWidth: 1,
        borderColor: 'gray'
    },
    description: {
        flex: 3,
        flexDirection: 'column'
    },
    title : {
        flex: 1,
        alignContent: 'center',
        fontWeight: 'bold'
    },
    abstract : {
        flex: 4
    }
}

export default StoryList;