import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function FlashlightScreen() {
    return (
        <View style={styles.container}  >
            <View style={{
                flex: 1, justifyContent: "flex-end", alignItems: "center"
            }}>
                <Image
                    style={{
                        width: 200,
                        height: 200,
                        resizeMode: 'contain',
                    }}
                    source={require('../assets/mm_on_tr.png')}
                ></Image>
            </View>

            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                <Button
                    style={{ backgroundColor: '#000000' }}
                    onPress={() => console.log('Simple Button pressed')}
                    icon={
                        <Icon
                            name="flash"
                            size={15}
                            color="white"
                        />
                    }

                />
            </View>
        </View >
    );
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fafafa'
        }
    });