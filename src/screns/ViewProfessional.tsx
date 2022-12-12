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
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { theme } from '../components/styles/DefaultTheme';
import { AppContext } from '../contexts/AppContext';
import { CustomButtonSmall } from '../components/CustomButtonSmall';
import { Modalize } from 'react-native-modalize';
import { CustomButton } from '../components/CustomButton';
import axios from 'axios';
import ItemGenre from '../components/ItemGenre';
import { ItemProfessional } from '../components/ItemProfessional';
import { ViewExpertises, Expertise } from './ViewExpertises';

const { width, height } = Dimensions.get('window');

export const ViewProfessional = ({ navigation }) => {

    const initialProfessional = {
        id: 0,
        name: "",
        genre: "",
        phoneNumber: "",
        email: "",
        password: "",
        description: "",
        ExpertiseId: ViewExpertises,
        
    }   

    const [loading, setLoading] = useState(false);
    const [professionals, setProfessionals] = useState([]);
    const [professional, setProfesional] = useState(initialProfessional);

    const { username, password } = useContext(AppContext);

    const modalRef = useRef(null); 

    useEffect(() => {
        listProfessionals();
        return () => {
            modalRef.current = null //limpar as referencias
        }
    }, [])

    function onOpenModal() {
        modalRef.current?.open();
    }

    function alterProfessional(professional: any) {
        onOpenModal()
        setProfesional(professional)
    }

    function newProfessional() {
        onOpenModal()
        setProfesional(initialProfessional)
    }

    async function saveProfessional() {
        try {
            const payload = {
                name: professional.name,
                genre: professional.genre,
                phoneNumber: professional.phoneNumber,
                email: professional.email,
                password: professional.password,
                description: professional.description,
                ExpertiseId: professional.ExpertiseId
            }
            console.log('payload - ', payload)
            let response: any = null

            if (professional.id > 0) {
                //alteraração
                response = await axios.put(`/professionals/${professional.id}`, payload);
            } else {
                //inclusão
                response = await axios.post(`/professionals`, payload);
            }

            modalRef.current?.close();

            listProfessionals();

        } catch (error) {
            console.log('error - ', error)
            Alert.alert('Opsss', error.message);
        }
    }

    async function listProfessionals() {
        console.log('profissional', professional.ExpertiseId.name)
        try {
            setLoading(true);

            const response = await axios.get('/professionals');

            if (response.status == 200) {
                const json = response.data;
                setProfessionals(json);
            } else {
                // Alert.alert('Ops, deu ruim 😥', json.message);
            }

            setLoading(false);
        } catch (error) {
            console.log({ error })
        }
    }

    const deleteProfessional = async (id: number) => { //para excluir o id, o filter vai filtar o id inexistente e excluir
      try {
       Alert.alert(
                'Atenção', 'Deseja mesmo excluir o profissional?', [
                {
            
                    text: "Sim",
                    onPress: async () => {const response = await axios.delete(`/professionals/${id}`);
                    modalRef.current?.close();
                    listProfessionals()
                }
            },
            {
                text: "Não",
                onPress: () => {
                    modalRef.current?.close();
                    listProfessionals()
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

                <Text style={theme.title}>Profissionais</Text>
                <FlatList
                    style={{padding: 2}}
                    data={professionals}
                    onRefresh={() => listProfessionals()}
                    refreshing={loading}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ItemProfessional item={item} alterProfessional={() => alterProfessional(item)} />
                    )}
                />

                <CustomButtonSmall
                    color="#078a85"
                    onPress={() => newProfessional()}
                />

                <Modalize
                    ref={modalRef}
                    snapPoint={1000}
                    modalHeight={height * 0.8}>
                        <ScrollView 
                        horizontal={false}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={{ flex: 1 }}>
                        <View style={styles.modal}>
                            <Text style={[theme.label, {
                                textAlign: 'center'
                            }]}>{professional.id > 0 ? "Alterar Profissional" : "Novo Profissional"}</Text>

                            <Text style={theme.label}>Nome</Text>
                            <TextInput
                                keyboardType='default'
                                autoCapitalize='words'
                                value={professional.name}
                                onChangeText={(name) => { setProfesional({ ...professional, name: name }) }}
                                style={styles.modalInput}
                                placeholder="Nome" />

                            <Text style={theme.label}>Telefone</Text>
                            <TextInput
                                keyboardType='default'
                                autoCapitalize='words'
                                value={professional.phoneNumber}
                                onChangeText={(phoneNumber) => { setProfesional({ ...professional, phoneNumber: phoneNumber }) }}
                                style={styles.modalInput}
                                placeholder="Telefone" />

                            <Text style={theme.label}>Descrição</Text>
                            <TextInput
                                keyboardType='default'
                                autoCapitalize='words'
                                value={professional.description}
                                onChangeText={(description) => { setProfesional({ ...professional, description: description }) }}
                                style={styles.modalInput}
                                placeholder="Descrição" />

                            <Text style={theme.label}>Descrição</Text>
                            
                            <TextInput
                                keyboardType='default'
                                autoCapitalize='words'
                                value={professional.description}
                                onChangeText={(description) => { setProfesional({ ...professional, description: description }) }}
                                style={styles.modalInput}
                                placeholder="Descrição" />


                            <Text style={theme.label}>E-mail</Text>
                            <TextInput
                                keyboardType='email-address'
                                autoCapitalize='words'
                                value={professional.email}
                                onChangeText={(email) => { setProfesional({ ...professional, email: email }) }}
                                style={styles.modalInput}
                                placeholder="E-mail" />

                            <Text style={theme.label}>Senha</Text>
                            <TextInput
                                secureTextEntry={true}
                                autoCapitalize='none'
                                value={professional.password}
                                onChangeText={(password) => { setProfesional({ ...professional, password: password }) }}
                                style={styles.modalInput}
                                placeholder="Senha" />

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={theme.label}>Idade</Text>
                              
                                </View>

                                <View style={{ flex: 1 }}>
                                    <Text style={theme.label}>Gênero</Text>
                                    <ScrollView horizontal={true}>
                                            <ItemGenre
                                            setUser={setProfesional}
                                            user={professional}
                                            icon="female"
                                            genre="F" />
                                        <ItemGenre
                                            setUser={setProfesional}
                                            user={professional}
                                            icon="male"
                                            genre="M" />
                                    </ScrollView>
                                </View>
                            </View>

                            <View
                                style={styles.bottomLine}>
                                <CustomButton
                                    label="Salvar"
                                    onPress={(saveProfessional)}/>

                                <TouchableOpacity
                                    onPress={() => deleteProfessional(professional.id)}>
                                        <Ionicons name="trash-outline" size={38} color="#078a85" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                    </ScrollView>
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