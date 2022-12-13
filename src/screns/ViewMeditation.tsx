import * as React from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import { Audio } from 'expo-av';
import { theme } from '../components/styles/DefaultTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CustomButtonMeditation } from '../components/CustomButtonMeditation';

export const ViewMeditation = () => {
  const [sound, setSound] = React.useState();

  async function playSound(sound20) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../assets/audios/EleveSuaVibracao.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }

  async function playSound2(sound20) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../assets/audios/AmeSe.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }

  async function playSound3(sound20) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../assets/audios/Calma.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }

  async function playSound4(sound20) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../assets/audios/SomDeChuva.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }

  async function playSound5(sound20) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../assets/audios/SonsNatureza.mp3')
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
      <Text style={theme.title}>Meditações para ouvir e relaxar</Text>
      <ScrollView>
    
        <CustomButtonMeditation 
        name={"male"}
        size={28}
        label={'Eleve sua vibração'} onPress={playSound} 
        />

<CustomButtonMeditation 
        name={"male"}
        size={28}
        label={'Aumente sua autoestima'} onPress={playSound2} 
        />

<CustomButtonMeditation 
        name={"meditation"}
        size={28}
        label={'Ouça para se acalmar'} onPress={playSound3} 
        />

<CustomButtonMeditation 
        name={"male"}
        size={28}
        label={'Som da chuva'} onPress={playSound4} 
      />

<CustomButtonMeditation 
        name={"male"}
        size={28}
        label={'Som da natureza'} onPress={playSound5} 
     />

        </ScrollView>
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
