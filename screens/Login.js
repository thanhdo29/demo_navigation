import { View, Text, TextInput, StyleSheet, Pressable, Modal, StatusBar, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';


const Login = () => {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const navigation = useNavigation();
    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);

    const login = () => {
        if (user.length == 0 || pass.length == 0) {
            setModal1(true);
            return;
        }
        // if (user == 'admin' && pass == 'admin') {
        //     navigation.navigate('drawer')
        //     setModal(false)
        // } else {
        //     setModal(true);

        // }

        let url_login = "http://192.168.54.22:3000/users?username=" + user;
        fetch(url_login)
            .then((res) => { return res.json() })
            .then(async (reslogin) => {
                if (reslogin.length != 1) {
                    Alert.alert('Sai username hoặc lỗi trùng lặp dữ liệu');
                    return;
                } else {
                    let objU = reslogin[0];
                    if (objU.password != pass) {
                        Alert.alert('Sai password');
                    } else {
                        navigation.navigate('drawer')
                    }
                }
            })
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#48B2EF'} />
            <TextInput style={styles.input} placeholder='Username' onChangeText={(text) => setUser(text)} />
            <TextInput style={styles.input} placeholder='Pass' textContentType='password' secureTextEntry={true} onChangeText={(text) => setPass(text)} />
            <Pressable style={styles.btn} onPress={() => login()}>
                <Text style={{ fontSize: 18 }}>Login</Text>
            </Pressable>
            <Modal animationType="fade"
                transparent={true}
                visible={modal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <Text style={{ fontSize: 16 }}>Tài khoản hoặc mật khẩu sai. Vui lòng nhập lại</Text>
                        <Pressable style={styles.btn_dong} onPress={() => setModal(false)}>
                            <Text style={{ color: 'white' }}>Đóng</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Modal animationType="fade"
                transparent={true}
                visible={modal1}>
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <Text style={{ fontSize: 16 }}>Vui lòng nhập đủ thông tin!</Text>
                        <Pressable style={styles.btn_dong} onPress={() => setModal1(false)}>
                            <Text style={{ color: 'white' }}>Đóng</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 25,
        alignItems: 'center'
    },
    input: {
        borderRadius: 3,
        borderWidth: 2,
        borderColor: 'black',
        paddingLeft: 10,
        marginBottom: 16,
        width: '100%'
    },
    btn: {
        backgroundColor: '#48B2EF',
        alignItems: 'center',
        width: 100,
        paddingVertical: 8,
    },
    modal: {
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 7,
        paddingHorizontal: 10,
        width: '100%',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_dong: {
        backgroundColor: '#48B2EF',
        borderRadius: 5,
        paddingVertical: 6,
        marginTop: 10,
        paddingHorizontal: 40
    }
})

export default Login