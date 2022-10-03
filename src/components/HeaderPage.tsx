import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HeaderPage = () =>{
    return (
        <View style = {{...styles.wrapper, ...styles.textStyle}}>
            <Text>This is Header</Text>
        </View>
    )
}

export default HeaderPage;

const styles = StyleSheet.create({

    wrapper: {
        backgroundColor: '#000',
        padding: 10,
        paddingTop: 30,

    },

    textStyle: {
        marginTop: 20,
        color: 'FFF',
        textAlign: 'center',
    }


});

