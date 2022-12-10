import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from './styles/DefaultTheme';

export const Avatar = () => {
    return (
        <View>
            <Ionicons name="person-circle-outline" size={50} color={colors.gray} />
        </View>
    );
}
