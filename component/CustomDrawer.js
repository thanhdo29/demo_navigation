import { View, Text, Image, StyleSheet, StatusBar, Pressable } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = (props) => {
    const navigation=useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#48B2EF'}/>
            <DrawerContentScrollView {...props} >
                <View style={styles.header}>
                    <Image style={styles.img} source={require('../imgs/logo.jpg')}/>
                    <Text style={{fontSize:17, marginTop:10}}>Họ tên sv: Đỗ Tuấn Thành</Text>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <Pressable style={{marginBottom:50}} onPress={()=> navigation.navigate('login')}>
                <Text>Log out</Text>
            </Pressable>
        </View>
    )
}
const styles=StyleSheet.create({
    header:{
        backgroundColor:'#48B2EF',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:12
    },
    img:{
        borderRadius:8,
        width:100, 
        height:80
    }
})

export default CustomDrawer