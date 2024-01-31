import { Alert, StyleSheet, Text, View, Image } from 'react-native'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Trangchu from './screens/Trangchu';
import Gioithieu from './screens/Gioithieu';
import CustomDrawer from './component/CustomDrawer';
import Login from './screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import AddProduct from './screens/AddProduct';
import Welcom from './screens/Welcom';



const App = () => {
  const DrawerDEMO = createDrawerNavigator();
  const Stack = createStackNavigator();

  const MyDrawer = () => {
    return (
      <DrawerDEMO.Navigator initialRouteName="Home"
        drawerContent={props => <CustomDrawer {...props} />}
      >
        <DrawerDEMO.Screen name="Home" component={Trangchu} />
        <DrawerDEMO.Screen name="Giới thiệu" component={Gioithieu} />
      </DrawerDEMO.Navigator>
    );
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcom' screenOptions={{headerShown:false}}>
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='drawer' component={MyDrawer} />
        <Stack.Screen name='add' component={AddProduct}/>
        <Stack.Screen name='welcom' component={Welcom}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App