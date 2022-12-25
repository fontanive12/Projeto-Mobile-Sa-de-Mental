import React, { useContext, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Alert, Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import base64 from 'base-64';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import LoginScreen from "react-native-login-screen";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AppContext } from '../contexts/AppContext';
import config from '../config/config';
import { login as loginApi } from '../api/api';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: true,
    }),
});


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
                try {
                    const AUTH_TOKEN = `Basic ${base64.encode(`${user}:${pass}`)}`

                    loginApi(AUTH_TOKEN)

                    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
                    saveUser(user, pass)

                    navigation.reset({
                        index: 0,
                        routes: [{ name: "ViewMenu" }]
                    })
                } catch (error) {
                    console.log({ error })
                    Alert.alert('Erro', error.message)
                } finally { //sempre vai executar
                    setLoading(false)

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
                        logoImageSource={require('../assets/meditation(2).png')}
                        logoImageStyle={{ width: 110, height: 110, tintColor: 'white' }}
                        style={{ backgroundColor: '#68baab', justifyContent: 'center', width: '100%' }}
                        onLoginPress={() => login(usuario.username, usuario.password)}
                        onSignupPress={() => { }}
                        onEmailChange={(email) => { usuario.username = email }}
                        signupText={'Criar conta'}
                        signupTextStyle={{ color: '#fff' }}
                        onPasswordChange={(password) => { usuario.password = password }}
                        disableSocialButtons={(true)}
                        loginButtonStyle={{ backgroundColor: '#078a85' }}
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
        height: 800,
        width: '100%',
    }
})