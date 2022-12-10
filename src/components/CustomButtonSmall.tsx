import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const CustomButtonSmall = ({ icon, color, onPress }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, { backgroundColor: color ? color : 'green' }]}>
            <AntDesign name="plus" size={30} color="black" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        borderRadius: 50,
        position: 'absolute',
        bottom: 20,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:15

    },
});
