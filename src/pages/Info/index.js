import React, {useState, useEffect} from 'react'
import { Image, View, SafeAreaView, StatusBar, StyleSheet, Text,Dimensions } from 'react-native';
import { IMGLogo } from '../../assets/images';
const Info = ({navigation}) => {
    
    return (
        <>
            <SafeAreaView style={{flex:1}}>
                <View style={{ flex: 1, backgroundColor: '#000', justifyContent:'center', alignItems:'center' }}>
                    <View style={{width: 100, height: 100}}>
                        <Image source={IMGLogo} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}} />
                    </View>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#FFF' }}>MAPS Direction © 2021</Text>
                            <View style={{height:20}}/>
                    
                    <Text style={{ fontSize: 13, fontWeight:'600', color: '#FFF' }}>MADE WITH</Text>
                    <Text style={{ fontSize: 14, fontWeight:'600', color: '#FFF' }}>SWGxSALIMSEA</Text>
                   
                </View>
                
            </SafeAreaView>
        </>
    )
}

export default Info

const styles = StyleSheet.create({
    android_safearea: {
        flex: 1,
        backgroundColor: '#000',
    },
})
