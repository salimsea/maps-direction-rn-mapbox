import React from 'react'
import {
    View,
    Image,
    StyleSheet, 
    Text, 
    TouchableOpacity, 
} from 'react-native'
import {
    ICMapsActive,
    ICMapsInactive,
    ICInfoActive,
    ICInfoInactive
} from '../../../assets/images'

const TabItem = ({ title, active, onPress, onLongPress }) => {
    const Icon = () => {
        if (title === 'Home') {
            return active ? 
                <View style={{width: 20, height: 20}}>
                    <Image source={ICMapsActive} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
                </View>
                :
                <View style={{width: 20, height: 20}}>
                    <Image source={ICMapsInactive} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
                </View>
        }
        if (title === 'Info') {
            return active ? 
                <View style={{width: 20, height: 20}}>
                    <Image source={ICInfoActive} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
                </View>
                :
                <View style={{width: 20, height: 20}}>
                    <Image source={ICInfoInactive} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
                </View>
        }
        return  <View style={{width: 20, height: 20}}>
                    <Image source={ICMapsActive} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}} />
                </View>;
    }
    
    return (
        
        <>
            <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
                <Icon />
                <Text style={styles.text(active)}>{title}</Text>
            </TouchableOpacity>
        </>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        width: '50%',
        alignItems: 'center',
    },
    text: (active) => ({
        fontSize : 11,
        color: active ? '#000' : '#999',
        fontFamily:'Roboto',
        fontWeight: '800',
        marginTop: 2
    }),
})
