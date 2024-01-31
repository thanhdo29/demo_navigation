import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Gioithieu = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20,color:'black'}}>Thông tin cá nhân</Text>
      <Text style={styles.text}>Họ tên: Đỗ Tuấn Thành</Text>
      <Text style={styles.text}>Quê quán: Thái Bình</Text>
      <Text style={styles.text}>Ngày sinh: 29/03/2004</Text>
      <Text style={styles.text}>Chuyên ngành: Lập trình mobile</Text>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal:12,
    marginTop:10
  },
  text:{
    color:'black',
    fontSize:15
  }
})

export default Gioithieu