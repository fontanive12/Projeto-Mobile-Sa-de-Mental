import { Octicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../components/styles/DefaultTheme';


export const ViewInformation = (props) => {
    return (
        <View style={theme.container}>
            <Text style={theme.title}>Materiais de leitura</Text>
            <TouchableOpacity
                            style={[styles.card]}
                            onPress={() => props.navigation.navigate("ViewExpertises")}>
                            <View style={theme.cardItem}>
                                <Octicons name="checklist"
                                style={{ marginRight: 25, marginLeft: 5 }}
                                size={50} color="#444" />
                                <Text style={theme.label}>Lista de Especializações</Text>
                            </View>
                        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '80%'
    }
})

