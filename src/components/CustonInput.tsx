import { StyleSheet, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '../components/styles/DefaultTheme';

export const CustomInput = ({ keyboardType, onChangeText, placeholder, secureTextEntry, value }) => {

    return (
        <TextInput
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCapitalize='none'
            value={value}
            onChangeText={onChangeText}
            style={theme.input}
            placeholder={placeholder} />
    )
}
