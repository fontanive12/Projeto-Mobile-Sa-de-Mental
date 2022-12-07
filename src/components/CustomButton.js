import { StyleSheet, Text, TouchableOpacity } from 'react-native';


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
        backgroundColor: 'pink',
        borderRadius: 8,
        height: 42,
        width: '80%',
        padding: 8,
        
    },
    textButton: {
        color: '#0C1A26',
        fontSize: 24,
        textAlign: 'center',
    },
    // shadows: {
    //     shadowColor: 'yellow',
    //     shadowOffset: {
    //         width: 0,
    //         height: 3,
    //     },
    //     shadowOpacity: 0.2,
    //     shadowRadius: 2,
    //     elevation: 10
    // }
});
