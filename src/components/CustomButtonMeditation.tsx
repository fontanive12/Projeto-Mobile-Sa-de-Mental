import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FaBeer } from 'react-icons/fa';
import { colors, theme } from './styles/DefaultTheme';


export const CustomButtonMeditation = ({ label, onPress, size, name }) => {

    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.card}>
                <TouchableOpacity
                    onPress={onPress}
                    style={styles.button}>
                        {/* <FaBeer/> */}
                {/* <Ionicons name={name} size={32} color="black" />          */}
           <Text style={styles.textButton}>{label}</Text>

                    <View style={{ justifyContent: 'flex-end' }}>
                    
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        // alignItems: 'center',
        marginTop: 15,
    },
    button: {
        backgroundColor: '#078a85',
        borderRadius: 8,
        height: 80,
        width: '100%',
        // justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 12
    },
    icon: {
        marginRight: 10,
    },
    textButton: {
        color: colors.white,
        fontSize: 20,
        marginLeft: 10,
        // textAling: 'start',
        width: '90%',
    }
});
