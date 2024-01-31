import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React from 'react'

const AddProduct = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'black', fontSize:25, marginBottom:20}}>THÊM SẢN PHẨM</Text>
      <TextInput style={styles.input} placeholder='Tên sản phẩm'/>
      <TextInput style={styles.input} placeholder='Số lượng'/>
      <Pressable style={styles.btn}>
        <Text>Thêm</Text>
      </Pressable>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    marginHorizontal:30,
    justifyContent:'center'
  },
  input: {
    borderRadius: 3,
    borderWidth: 2,
    borderColor: 'black',
    paddingLeft: 10,
    marginBottom: 16,
    width: '100%',
  
},
btn: {
    backgroundColor: '#48B2EF',
    alignItems: 'center',
    width: 100,
    paddingVertical: 8,
    borderRadius:7,
},
})

export default AddProduct