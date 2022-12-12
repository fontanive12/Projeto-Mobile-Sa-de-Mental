import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { colors, theme } from './styles/DefaultTheme';

export const ItemExpertise = ({ item, alterExpertise }) => {
    return (
        <TouchableOpacity
            onPress={alterExpertise}
            activeOpacity={0.6}
            style={[theme.card, theme.shadows]} key={item.id}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign name={'search1'} size={24} 
                        color={'#7986CB'} 
                        style={{ marginRight: 16 }}/>
                    <Text style={theme.titleCard}>{item.description}</Text>
                </View>
            <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
    );
}
