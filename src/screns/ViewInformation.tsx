import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../components/styles/DefaultTheme';


export const ViewInformation = (props) => {
    return (
        <View style={[theme.container, { marginTop: 50 }]}>
            <TouchableOpacity
                style={styles.card}
                onPress={() => props.navigation.navigate("ViewInformation")}>
                <Text>Materiais de leitura</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '80%'
    }
})

