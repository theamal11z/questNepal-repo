import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

// Import screens
import OnboardingWelcome from './src/screens/OnboardingWelcome';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import MainTabs from './src/navigation/MainTabs';
import ActiveQuestDetails from './src/screens/ActiveQuestDetails';
import JourneyTrail from './src/screens/JourneyTrail';
import Discovery from './src/screens/Discovery';
import Scan from './src/screens/Scan';
import ContinueJourney from './src/screens/ContinueJourney';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="OnboardingWelcome"
          screenOptions={{
            headerShown: false,
            animation: 'fade',
            animationDuration: 300,
          }}
        >
          <Stack.Screen name="OnboardingWelcome" component={OnboardingWelcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="ActiveQuestDetails" component={ActiveQuestDetails} />
          <Stack.Screen name="JourneyTrail" component={JourneyTrail} />
          <Stack.Screen name="Discovery" component={Discovery} />
          <Stack.Screen name="Scan" component={Scan} />
          <Stack.Screen name="ContinueJourney" component={ContinueJourney} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
