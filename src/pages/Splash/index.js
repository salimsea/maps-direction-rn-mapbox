import React, {useState, useEffect} from 'react'
import { Image, View, TouchableOpacity, StatusBar, StyleSheet, ScrollView,Dimensions } from 'react-native';
import { IMGLogo } from '../../assets/images';
const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainApp');
        }, 3000);
    }, [])
    return (
        <>
            <StatusBar translucent barStyle="light-content" backgroundColor="transparent"  />
            <View style={styles.android_safearea}>
                <View style={{width: 300, height: 300}}>
                    <Image source={IMGLogo} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}} />
                </View>
            </View>
        </>
    )
}

export default Splash

const styles = StyleSheet.create({
    android_safearea: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems:'center'
    },
})
