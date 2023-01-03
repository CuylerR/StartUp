import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';

export default function App() {
  const Stack = createNativeStackNavigator();


  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              // This part makes sure that the keyboard funcions appropriately and that the view can be seen
            style={{flex:1 }}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}>
            {/* Allows cropping for adding other UI elements */}
            <Stack.Navigator>
              <Stack.Screen 
                name='HomeScreen' 
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
            {/* Passing option array above will allow for us doing the homescreen top part or leaving it to the black BG 1:22:46*/}
              <Stack.Screen 
                  name='MapScreen' 
                  component={MapScreen}
                  options={{
                    headerShown: false,
                  }}
                />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};