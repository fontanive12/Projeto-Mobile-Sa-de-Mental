import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

export const CustomUsers = ({ }) => {
    const [users, setUsers] = useState([])
    return (
        <View>
            {
                users.map((item) => {
                    return (
                        <View key={item.id}>
                            <Text style={theme.label}>{item.name} anos</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    
})