import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/theme';

const { width, height } = Dimensions.get('window');

export default function OnboardingWelcome({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHlLCFYuP-T8cr9Nl7m9T8EsIeoq6j5FTxofayUJZKrD7IOkU_cmnxUqbCH6ERoAZBoAm1oik0WHi5vuh6LrHgxqNv-GXB0rVrpVzkQcMDE9sZuju1cy0cduAXhM7wc1h7VnH2qO-wV3EbNGg8Ya0zWAt29DmpDh5rRlq9nj_REwfNy8drwKaABwrQtJ0u8JM7WshMPJ0ScqukH3aGFhVyA6b0HUjkKK2x4TENkbno0NPABgn-BE2g6UkebevxdCOp8w14fB9Z-uY',
        }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.3)', 'transparent', colors.backgroundDark]}
          locations={[0, 0.5, 1]}
          style={styles.gradient}
        >
          {/* Header */}
          <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
            <View style={styles.logoContainer}>
              <Ionicons name="home" size={20} color={colors.primary} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>
          </Animated.View>

          {/* Content */}
          <View style={styles.content}>
            <Animated.View
              style={[
                styles.textContainer,
                {
                  opacity: fadeAnim,
                  transform: [{ translateY: slideAnim }],
                },
              ]}
            >
              <View style={styles.divider} />
              <Text style={styles.title}>
                A pilgrimage,{'\n'}
                <Text style={styles.subtitle}>not a game.</Text>
              </Text>
              <Text style={styles.description}>
                Immerse yourself in the living history of the Himalayas. Discover
                culture through presence.
              </Text>
            </Animated.View>

            <Animated.View style={{ opacity: fadeAnim }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('OnboardingSteps')}
                activeOpacity={0.8}
              >
                <View style={styles.buttonCircle}>
                  <Ionicons name="arrow-forward" size={24} color={colors.white} />
                </View>
                <View style={styles.buttonTextContainer}>
                  <Text style={styles.buttonTitle}>Begin Your Journey</Text>
                  <Text style={styles.buttonSubtitle}>Tap to start exploration</Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          </View>

          {/* Pagination Dots */}
          <Animated.View style={[styles.pagination, { opacity: fadeAnim }]}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </Animated.View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradient: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xxl + spacing.md,
    paddingBottom: spacing.lg,
  },
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.semibold,
    color: 'rgba(255, 255, 255, 0.4)',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxl + spacing.lg,
  },
  textContainer: {
    marginBottom: spacing.xxl + spacing.lg,
  },
  divider: {
    width: 32,
    height: 2,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.full,
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: typography.sizes.huge,
    fontWeight: typography.weights.light,
    color: colors.white,
    lineHeight: 44,
    marginBottom: spacing.md,
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: typography.weights.light,
    fontStyle: 'italic',
  },
  description: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.light,
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 26,
    maxWidth: 300,
    marginTop: spacing.sm,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
  },
  buttonCircle: {
    width: 64,
    height: 64,
    borderRadius: borderRadius.full,
    backgroundColor: colors.surfaceDark,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextContainer: {
    flex: 1,
  },
  buttonTitle: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.bold,
    color: colors.white,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  buttonSubtitle: {
    fontSize: 11,
    fontWeight: typography.weights.medium,
    color: 'rgba(255, 255, 255, 0.3)',
    letterSpacing: 1,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    paddingBottom: spacing.xl,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: borderRadius.full,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  dotActive: {
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});
