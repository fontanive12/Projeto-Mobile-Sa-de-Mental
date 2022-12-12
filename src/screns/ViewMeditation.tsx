import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import { theme } from '../components/styles/DefaultTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ViewMeditation = () => {
  const [sound, setSound] = React.useState();

  async function playSound(sound20) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/audios/relaxar.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }

  async function playSound2(sound20) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/audios/audio.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={theme.container}>
      {/* <TouchableOpacity
      onPress={playSound}
      
      >
        <Text style={theme.label}>Meditação guiada para acalmar</Text>

      </TouchableOpacity> */}
      <Button title="Meditação para relaxar" onPress= {playSound} />
      <Button title="Música de piano" onPress={playSound2}>
        <Text style={theme.label}>Voltar para relaxar</Text>
      </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});
