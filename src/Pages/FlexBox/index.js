import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const FlexBox = () => {
const [subs,setSubs] = useState(600);

useEffect(()=>{
    console.info('====> Di Mountt')
    setTimeout(()=>{
        setSubs(4000)
    },2000);
    return()=>{
        console.info('Component Di Update')
    };
},[subs])


    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>Flex Box</Text>
            <View style={styles.pembungkus}>
               <View style={styles.desc}/>
               <View style={styles.desc}/>
               <View style={styles.desc}/>
            </View>
            <View style={styles.facebook}>
                <Image source={{uri:'https://i.pravatar.cc/100'}} style={styles.photoProfile}/>
                <View style={styles.biodata}>
                    <Text style={styles.biodataNama}>Sabda Setiawan</Text>
                    <Text style={styles.biodataSubs}>{subs}</Text>
                </View>
            </View>
        </View>
    )
}

export default FlexBox

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
        textAlign:'center'
    },

    desc : {
        flex:3,
        height:50,
        backgroundColor:'#E9705A',
        margin:10
    },
    pembungkus:{
        flexDirection:'row',
       
    },
    facebook:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    photoProfile:{
        width:100,
        height:100,
        borderRadius:50
    },
    biodata:{
        marginLeft:10
    },
    biodataNama:{
        fontWeight:'bold',
        fontSize:20,
    },
    biodataSubs:{
        fontWeight:'bold',
        fontSize:18,
    }
})
