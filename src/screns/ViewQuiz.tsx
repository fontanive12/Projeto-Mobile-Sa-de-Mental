import React, { useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { theme } from '../components/styles/DefaultTheme';

const { width, height } = Dimensions.get('window')

export const ViewQuiz = () => {

    const [count, setCount] = useState(0);

    const questions = [
        {
            "pergunta": "Pergunta 1",
            "opcao1": "1",
            "opcao2": "2",
            "opcao3": "3",
            "resposta": "1"
        },
        {
            "pergunta": "Pergunta 2",
            "opcao1": "1",
            "opcao2": "2",
            "opcao3": "3",
            "resposta": "2"
        },
        {
            "pergunta": "Pergunta 3",
            "opcao1": "1",
            "opcao2": "2",
            "opcao3": "3",
            "resposta": "3"
        }
    ];

    const validation = (alternative) => {
        console.log('acertou?',
            alternative = questions[count].resposta ? 'sim' : 'não')
        setCount(count + 1);
    }

    return (
        <SafeAreaView style={{ alignItems: 'center' }}>

            <View style={styles.rectangle}>
                <Text style={theme.title}>{questions[count].pergunta}</Text>
            </View>

            <View style={styles.option}>
                <TouchableOpacity>
                    <Text style={theme.label}>{questions[count].opcao1}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.option}>
                <TouchableOpacity>
                    <Text style={theme.label}>{questions[count].opcao2}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.option}>
                <TouchableOpacity>
                    <Text style={theme.label}>{questions[count].opcao3}</Text>
                </TouchableOpacity>
            </View>

            <CustomButton
                onPress={() => { validation }} label={undefined} />

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    rectangle: {
        width: width * 0.9,
        height: 150,
        top: 50,
        backgroundColor: '#5D9BA4',
        borderRadius: 25
    },
    option: {
        width: width * 0.9,
        height: 60,
        // marginTop: 50,
        top: 300,
        backgroundColor: '#5D9BA4',
        borderRadius: 15
    }
})