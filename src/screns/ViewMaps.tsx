import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { theme } from '../components/styles/DefaultTheme';
import MapView, { Marker } from 'react-native-maps';
import { messages } from '../components/utils/messages'
import * as Location from 'expo-location';

export const ViewMaps = () => {

    const [location, setLocation] = useState(null);
    const [region, setRegion] = useState(
        {
            latitude: -20.5042,
            longitude: -51.38992,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    )
    
    useEffect(() => {
        (async () => {
            
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                messages.error("Erro", "errrooou")
                return;
            }
            
            let location = await Location.getCurrentPositionAsync({});

            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            })
            console.log('Location', location.coords)
        })();
    }, []);

    return (
        <View style={theme.container}>
            <MapView
                style={styles.map}
                initialRegion={region}
                region={{
                    latitude: region.latitude,
                    longitude: region.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                >
            <Marker
                draggable
                coordinate={{ latitude: -29.5042, longitude: -51.38992 }}
                title="UNIVATES"
                description="descrição univates"
                onDragEnd={(e) => console.log('onDragEnd', e.nativeEvent.coordinate)}
            />
        </MapView>
        </View >
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    }
})