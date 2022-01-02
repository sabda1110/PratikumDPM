import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const StylingSimple = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>Styling Simple</Text>
            <View style={styles.desc}/>
            <View style={styles.desc}/>
        </View>
    )
}

export default StylingSimple

const styles = StyleSheet.create({
    container :{
        width:400,
        height:600,
        margin:10,
        padding:20,
        borderWidth:2,
        backgroundColor:'#9AD3CA'
        
    },

    tittle :{
        fontSize:20,
        textAlign:'center',
        color:'#8D23E0'
    }
})
