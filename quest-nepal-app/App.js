import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import screens
import OnboardingWelcome from './src/screens/OnboardingWelcome';
import OnboardingSteps from './src/screens/OnboardingSteps';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import MainTabs from './src/navigation/MainTabs';
import Notifications from './src/screens/Notifications';
import Settings from './src/screens/Settings';
import EditProfile from './src/screens/EditProfile';
import PrivacySecurity from './src/screens/PrivacySecurity';
import PaymentMethods from './src/screens/PaymentMethods';
import LanguageSettings from './src/screens/LanguageSettings';
import HelpCenter from './src/screens/HelpCenter';
import ContactUs from './src/screens/ContactUs';
import AboutApp from './src/screens/AboutApp';
import ActiveQuestDetails from './src/screens/ActiveQuestDetails';
import JourneyTrail from './src/screens/JourneyTrail';
import Discovery from './src/screens/Discovery';
import Scan from './src/screens/Scan';
import ContinueJourney from './src/screens/ContinueJourney';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="OnboardingSteps"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="OnboardingWelcome" component={OnboardingWelcome} />
          <Stack.Screen name="OnboardingSteps" component={OnboardingSteps} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="PrivacySecurity" component={PrivacySecurity} />
          <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
          <Stack.Screen name="LanguageSettings" component={LanguageSettings} />
          <Stack.Screen name="HelpCenter" component={HelpCenter} />
          <Stack.Screen name="ContactUs" component={ContactUs} />
          <Stack.Screen name="AboutApp" component={AboutApp} />
          <Stack.Screen name="ActiveQuestDetails" component={ActiveQuestDetails} />
          <Stack.Screen name="JourneyTrail" component={JourneyTrail} />
          <Stack.Screen name="Discovery" component={Discovery} />
          <Stack.Screen name="Scan" component={Scan} />
          <Stack.Screen name="ContinueJourney" component={ContinueJourney} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
