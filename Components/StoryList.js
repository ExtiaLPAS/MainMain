import React from 'react';
import {Text, View,Image,FlatList, Dimensions} from 'react-native';
import stories from '../Utils/Stories'
import StoryItem from './StoryItem'
import Carousel,{Pagination } from 'react-native-snap-carousel';

const { width: screenWidth }= Dimensions.get('window')


class StoryList extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            activeIndex:0,
            carouselItems: [
                {
                    title:"Item 1",
                    text: "Text 1",
                },
                {
                    title:"Item 2",
                    text: "Text 2",
                },
                {
                    title:"Item 3",
                    text: "Text 3",
                },
                {
                    title:"Item 4",
                    text: "Text 4",
                },
                {
                    title:"Item 5",
                    text: "Text 5",
                },
              ]
        }
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={{
                backgroundColor:'white',
                borderRadius: 0,
                height: screenWidth - 190,
                width:screenWidth - 200,
                padding: 0,
                marginLeft: 0,
                marginRight: 0, }}>
             
              <Image style={styles.image} source={require('../assets/histoire_sorcière.jpg')} ></Image>
              {/* <Text style={{fontSize: 30}}>{item.title}</Text>
              <Text>{item.description}</Text> */}
            </View>
        );
    }

    get pagination () {
        const { entries, activeIndex } = this.state;
        return (
            <Pagination
              dotsLength={5}
              activeDotIndex={activeIndex}
              containerStyle={{ backgroundColor: 'white', marginBottom: -20, marginTop: 0 }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'purple'
              }}
              inactiveDotStyle={{
                  backgroundColor : 'red'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }

    _displayDetailForStory = (story) => {

        console.log("Display story " + story)
        this.props.navigation.navigate('StoryDetail', { item: story })
    }

    render() {
        return(
        <View style={{ backgroundColor : 'white' , marginBottom : 10, padding: 0, marginTop : 5}}>
        <View style={{justifyContent:'center', marginTop : 10, marginLeft : 0}}>   
            <Carousel
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        renderItem={this._renderItem}
                        sliderWidth={screenWidth}
                        sliderHeight={screenWidth - 60 }
                        itemWidth={screenWidth - 80}
                        onSnapToItem = { index => this.setState({activeIndex:index}) }
                        useScrollView={true}  
                        /> 
                        {this.pagination}
        </View>  

        <View>   
            <Text style={{ fontSize :35, justifyContent: 'center',  fontWeight : '700', marginLeft : 20, marginBottom : 10, marginTop: 0 }}>Vos histoires </Text>
        </View>             
       


            <FlatList
            ItemSeparatorComponent={({item}) =>
                    <View style={{backgroundColor: 'gray', height: 0, marginLeft: 8,marginRight: 8,padding:0}}/> 
                }
                data={stories}
                keyExtractor={(item) => item.title}
                renderItem={ ({item}) => <StoryItem  story={item}
                displayDetailForStory = {this._displayDetailForStory}


                />}/> 
        </View>         
            
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
        flex : 1 ,
        width: 300,
        height: 250,
        //borderRightStyle: 'solid',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius : 20,
        justifyContent : 'center'
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
    },
    text : {
        fontSize : 20
    }
}

export default StoryList;