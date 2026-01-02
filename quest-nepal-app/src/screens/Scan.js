import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/theme';

export default function Scan({ navigation }) {
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const breatheAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Pulse animation for the searching indicator
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Breathe animation for the scan frame
    Animated.loop(
      Animated.sequence([
        Animated.timing(breatheAnim, {
          toValue: 1.02,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(breatheAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
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
          colors={['rgba(0,0,0,0.6)', 'transparent', 'rgba(0,0,0,0.7)']}
          style={styles.gradient}
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="close" size={24} color={colors.white} />
            </TouchableOpacity>
            <View style={styles.searchingBadge}>
              <Animated.View
                style={[
                  styles.searchingDot,
                  { transform: [{ scale: pulseAnim }] },
                ]}
              />
              <Text style={styles.searchingText}>SEARCHING</Text>
            </View>
            <TouchableOpacity style={styles.flashButton}>
              <Ionicons name="flashlight-outline" size={24} color="rgba(255, 255, 255, 0.9)" />
            </TouchableOpacity>
          </View>

          {/* Scan Frame */}
          <View style={styles.scanContainer}>
            <TouchableOpacity
              style={styles.scanFrame}
              onPress={() => navigation.navigate('ContinueJourney')}
              activeOpacity={0.9}
            >
              <Animated.View
                style={[
                  styles.scanFrameInner,
                  { transform: [{ scale: breatheAnim }] },
                ]}
              >
                <View style={styles.scanBorder} />
                <View style={[styles.scanCorner, styles.scanCornerTL]} />
                <View style={[styles.scanCorner, styles.scanCornerTR]} />
                <View style={[styles.scanCorner, styles.scanCornerBL]} />
                <View style={[styles.scanCorner, styles.scanCornerBR]} />
              </Animated.View>
            </TouchableOpacity>

            <View style={styles.instructionContainer}>
              <Text style={styles.instructionTitle}>Discover the Hidden</Text>
              <Text style={styles.instructionText}>
                Align a marker within the frame{'\n'}to reveal its story.
              </Text>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <TouchableOpacity style={styles.nfcButton} activeOpacity={0.8}>
              <View style={styles.nfcIcon}>
                <Ionicons name="radio-outline" size={20} color={colors.white} />
              </View>
              <View style={styles.nfcContent}>
                <Text style={styles.nfcLabel}>ALTERNATIVE</Text>
                <Text style={styles.nfcTitle}>Tap NFC Tag</Text>
              </View>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  gradient: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xxl + spacing.xl,
    paddingBottom: spacing.md,
  },
  closeButton: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.full,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  searchingDot: {
    width: 8,
    height: 8,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
  },
  searchingText: {
    fontSize: 10,
    fontWeight: typography.weights.bold,
    color: 'rgba(255, 255, 255, 0.9)',
    letterSpacing: 2,
  },
  flashButton: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.full,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  scanFrame: {
    width: 280,
    height: 280,
    marginBottom: spacing.xl,
  },
  scanFrameInner: {
    flex: 1,
    position: 'relative',
  },
  scanBorder: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 32,
  },
  scanCorner: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderColor: colors.white,
    borderWidth: 3,
  },
  scanCornerTL: {
    top: 0,
    left: 0,
    borderTopLeftRadius: 24,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  scanCornerTR: {
    top: 0,
    right: 0,
    borderTopRightRadius: 24,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  scanCornerBL: {
    bottom: 0,
    left: 0,
    borderBottomLeftRadius: 24,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  scanCornerBR: {
    bottom: 0,
    right: 0,
    borderBottomRightRadius: 24,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  instructionContainer: {
    alignItems: 'center',
    gap: spacing.sm,
  },
  instructionTitle: {
    fontSize: typography.sizes.xxl,
    fontWeight: typography.weights.bold,
    color: colors.white,
    textAlign: 'center',
  },
  instructionText: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    lineHeight: 20,
  },
  footer: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxl + spacing.md,
    alignItems: 'center',
  },
  nfcButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingLeft: spacing.md,
    paddingRight: spacing.lg,
    paddingVertical: spacing.sm,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  nfcIcon: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  nfcContent: {
    gap: 2,
  },
  nfcLabel: {
    fontSize: 10,
    fontWeight: typography.weights.bold,
    color: 'rgba(255, 255, 255, 0.5)',
    letterSpacing: 2,
  },
  nfcTitle: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.bold,
    color: colors.white,
    letterSpacing: 0.5,
  },
});
