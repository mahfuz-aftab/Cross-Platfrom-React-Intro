import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HeaderPage = () =>{
    return (
        <View style = {styles.wrapper}>
              <Text style = {styles.textStyle}>This is Header.</Text>
        </View>
    )
}

export default HeaderPage;

const styles = StyleSheet.create({

    wrapper: {
        backgroundColor: '#000000',
        padding: 10,
        paddingTop: 30,

    },

    textStyle: {
        color: '#FFFFFF',
        textAlign: 'center'
    }

});

