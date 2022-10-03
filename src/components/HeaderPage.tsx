import React from 'react';
import { Text, View, StyleSheet, Platform, SafeAreaView } from 'react-native';

const HeaderPage = () =>{
    return (
        <SafeAreaView style = {styles.wrapper}>
              <Text style = {styles.textStyle}>This is Header.</Text>
        </SafeAreaView>
    )
}

export default HeaderPage;

const styles = StyleSheet.create({

    wrapper: {
        backgroundColor: '#000000',
        padding: 10,
        paddingTop: Platform.OS == 'android' ? 30 : 20,

    },

    textStyle: {
        color: '#FFFFFF',
        textAlign: 'center'
    }

});

