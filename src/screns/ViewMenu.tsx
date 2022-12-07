import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CustomButtonMenu } from '../components/CustonButtonMenu';
import * as Animatable from 'react-native-animatable';

export const ViewMenu = (props: any) => {
    return (
        <Animatable.View
            animation="pulse"
            style={styles.container}>

            <CustomButtonMenu
                onPress={() => props.navigation.navigate("ViewChecklist")}
                label="Checklist Diário"
            />
            <CustomButtonMenu
                onPress={() => props.navigation.navigate("ViewInformation")}
                label="Materiais de leitura"
            />

        </Animatable.View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})