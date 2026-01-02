import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { colors, spacing, borderRadius } from '../constants/theme';

// Import screens
import Home from '../screens/Home';
import Map from '../screens/Map';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.tabBar}>
        <View style={styles.tabBarInner}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Map') {
              iconName = 'map';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }

            return (
              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                style={[
                  styles.tabButton,
                  isFocused && styles.tabButtonActive,
                ]}
                activeOpacity={0.7}
              >
                <Ionicons
                  name={iconName}
                  size={20}
                  color={isFocused ? colors.primary : 'rgba(255, 255, 255, 0.4)'}
                />
              </TouchableOpacity>
            );
          })}

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.scanButton}
            onPress={() => navigation.navigate('Scan')}
            activeOpacity={0.7}
          >
            <Ionicons name="qr-code" size={20} color={colors.primary} />
            <Text style={styles.scanText}>Scan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default function MainTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: spacing.lg,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 40,
  },
  tabBar: {
    backgroundColor: 'rgba(24, 24, 17, 0.9)',
    borderRadius: borderRadius.full,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  tabBarInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  tabButton: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButtonActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginHorizontal: spacing.xs,
  },
  scanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: borderRadius.full,
  },
  scanText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.white,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
});
