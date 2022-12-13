import { Octicons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CustomCardInformation } from '../components/CustomCardInformation';
import { theme } from '../components/styles/DefaultTheme';


export const ViewInformation = (props) => {
    return (
        <View style={theme.container}>
            <Text style={theme.title}>Materiais de leitura</Text>
            <CustomCardInformation
                size={28}
                label={'O que é ansiedade e como controlar?'} onPress={() => props.navigation.navigate('ViewAnsiedade')}
            />

            <CustomCardInformation
                size={28}
                label={'Dicas de atividades para se acalmar'} onPress={() => props.navigation.navigate('ViewAtividades')}
            />

        </View>


    )
}

const styles = StyleSheet.create({
    card: {
        width: '80%'
    }
})

