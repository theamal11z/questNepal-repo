import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/theme';

export default function ContinueJourney({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={20} color={colors.textMain} />
        </TouchableOpacity>
        <View style={styles.locationBadge}>
          <Ionicons name="location" size={18} color={colors.primary} />
          <Text style={styles.locationText}>PATAN DURBAR SQUARE</Text>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Ionicons name="ellipsis-horizontal" size={20} color={colors.textMain} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Image */}
        <View style={styles.heroContainer}>
          <ImageBackground
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHlLCFYuP-T8cr9Nl7m9T8EsIeoq6j5FTxofayUJZKrD7IOkU_cmnxUqbCH6ERoAZBoAm1oik0WHi5vuh6LrHgxqNv-GXB0rVrpVzkQcMDE9sZuju1cy0cduAXhM7wc1h7VnH2qO-wV3EbNGg8Ya0zWAt29DmpDh5rRlq9nj_REwfNy8drwKaABwrQtJ0u8JM7WshMPJ0ScqukH3aGFhVyA6b0HUjkKK2x4TENkbno0NPABgn-BE2g6UkebevxdCOp8w14fB9Z-uY',
            }}
            style={styles.heroImage}
            imageStyle={styles.heroImageStyle}
          >
            <LinearGradient
              colors={['rgba(0,0,0,0.3)', 'transparent', colors.backgroundLight]}
              style={styles.heroGradient}
            />
          </ImageBackground>
        </View>

        {/* Content Card */}
        <View style={styles.contentCard}>
          {/* Progress Dots */}
          <View style={styles.progressDots}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>

          {/* Chapter Info */}
          <View style={styles.chapterHeader}>
            <View style={styles.chapterInfo}>
              <Text style={styles.chapterLabel}>CHAPTER 03</Text>
              <Text style={styles.chapterTitle}>The Golden Gate</Text>
            </View>
            <View style={styles.chapterIcon}>
              <Ionicons name="business-outline" size={20} color={colors.textSub} />
            </View>
          </View>

          {/* Description */}
          <Text style={styles.description}>
            The sun catches the gilded copper of the gate. Legend says a deity
            watches over those who enter with a pure heart. Listen closely to the
            sounds of the square as you approach the entrance.
          </Text>

          {/* Task Card */}
          <View style={styles.taskCard}>
            <View style={styles.taskIcon}>
              <View style={styles.taskIconInner}>
                <View style={styles.taskIconDot} />
              </View>
            </View>
            <View style={styles.taskContent}>
              <Text style={styles.taskTitle}>Locate the Guardian Symbol</Text>
              <Text style={styles.taskDescription}>
                Hidden within the intricate wood carvings of the torana above the
                gate.
              </Text>
            </View>
          </View>

          {/* Action Button */}
          <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
            <Text style={styles.actionButtonText}>I Found It</Text>
            <Ionicons name="arrow-forward" size={18} color={colors.white} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xxl + spacing.md,
    paddingBottom: spacing.md,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  locationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  locationText: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.bold,
    color: colors.textMain,
    letterSpacing: 1,
  },
  moreButton: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.xxl,
  },
  heroContainer: {
    height: 400,
    width: '100%',
  },
  heroImage: {
    flex: 1,
    width: '100%',
  },
  heroImageStyle: {
    resizeMode: 'cover',
  },
  heroGradient: {
    flex: 1,
  },
  contentCard: {
    marginTop: -80,
    marginHorizontal: spacing.lg,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 24,
    padding: spacing.xl,
    gap: spacing.xl,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  progressDots: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    height: 4,
    width: 32,
    borderRadius: borderRadius.full,
    backgroundColor: 'rgba(140, 139, 95, 0.2)',
  },
  dotActive: {
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  chapterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  chapterInfo: {
    flex: 1,
    gap: spacing.xs,
  },
  chapterLabel: {
    fontSize: 10,
    fontWeight: typography.weights.bold,
    color: colors.textSub,
    letterSpacing: 2,
  },
  chapterTitle: {
    fontSize: typography.sizes.xxxl,
    fontWeight: typography.weights.bold,
    color: colors.textMain,
    lineHeight: 36,
  },
  chapterIcon: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    backgroundColor: colors.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  description: {
    fontSize: typography.sizes.sm,
    lineHeight: 22,
    color: 'rgba(24, 24, 17, 0.8)',
    fontWeight: typography.weights.medium,
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.md,
    backgroundColor: colors.backgroundLight,
    padding: spacing.lg,
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  taskIcon: {
    marginTop: 4,
  },
  taskIconInner: {
    width: 20,
    height: 20,
    borderRadius: borderRadius.full,
    borderWidth: 2,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskIconDot: {
    width: 8,
    height: 8,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
  },
  taskContent: {
    flex: 1,
    gap: spacing.xs,
  },
  taskTitle: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.bold,
    color: colors.textMain,
  },
  taskDescription: {
    fontSize: typography.sizes.xs,
    color: colors.textSub,
    lineHeight: 18,
  },
  actionButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.textMain,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.lg,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  actionButtonText: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.bold,
    color: colors.white,
    letterSpacing: 0.5,
  },
});
