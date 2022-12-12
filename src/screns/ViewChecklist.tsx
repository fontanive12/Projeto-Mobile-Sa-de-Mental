import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LottieView from 'lottie-react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CustomButton } from '../components/CustomButton';
import { theme } from '../components/styles/DefaultTheme';

export const ViewChecklist = () => {

    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState('');

    useEffect(() => {
        const getTasksAsync = async () => {
            try {
                const asyncTasks = await AsyncStorage.getItem('@tasklist');
                if (asyncTasks != null) {
                    setTaskList(JSON.parse(asyncTasks));
                }
            } catch (e) {
                console.log('ERROR GET=>', e)
            }
        }

        getTasksAsync()

    }, [])

    useEffect(() => {

        const setTaskAsync = async () => {
            try {
                if (taskList) {
                    await AsyncStorage.setItem('@tasklist', JSON.stringify(taskList));
                }
            } catch (e) {
                console.log('ERROR=>', e);
            }
        }

        setTaskAsync()

    }, [taskList])
    
    const updateTaskList = async () => {
        if (task) {
            const newTask = {
                id: String(new Date().getTime()),
                name: task,
                done: false
            }

            const orderTaskList = [...taskList, newTask].sort((a, b) => (a.name > b.name ? 1 : (b.name > a.name ? -1 : 0)))
            //pega tudo do taskList, além no novo "nome" de task
            //compara os itens da tabela um por um armazenando nas variaveis a e b

            // console.log(newTask)
            setTaskList(orderTaskList)
            setTask('')

            await AsyncStorage.setItem("@taskList", JSON.stringify(orderTaskList))

        } else {
            Alert.alert('Erro 5246846', 'É necessário digitar alguma tarefa.')
        }
    }


    const deleteTask = (id) => { //para excluir o id, o filter vai filtar o id inexistente e excluir
        Alert.alert(
            'Atenção', 'Deseja mesmo excluir a tarefa?', [
            {
                text: "Sim",
                onPress: () => {
                    setTaskList([...taskList.filter((item) => item.id !== id)])
                }
            },
            {
                text: "Não",
                onPress: () => { }
            }
        ]
        )
    }

    const handleCheckTask = (id: number) => {

        const newTaskList = taskList.map(item => {
            if (item.id == id) {
                //encontramos o elemento a ser alterado
                return { ...item, done: !item.done } //pega o status atual e muda
            }
            return item;
        })
        setTaskList(newTaskList);
    }

    return (
        <View style={theme.container}>

            <Text style={theme.title}>Minhas tarefas diárias</Text>

            
            {/* <TextInput
                keyboardType='default'
                placeholder='Digite a tarefa'
                placeholderTextColor='#bebebe'
                value={task}
                onChangeText={(value) => setTask(value)}
                style={styles.input}
            />

            <CustomButton
                label="Salvar"
                onPress={() => updateTaskList()}
            /> */}
            <View style={styles.list}>
                {
                    taskList !== null && taskList.length > 0 ?
                       
                           taskList.map(item => {  return (
                                <View
                                    key={item.id}
                                    style={styles.itemList}>

                                    <Checkbox
                                        value={item.done}
                                        onValueChange={() => handleCheckTask(item.id)}
                                        color={item.done ? '#078a85' : '#fff'}
                                        style={styles.checkbox}
                                    />
                                    <Text style={[styles.itemText, { textDecorationLine: item.done ? 'line-through' : 'none' }]}>{item.name}</Text>
                                    {/* <TouchableOpacity
                                        onPress={() => deleteTask(item.id)}>
                                        <Ionicons name="trash-outline" size={24} color="#fff" />
                                    </TouchableOpacity> */}
                                </View>
                            )
                        })
                        :

                        <View style={styles.list}>
                            <Text >Lista vazia</Text>
                            {/* <LottieView
                                autoPlay
                                loop={true}
                                style={{
                                    width: 200,
                                    height: 200,
                                }}
                            // source={require('../../assets/animations/boxEmpty.json')}
                            /> */}
                        </View>
                }
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#68baab',
        alignItems: 'flex-start',
    },
    input: {
        height: 40,
        width: '100%',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        color: '#fff',
        fontSize: 16
    },
    checkbox: {
        color: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
        marginRight: 12,
    },
    list: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#68baab',
        marginTop: 30,
    },
    itemList: {
        width: '100%',
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between'
    },
    itemText: {
        color: '#fff',
        fontSize: 20
    }
});
