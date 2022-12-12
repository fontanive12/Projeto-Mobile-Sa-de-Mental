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
import { theme } from '../components/styles/DefaultTheme';
import { AppContext } from '../contexts/AppContext';
import { CustomButtonSmall } from '../components/CustomButtonSmall';
import { Modalize } from 'react-native-modalize';
import { CustomButton } from '../components/CustomButton';
import {ItemExpertise} from '../components/ItemExpertise';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export type Expertise = {
    description: string;
}

export const ViewExpertises = ({ navigation }) => {

    const initialExpertise = {
        id: 0,
        description: ""
    }

    const [loading, setLoading] = useState(false);
    const [expertises, setexpertises] = useState([]);
    const [expertise, setExpertise] = useState(initialExpertise);

    const { username, password } = useContext(AppContext);

    const modalRef = useRef(null);

    useEffect(() => {
        listExpertise();
        return () => {
            modalRef.current = null //limpar as referencias
        }
    }, [])

    function onOpenModal() {
        modalRef.current?.open();
    }

    function alterExpertise(expertise: any) {
        onOpenModal()
        setExpertise(expertise)
    }

    function newExpertise() {
        onOpenModal()
        setExpertise(initialExpertise)
    }


    async function saveExpertise() {
        try {
            const payload = {
                description: expertise.description,
            }
            console.log('payload - ', payload)
            let response: any = null

            if (expertise.id > 0) {
                //alteraração
                response = await axios.put(`/expertises/${expertise.id}`, payload);
            } else {
                //inclusão
                response = await axios.post(`/expertises`, payload);
            }

            modalRef.current?.close();

            listExpertise();

        } catch (error) {
            console.log('error - ', error)
            Alert.alert('Opsss', error.message);
        }
    }

    async function listExpertise() {
        try {
            setLoading(true);

            const response = await axios.get('/expertises');

            if (response.status == 200) {
                const json = response.data;
                setexpertises(json);
            } else {
                // Alert.alert('Ops, deu ruim 😥', json.message);
            }

            setLoading(false);
        } catch (error) {
            console.log({ error })
        }
    }

    const deleteExpertise = async (id: number) => { //para excluir o id, o filter vai filtar o id inexistente e excluir
        try {
         Alert.alert(
                  'Atenção', 'Deseja mesmo excluir a expecialização?', [
                  {
                      text: "Sim",
                      onPress: async () => {const response = await axios.delete(`/expertises/${id}`);
                      modalRef.current?.close();
                      listExpertise()
                  }
              },
              {
                  text: "Não",
                  onPress: () => {
                      modalRef.current?.close();
                      listExpertise()
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

                <Text style={theme.title}>Expecializações</Text>
                <FlatList
                    data={expertises}
                    onRefresh={() => listExpertise()}
                    refreshing={loading}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ItemExpertise item={item} alterExpertise={() => alterExpertise(item)} />
                    )}
                />

                <CustomButtonSmall
                    color="#078a85"
                    onPress={() => newExpertise()}
                />


                <Modalize
                    ref={modalRef}
                    snapPoint={250}
                    modalHeight={height * 0.8}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={{ flex: 1 }}>

                        <View style={styles.modal}>
                            <Text style={[theme.label, {
                                textAlign: 'center'
                            }]}>{expertise.id > 0 ? "Alterar Expecialização" : "Nova Expecialização"}</Text>

                            <Text style={theme.label}>Nome</Text>
                            <TextInput
                                keyboardType='default'
                                autoCapitalize='words'
                                value={expertise.description}
                                onChangeText={(description) => { setExpertise({ ...expertise, description: description }) }}
                                style={styles.modalInput}
                                placeholder="Nome"
                            />
                        </View>

                        <View
                            style={styles.bottomLine}>
                            <CustomButton
                                label="Salvar"
                                onPress={(saveExpertise)}/>

                            <TouchableOpacity
                                onPress={() => deleteExpertise(expertise.id)}>
                                    <Ionicons name="trash-outline" size={38} color="#078a85" />
                            </TouchableOpacity>
                        </View>
                </KeyboardAvoidingView>
            </Modalize>


        </View>
        </SafeAreaView >
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