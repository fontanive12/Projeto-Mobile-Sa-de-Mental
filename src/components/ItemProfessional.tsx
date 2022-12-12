import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { theme } from './styles/DefaultTheme';

export const ItemProfessional = ({ item, alterProfessional }) => {
    return (
        <TouchableOpacity
            onPress={alterProfessional}
            activeOpacity={0.6}
            style={[theme.card, theme.shadows]} key={item.id}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign name={item.genre == 'M' ? 'man' : 'woman'} size={24}
                    color={item.genre == 'M' ? "#7986CB" : "#F06292"}
                    style={{ marginRight: 16 }} />
                <View>
                    <Text style={theme.titleCard}>{item.name}</Text>
                    <Text style={theme.subtitleCard}>{item.ExpertiseId.description}</Text>
                </View>
            </View>
            <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
    );
}
