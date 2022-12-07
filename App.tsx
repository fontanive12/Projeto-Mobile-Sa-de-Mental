import React from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { useFonts } from 'expo-font';
import { Allerta_400Regular } from '@expo-google-fonts/allerta'
import { Cambo_400Regular } from '@expo-google-fonts/cambo'

import { ViewLogin } from './src/screns/ViewLogin';
import { ViewMenu } from './src/screns/ViewMenu';
import { ViewChecklist } from './src/screns/ViewChecklist';
import { ViewInformation } from './src/screns/ViewInformation';
import { AppContext, AppProvider, IAppContext } from './src/contexts/AppContext'
const Stack = createNativeStackNavigator(); //criando rotas

export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    Allerta_400Regular,
    Cambo_400Regular
  })
  if (fontsLoaded) {
    return (
      <AppProvider>
        <>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName='ViewLogin'
              screenOptions={{ headerShown: false }}> 
              <Stack.Screen name="ViewLogin" component={ViewLogin} />
              <Stack.Screen name="ViewMenu" component={ViewMenu} />
              <Stack.Screen name="ViewChecklist" component={ViewChecklist} />
              <Stack.Screen name="ViewInformation" component={ViewInformation} />
            </Stack.Navigator>
          </NavigationContainer>

          <StatusBar
            translucent={false}
            backgroundColor="#fff"
            style="auto" />
        </>
      </AppProvider>
    );
  } else {
    return (
      <>
        <ActivityIndicator size='large' />
        <StatusBar
          translucent={false}
          backgroundColor="#fff"
          style="auto" />
      </>
    )
  }
}

