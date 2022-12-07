import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import base64 from 'base-64'

import * as SecureStore from 'expo-secure-store';
import LoginScreen from "react-native-login-screen";
import { AppContext } from '../contexts/AppContext';


export const ViewLogin = ({ navigation }) => {

    const fieldUser = "myapp_usuario";
    const fieldPassword = "myapp_senha";
    const [loading, setLoading] = useState(false);

    const { username, password, saveUser } = useContext(AppContext)

    const usuario = {
        username: '',
        password: '',
        saveUser: false
    }
    
    console.log(fieldUser)

    useEffect(() => {
        async function getSecureStore() {
            const _username = await SecureStore.getItemAsync(fieldUser);
            const _password = await SecureStore.getItemAsync(fieldPassword);
            if (_username && _password) {
                login(_username, _password)
            }
            console.log(`usuario -> ${_username}`)
        }
        getSecureStore();
    }, [])//primeira renderização do componente

    function login(user: string, pass: string) {
        setLoading(true)

        setTimeout(() => {

            async function testLogin() {
                const res = await fetch('http://177.44.248.42:3000/auth', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Basic ' +
                            base64.encode(user + ":" + pass)
                    }
                });
                const json = await res.json()
                setLoading(false)


                if (json.id) {
                    saveUser(user, pass)

                    navigation.reset({
                        index: 0,
                        routes: [{ name: "ViewMenu" }]
                    })

                } else {
                    Alert.alert('Erro', json.message)
                }
            }
            testLogin();
        }, 900)
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >

                <View style={styles.container}>
                    <LoginScreen
                        logoImageSource={require('../../assets/UserLogin.png')}
                        style={{ backgroundColor: '#444', height: 900, marginTop: 150 }}
                        onLoginPress={() => login(usuario.username, usuario.password)}
                        onSignupPress={() => { }}
                        onEmailChange={(email) => { usuario.username = email }}
                        onPasswordChange={(password) => { usuario.password = password }}
                        disableSocialButtons={(true)}
                    />
                </View >
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#444',
        
    }
})