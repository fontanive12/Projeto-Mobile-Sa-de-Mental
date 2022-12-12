import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from './styles/DefaultTheme';


export const CustomButton = ({ label, onPress }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}>
            <Text style={styles.textButton}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#078a85',
        borderRadius: 8,
        height: 42,
        width: '80%',
        justifyContent: 'center',
        
    },
    textButton: {
        color: colors.white,
        fontSize: 24,
        textAlign: 'center',
    }
});
