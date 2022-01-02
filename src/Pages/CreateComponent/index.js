import React, { Component } from 'react'
import { StyleSheet, Text, View ,Image, TextInput} from 'react-native'


const ComponetFunction =() =>{
  return (
    <View style={styles.Pembungkus}>
      <Text>Ini adalah component menggunakan Function</Text>
    </View>
  )
}

class ComponentClass extends Component{
  render(){
    return (
      <View>
        <Text>Ini adalah component menggunakan Class</Text>
      </View>
    )
  }
}



const CreateComponent = () => {
  return (
    <View>
      <ComponetFunction />
      <ComponentClass />
      <Image source={{uri:'https://i.pravatar.cc/100'}} style={styles.gambar} />
      <Text>Pratikum DPM</Text>
      <TextInput style={styles.text}></TextInput>
    </View>
  )
}

export default CreateComponent

const styles = StyleSheet.create({
  gambar:{
    width:100,
    height:100
  },
  text:{
    borderWidth:1,
    borderRadius:10
  },
  Pembungkus :{
    width:100,
    height:100,
    backgroundColor:'red'
  }

})
