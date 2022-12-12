import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '../components/styles/DefaultTheme';

export const ItemUser = ({ item, alterUser }) => {
    return (
        <TouchableOpacity
            onPress={alterUser}
            activeOpacity={0.6}
            style={[theme.card, theme.shadows]} key={item.id}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign name={item.genre == 'M' ? 'man' : 'woman'} size={24}
                    color={item.genre == 'M' ? "#7986CB" : "#F06292"}
                    style={{ marginRight: 16 }} />
                <View>
                    <Text style={theme.titleCard}>{item.name}</Text>
                    <Text style={theme.subtitleCard}>{item.email}</Text>
                </View>
            </View>
            <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
    );
}
