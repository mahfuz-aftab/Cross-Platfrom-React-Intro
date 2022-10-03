import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const WelcomePage = () =>{
    return (
        <View style = {{...styles.wrapper, ...styles.textStyle}}>
            <Text>This is Welcome Page. Add Page Text.</Text>
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
        marginLeft: 10,
        color: '#00796B',
        textAlign: 'center'
    }


});

