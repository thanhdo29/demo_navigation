import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const Welcom = () => {
  const navigation = useNavigation();

  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('login')
    },3000)
  },[])
  return (
    <View style={{ flex: 1 , justifyContent:'center', alignItems:'center'}}>
      <Image style={styles.img} source={require('../imgs/logo.jpg')} />
      <View style={{marginTop:15}}>
      <Text style={styles.text}>Họ tên: Đỗ Tuấn Thành</Text>
      <Text style={styles.text}>Mã SV: PH34899</Text>
      <Text style={styles.text}>Lớp: MD18306</Text>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  img:{
    width:170,
    height:120
  },
  text:{
    fontSize:17,
  }
})

export default Welcom