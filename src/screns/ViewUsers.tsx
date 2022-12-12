import React, { useContext, useEffect, useState, useRef } from 'react';
import {
    Alert,
    Dimensions,
    FlatList,
    KeyboardAvoidingView,
    Modal,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
const base64 = require('base-64');
import * as SecureStore from 'expo-secure-store';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { theme } from '../components/styles/DefaultTheme';
import { AppContext } from '../contexts/AppContext';
import { FontAwesome5 } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import { CustomButtonSmall } from '../components/CustomButtonSmall';
import { Modalize } from 'react-native-modalize';
import { CustomButton } from '../components/CustomButton';
import {ItemUser} from '../components/ItemUser';
import axios from 'axios';
import ItemGenre from '../components/ItemGenre';

const { width, height } = Dimensions.get('window');

export const ViewUsers = ({ navigation }) => {

    const initialUser = {
        id: 0,
        name: "",
        genre: "",
        age: 0,
        phoneNumber: "",
        email: "",
        password: ""
    }

    const fieldUser = "myapp_usuario";
    const fieldPassword = "myapp_senha";
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(initialUser);

    const { username, password } = useContext(AppContext);

    // const _username = useRef(user.id === 0 ? '' : user.name);

    const modalRef = useRef(null);

    /*
        Busca os usuários da API (através do listUsers)
        na criação do componente ViewProfessional
    */
    useEffect(() => {
        listUsers();
        return () => {
            modalRef.current = null //limpar as referencias
        }
    }, [])

    function onOpenModal() {
        modalRef.current?.open();
    }

    function alterUser(user: any) {
        onOpenModal()
        setUser(user)
    }

    function newUser() {
        onOpenModal()
        setUser(initialUser)
    }


    async function saveUser() {
        try {
            if (user.age <= 0) {
                Alert.alert('Informe a idade');
                return;
            }

            const payload = {
                name: user.name,
                genre: user.genre,
                age: user.age,
                phoneNumber: user.phoneNumber,
                email: user.email,
                password: user.password,
            }
            console.log('payload - ', payload)
            let response: any = null

            if (user.id > 0) {
                //alteraração
                response = await axios.put(`/users/${user.id}`, payload);
            } else {
                //inclusão
                response = await axios.post(`/users`, payload);
            }

            // const response = await axios({
            //     method: user.id > 0 ? 'put' : 'post',
            //     url: user.id > 0 ? `/users/${user.id}` : `/users`,
            //     data: payload

            modalRef.current?.close();

            listUsers();

        } catch (error) {
            console.log('error - ', error)
            Alert.alert('Opsss', error.message);
        }
    }

    async function listUsers() {
        try {
            setLoading(true);

            // console.log('CREDENTIALS=>', _username, _password);
            const response = await axios.get('/users');
            //console.log(response)
            // const options = {
            //     headers: {
            //         'Authorization': 'Basic ' +
            //             base64.encode(username + ":" + password)
            //     }
            // }

            if (response.status == 200) {
                const json = response.data;
                setUsers(json);
            } else {
                // Alert.alert('Ops, deu ruim 😥', json.message);
            }

            setLoading(false);
        } catch (error) {
            console.log({ error })
        }

    }


    const deleteUser = async (id: number) => { //para excluir o id, o filter vai filtar o id inexistente e excluir
      try {
        // setLoading(true);

       Alert.alert(
                'Atenção', 'Deseja mesmo excluir o usuário?', [
                {
            
                    text: "Sim",
                    onPress: async () => {const response = await axios.delete(`/users/${id}`);
                    modalRef.current?.close();
                    listUsers()
                }
            },
            {
                text: "Não",
                onPress: () => {
                    modalRef.current?.close();
                    listUsers()
                }
            }
        ]
        )
      } catch (error) {
                console.log(error)
       }
    }

    return (
        <SafeAreaView style={theme.safeArea}>
            <View style={theme.container}>

                <Text style={theme.title}>Usuários</Text>
                <FlatList
                    style={{padding: 2}}
                    data={users}
                    onRefresh={() => listUsers()}
                    refreshing={loading}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ItemUser item={item} alterUser={() => alterUser(item)} />
                    )}
                />

                <CustomButtonSmall
                    color="#078a85"
                    onPress={() => newUser()}
                />

                <Modalize
                    ref={modalRef}
                    snapPoint={800}
                    modalHeight={height * 0.8}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={{ flex: 1 }}>
                        <View style={styles.modal}>
                            <Text style={[theme.label, {
                                textAlign: 'center'
                            }]}>{user.id > 0 ? "Alterar Usuário" : "Novo Usuário"}</Text>

                            <Text style={theme.label}>Nome</Text>
                            <TextInput
                                keyboardType='default'
                                autoCapitalize='words'
                                value={user.name}
                                // ref={_username}
                                onChangeText={(name) => { setUser({ ...user, name: name }) }}
                                style={styles.modalInput}
                                placeholder="Nome" />


                            <Text style={theme.label}>Telefone</Text>
                            <TextInput
                                keyboardType='default'
                                autoCapitalize='words'
                                value={user.phoneNumber}
                                onChangeText={(phoneNumber) => { setUser({ ...user, phoneNumber: phoneNumber }) }}
                                style={styles.modalInput}
                                placeholder="Telefone" />


                            <Text style={theme.label}>E-mail</Text>
                            <TextInput
                                keyboardType='email-address'
                                autoCapitalize='words'
                                value={user.email}
                                onChangeText={(email) => { setUser({ ...user, email: email }) }}
                                style={styles.modalInput}
                                placeholder="E-mail" />

                            <Text style={theme.label}>Senha</Text>
                            <TextInput
                                secureTextEntry={true}
                                autoCapitalize='none'
                                value={user.password}
                                onChangeText={(password) => { setUser({ ...user, password: password }) }}
                                style={styles.modalInput}
                                placeholder="Senha" />

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={theme.label}>Idade</Text>
                                    <TextInput
                                        keyboardType='numeric'
                                        value={user.age > 0 ? user.age.toString() : '0'}
                                        onChangeText={(age) => { setUser({ ...user, age: age != '' ? Number(age) : 0 }) }} style={[styles.modalInput, { width: '40%' }]}
                                        placeholder="Idade" />
                                </View>

                                <View style={{ flex: 1 }}>
                                    <Text style={theme.label}>Gênero</Text>
                                    <ScrollView horizontal={true}>
                                        <ItemGenre
                                            setUser={setUser}
                                            user={user}
                                            icon="female"
                                            genre="F" />
                                        <ItemGenre
                                            setUser={setUser}
                                            user={user}
                                            icon="male"
                                            genre="M" />
                                    </ScrollView>
                                </View>
                            </View>

                            <View
                                style={styles.bottomLine}>
                                <CustomButton
                                    label="Salvar"
                                    onPress={(saveUser)}/>

                                <TouchableOpacity
                                    onPress={() => deleteUser(user.id)}>
                                        <Ionicons name="trash-outline" size={38} color="#078a85" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </Modalize>


            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        padding: 12,
    },
    modalInput: {
        borderWidth: 1,
        borderColor: '#555',
        height: 42,
        borderRadius: 8,
        width: '100%',
        marginBottom: 16,
        paddingLeft: 8,
    },
    bottomLine: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: 16,
        marginTop: 20,
    }
});