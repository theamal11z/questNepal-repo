import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/theme';

export default function JourneyTrail({ navigation }) {
  const memories = [
    {
      id: 1,
      title: 'The Sound of Brass',
      date: 'Oct 24',
      location: 'Patan',
      description:
        'Discovered the hidden craftsman in the alleyway. The resonance of the singing bowls lingered for hours.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCaLc7blWLp1NY2SYqen5soN0sV3zJjQTB_t03K1_C-quShod6XiuPvgng52h93G4H1DYW1XC3uEeuEnRdZOwBccdDQ8y_Plr-o8YRi-nJfeiniZi9xSK-g68M2nMMhS_eOUK9ajo2cKGd63vlrdnJINTqRcb-EfFbPe_bbSC1bF4EQairPbLthf6-kyT8f-PEFTO8ZEvz8EdET7zqv5zPYjWIJxegrdErmNlMFoWRskuGskclBqV1e7O54j45_gKesQnnvUPyuXi4',
      stamp: 'Patan',
    },
    {
      id: 2,
      title: 'Stone Tap Offering',
      date: 'Sep 15',
      location: 'Lalitpur',
      description:
        'The water flows eternally at Manga Hiti. Observed a quiet moment of gratitude with the locals.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCB4kiw9u3HTdSJAt9CGQZuv7eCtEV-79hzeXgQeqxmlr4Tw4goJcPTckirpLcmGbSb8ALh2075ZkK9ibesmj55Md_hKTev5IeWwXuw9teuC6QAYStJoQDzht-dbgQ633B5G_42N5YV1R0RtJ9bQbEiZMvR3fRLbbRmu9yuLBUpLmBKWrArABY7Opy3rmdWMeStuvQO1B_CajR6aT_EKs_MAiuJYAsDuXCksmE39GvFUIxTx5IgfzD0uR6mMebkJrYmvNwgxYpkLU0',
      stamp: 'Seen',
    },
  ];

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
        <Text style={styles.headerTitle}>Journey Trail</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={24} color={colors.textCharcoalMedium} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>
            Collected{'\n'}Moments
          </Text>
          <Text style={styles.subtitle}>
            Reflections of the paths you have walked and the stories gathered along
            the way.
          </Text>
        </View>

        {/* Stats */}
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>03</Text>
            <Text style={styles.statLabel}>JOURNEYS</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>12km</Text>
            <Text style={styles.statLabel}>WALKED</Text>
          </View>
        </View>

        {/* Memory Cards */}
        <View style={styles.memoriesContainer}>
          {memories.map((memory) => (
            <TouchableOpacity
              key={memory.id}
              style={styles.memoryCard}
              activeOpacity={0.9}
            >
              <ImageBackground
                source={{ uri: memory.image }}
                style={styles.memoryImage}
                imageStyle={styles.memoryImageStyle}
              />
              <View style={styles.memoryContent}>
                <View style={styles.memoryHeader}>
                  <View style={styles.memoryInfo}>
                    <Text style={styles.memoryMeta}>
                      {memory.date} • {memory.location}
                    </Text>
                    <Text style={styles.memoryTitle}>{memory.title}</Text>
                  </View>
                  <View style={styles.stamp}>
                    <Text style={styles.stampText}>{memory.stamp}</Text>
                  </View>
                </View>
                <Text style={styles.memoryDescription}>{memory.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgMain,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xxl + spacing.md,
    paddingBottom: spacing.md,
    backgroundColor: 'rgba(253, 250, 247, 0.95)',
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
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.medium,
    color: colors.textCharcoalMedium,
    letterSpacing: 0.5,
  },
  filterButton: {
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
    paddingBottom: spacing.xxl,
  },
  titleSection: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },
  title: {
    fontSize: typography.sizes.xxxl,
    fontWeight: typography.weights.light,
    color: colors.textCharcoalDark,
    lineHeight: 36,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.sizes.sm,
    lineHeight: 20,
    color: colors.textCharcoalMedium,
    maxWidth: 280,
    opacity: 0.8,
  },
  stats: {
    flexDirection: 'row',
    gap: spacing.xxl,
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.lg,
    marginBottom: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
    marginHorizontal: spacing.md,
  },
  statItem: {
    gap: 4,
  },
  statValue: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.regular,
    color: colors.textCharcoalDark,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: typography.weights.regular,
    color: colors.textCharcoalMedium,
    letterSpacing: 2,
  },
  memoriesContainer: {
    paddingHorizontal: spacing.lg,
    gap: spacing.lg,
  },
  memoryCard: {
    backgroundColor: colors.surfaceCard,
    borderRadius: borderRadius.xl,
    padding: spacing.md,
    flexDirection: 'row',
    gap: spacing.lg,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  memoryImage: {
    width: 80,
    height: 96,
    borderRadius: borderRadius.md,
    overflow: 'hidden',
  },
  memoryImageStyle: {
    borderRadius: borderRadius.md,
  },
  memoryContent: {
    flex: 1,
    justifyContent: 'center',
  },
  memoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.xs,
  },
  memoryInfo: {
    flex: 1,
  },
  memoryMeta: {
    fontSize: 10,
    fontWeight: typography.weights.bold,
    color: colors.textCharcoalMedium,
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  memoryTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.medium,
    color: colors.textCharcoalDark,
  },
  stamp: {
    width: 36,
    height: 36,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: 'rgba(195, 160, 79, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
    transform: [{ rotate: '12deg' }],
  },
  stampText: {
    fontSize: 8,
    fontWeight: typography.weights.bold,
    color: '#c3a04f',
    letterSpacing: 1,
  },
  memoryDescription: {
    fontSize: typography.sizes.xs,
    lineHeight: 18,
    color: colors.textCharcoalMedium,
  },
});
