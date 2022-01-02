import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import Keranjang from '../../Assets/icons/cart.png'

const Position = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>Poistion</Text>
            <View style={styles.pembungkus}>
                <Image source={Keranjang}  style={styles.gambar}/>
                <Text style={styles.jumlah}>10</Text>
            </View>
        </View>
    )
}

export default Position

const styles = StyleSheet.create({
  container :{
      width:400,
      height:600,
      padding:20,
      margin:10,
      borderWidth:2,
      backgroundColor:'#54D157'
  },
  tittle :{
      marginBottom:20,
      fontSize:24,
      textAlign:'center'
  },
  gambar:{
      width:50,
      height:50,
      backgroundColor:'#54D157'
  },
  pembungkus :{
   flexDirection:'row',
   borderWidth:2,
   borderRadius:50,
   width:100,
   height:100,
   justifyContent:'center',
   alignItems:'center',
   position:'relative'
  },
  jumlah:{
      fontSize:25,
      fontWeight:'bold',
      position:'absolute',
      top:0,
      right:0,
      borderRadius:50,
      borderWidth:2,
      color:'#C22C4E'
  }
})
