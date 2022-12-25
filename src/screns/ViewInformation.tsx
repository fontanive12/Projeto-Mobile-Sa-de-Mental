import { Octicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CustomCardInformation } from '../components/CustomCardInformation';
import { Header } from '../components/Header';
import { colors, theme } from '../components/styles/DefaultTheme';

const { width } = Dimensions.get('window');


export const ViewInformation = (props) => {
    return (
        <View style={theme.container}>
            
            {/* <Text style={theme.title}>Materiais de leitura</Text> */}
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
    },
    header: {
        height: 100,
        width: width,
        paddingHorizontal: 8,
        backgroundColor: colors.background,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1
    }
})

