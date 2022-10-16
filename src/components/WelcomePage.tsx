import React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, ProgressBarAndroidComponent, Alert } from 'react-native';

function TouchableOpacityFunc(){
    console.log('Touchable Opacity Button');
    Alert.alert(
      "Alert Title", "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed")}
      ]
    );}

const WelcomePage = () => {
    const { wrapper, textStyle, textBtnStyle, iconStyle } = styles
    return (
        <View style={wrapper}>
            <Text style={textStyle}>Welcome on React Native Basic Components</Text>

            <Image
                source={{
                    width: 100,
                    height: 100,
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />


            <Text style={textBtnStyle} onPress={() => { console.log('Clicked') }}>
                Privacy Statement
            </Text>
            <Button title='Button' onPress={() => { console.log('Buttom Component') }}></Button>

            <TouchableOpacity onPress={TouchableOpacityFunc}>
                <Text>Custom Complex Button</Text>
                <Image style = {iconStyle} source={require('./../../assets/favicon.png')}/>
            </TouchableOpacity>
        </View>
    )
}

export default WelcomePage;

const styles = StyleSheet.create({

    wrapper: {
        flex: 1,
        backgroundColor: '#00796B',
        padding: 10,
        alignItems: 'center',

    },

    textStyle: {
        color: '#FFFFFF',
        textAlign: 'center',
        padding: 10,
    },

    textBtnStyle: {
        margin: 10,
        padding: 10,
        backgroundColor: '#5D4037',
        color: 'FFFFFF'

    },

    iconStyle: {
        width: 50,
        height: 50,
    }


});

