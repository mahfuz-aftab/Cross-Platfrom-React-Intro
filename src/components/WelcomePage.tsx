import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const WelcomePage = () =>{
    return (
        <View style = {styles.wrapper}>
            <Text style = {styles.textStyle}>This is Welcome Page. Add Page Text.</Text>
        </View>
    )
}

export default WelcomePage;

const styles = StyleSheet.create({

    wrapper: {
        backgroundColor: '#F1F1F1',
        padding: 10,

    },

    textStyle: {
        color: '#00796B',
        textAlign: 'center'
    }


});

