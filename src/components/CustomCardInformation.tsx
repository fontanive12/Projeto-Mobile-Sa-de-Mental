import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from './styles/DefaultTheme';

export const CustomCardInformation = ({ label, onPress, size }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={styles.button}>
        {/* <Ionicons name={name} size={size} color='white' style={styles.icon} /> */}
        <Text style={styles.textButton}>{label}</Text>

        

      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#078a85',
    borderRadius: 8,
    height: 100,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 30,
    marginTop: 15,

    // padding: 30
    // width: '100%',
    // marginTop: 15,
    // borderRadius: 16,
    // padding: 8,
    // height: 55,
    // backgroundColor: '#f6f8ee',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between'

  },
  icon: {
    marginRight: 10,
  },
  textButton: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    width: '100%'
  }
})