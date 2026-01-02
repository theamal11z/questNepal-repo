import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/theme';

const { width } = Dimensions.get('window');

export default function ActiveQuestDetails({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.textCharcoalDark} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Journey to Patan</Text>
        <TouchableOpacity style={styles.moreButton}>
          <Ionicons name="ellipsis-vertical" size={24} color={colors.textCharcoalDark} />
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
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaLc7blWLp1NY2SYqen5soN0sV3zJjQTB_t03K1_C-quShod6XiuPvgng52h93G4H1DYW1XC3uEeuEnRdZOwBccdDQ8y_Plr-o8YRi-nJfeiniZi9xSK-g68M2nMMhS_eOUK9ajo2cKGd63vlrdnJINTqRcb-EfFbPe_bbSC1bF4EQairPbLthf6-kyT8f-PEFTO8ZEvz8EdET7zqv5zPYjWIJxegrdErmNlMFoWRskuGskclBqV1e7O54j45_gKesQnnvUPyuXi4',
            }}
            style={styles.heroImage}
            imageStyle={styles.heroImageStyle}
          >
            <LinearGradient
              colors={['rgba(0,0,0,0.6)', 'transparent', 'rgba(0,0,0,0.9)']}
              style={styles.heroGradient}
            >
              <View style={styles.heroContent}>
                <View style={styles.activeBadge}>
                  <Text style={styles.activeBadgeText}>ACTIVE STAGE</Text>
                </View>
                <Text style={styles.heroTitle}>The Sound of Brass</Text>
                <View style={styles.locationRow}>
                  <Ionicons name="location" size={18} color="rgba(255, 255, 255, 0.7)" />
                  <Text style={styles.locationText}>Lalitpur, Nepal</Text>
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>

        {/* Chapter Info */}
        <View style={styles.chapterInfo}>
          <Text style={styles.chapterLabel}>CHAPTER 3: THE HIDDEN COURTYARD</Text>
          <Text style={styles.chapterDescription}>
            Walk towards the rhythm of the hammers. In this alleyway, the craft of
            singing bowls has been preserved for four centuries. The air vibrates
            with a low hum. Pause here and listen deeply.
          </Text>
        </View>

        {/* Timeline */}
        <View style={styles.timeline}>
          <View style={styles.timelineLine} />

          {/* Completed Stage */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineIconCompleted}>
              <Ionicons name="checkmark" size={14} color={colors.textCharcoalDark} />
            </View>
            <View style={[styles.timelineContent, { opacity: 0.6 }]}>
              <Text style={styles.timelineTitle}>The Golden Gate</Text>
              <Text style={styles.timelineMeta}>Completed • 20 mins ago</Text>
            </View>
          </View>

          {/* Active Stage */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineIconActive}>
              <Ionicons name="musical-notes" size={18} color={colors.white} />
            </View>
            <View style={styles.activeStageCard}>
              <View style={styles.activeStageHeader}>
                <Text style={styles.activeStageTitle}>The Sound of Brass</Text>
                <View style={styles.currentBadge}>
                  <Text style={styles.currentBadgeText}>CURRENT</Text>
                </View>
              </View>
              <Text style={styles.activeStageDescription}>
                Locate the shop with the blue door where the master craftsman tunes
                the bowls by ear.
              </Text>
              <View style={styles.audioCard}>
                <View style={styles.audioIcon}>
                  <Ionicons name="headset" size={20} color={colors.textCharcoalMedium} />
                </View>
                <View style={styles.audioInfo}>
                  <Text style={styles.audioTitle}>AUDIO AMBIENCE</Text>
                  <Text style={styles.audioSubtitle}>Temple Bells & Hammering</Text>
                </View>
                <TouchableOpacity style={styles.playButton}>
                  <Ionicons name="play" size={20} color="#FFC107" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action Button */}
      <View style={styles.bottomAction}>
        <TouchableOpacity
          style={styles.compassButton}
          onPress={() => navigation.navigate('ContinueJourney')}
          activeOpacity={0.8}
        >
          <Ionicons name="compass" size={20} color={colors.white} />
          <Text style={styles.compassButtonText}>Open Compass</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xxl + spacing.md,
    paddingBottom: spacing.md,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
    color: colors.textCharcoalDark,
  },
  moreButton: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 120,
  },
  heroContainer: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.xl,
  },
  heroImage: {
    width: '100%',
    height: 384,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
  },
  heroImageStyle: {
    borderRadius: borderRadius.lg,
  },
  heroGradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  heroContent: {
    padding: spacing.lg,
    gap: spacing.sm,
  },
  activeBadge: {
    backgroundColor: 'rgba(255, 193, 7, 0.9)',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
    alignSelf: 'flex-start',
  },
  activeBadgeText: {
    fontSize: 10,
    fontWeight: typography.weights.bold,
    color: colors.white,
    letterSpacing: 1.5,
  },
  heroTitle: {
    fontSize: typography.sizes.xxxl + 4,
    fontWeight: typography.weights.bold,
    color: colors.white,
    lineHeight: 40,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  locationText: {
    fontSize: typography.sizes.sm,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  chapterInfo: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xxl,
    alignItems: 'center',
  },
  chapterLabel: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.bold,
    color: '#FFC107',
    letterSpacing: 1.5,
    marginBottom: spacing.sm,
    opacity: 0.8,
  },
  chapterDescription: {
    fontSize: typography.sizes.lg,
    lineHeight: 28,
    color: colors.textCharcoalMedium,
    textAlign: 'center',
  },
  timeline: {
    paddingHorizontal: spacing.lg,
    position: 'relative',
    marginLeft: spacing.lg,
  },
  timelineLine: {
    position: 'absolute',
    left: 35,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.md,
    marginBottom: spacing.xxl,
  },
  timelineIconCompleted: {
    width: 24,
    height: 24,
    borderRadius: borderRadius.full,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.textCharcoalMedium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timelineIconActive: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.full,
    backgroundColor: '#FFC107',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -4,
  },
  timelineContent: {
    flex: 1,
    paddingTop: spacing.xs,
  },
  timelineTitle: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.bold,
    color: colors.textCharcoalDark,
    marginBottom: 4,
  },
  timelineMeta: {
    fontSize: typography.sizes.sm,
    color: colors.textCharcoalMedium,
  },
  activeStageCard: {
    flex: 1,
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    marginTop: -8,
  },
  activeStageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  activeStageTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
    color: '#FFC107',
    flex: 1,
  },
  currentBadge: {
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    paddingHorizontal: spacing.xs,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
  },
  currentBadgeText: {
    fontSize: 10,
    fontWeight: typography.weights.bold,
    color: '#FFC107',
    letterSpacing: 1,
  },
  activeStageDescription: {
    fontSize: typography.sizes.sm,
    lineHeight: 20,
    color: colors.textCharcoalMedium,
    marginBottom: spacing.sm,
  },
  audioCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    padding: spacing.sm,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    marginTop: spacing.sm,
  },
  audioIcon: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  audioInfo: {
    flex: 1,
  },
  audioTitle: {
    fontSize: 10,
    fontWeight: typography.weights.bold,
    color: colors.textCharcoalDark,
    letterSpacing: 1,
    marginBottom: 2,
  },
  audioSubtitle: {
    fontSize: typography.sizes.xs,
    color: colors.textCharcoalMedium,
  },
  playButton: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.full,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  bottomAction: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    paddingBottom: spacing.lg,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  compassButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: '#FFC107',
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    shadowColor: '#FFC107',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 4,
  },
  compassButtonText: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.bold,
    color: colors.white,
  },
});
