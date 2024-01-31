import { View, Text, Image, TouchableOpacity,FlatList,StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Trangchu = () => {
  const navigation = useNavigation();

  type ContactType = {
    name: string,
    quantity: string,
    photo: string,
  }
  const DATA =
    [
      { name: 'Áo len', quantity: '10', photo: require('../imgs/avatar.png') },
      { name: 'Quần bò', quantity: '5',  photo: require('../imgs/avatar.png') },
      { name: 'Áo thu đông', quantity: '8', photo: require('../imgs/avatar.png') },
      { name: 'Quần vải', quantity: '6', photo: require('../imgs/avatar.png') },
      { name: 'Áo khoác', quantity: '12',  photo: require('../imgs/avatar.png') },      
    ]

  const ContactItem = ({ contact }: { contact: ContactType }) => {
    return (
      <View style={{marginTop:10}}>
        <View style={styles.listItem}>
          <Image source={contact.photo} style={styles.avatar} />
          <View style={styles.bodyItem}>
            <Text style={styles.nameText}>{contact.name}</Text>
            <Text>Số lượng: {contact.quantity}</Text>
          </View>
          <TouchableOpacity style={styles.btnCall} onPress={()=> navigation.navigate("add")}>
            <Text style={styles.callText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <ContactItem contact={item} />}
        keyExtractor={item => item.quantity}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop:10
  },
  avatar: {
    borderRadius: 50,
    width: 50,
    height: 50
  },
  listItem: {
    backgroundColor: 'white',
    flexDirection:'row',
    alignItems:'center', 
    justifyContent:'space-between',
    paddingVertical:10,
    paddingHorizontal:12
  },
  bodyItem: {

  },
  nameText: {
    fontWeight: 'bold'
  },
  btnCall: {

  },
  callText: {
    color: '#5BC945'
  }
})


export default Trangchu