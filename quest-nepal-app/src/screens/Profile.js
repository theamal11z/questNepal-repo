import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/theme';

export default function Profile({ navigation }) {
  const stamps = [
    { id: 1, icon: 'business', name: 'Patan' },
    { id: 2, icon: 'image-outline', name: 'Nagarkot' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name="cloudy" size={20} color={colors.textMain} />
          <Text style={styles.headerTime}>10:42 AM</Text>
        </View>
        <TouchableOpacity style={styles.settingsButton}>
          <Ionicons name="settings-outline" size={24} color={colors.textMain} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>AS</Text>
            </View>
            <View style={styles.badge}>
              <Ionicons name="walk" size={16} color={colors.textMain} />
            </View>
          </View>
          <Text style={styles.name}>Aarav Sharma</Text>
          <Text style={styles.memberSince}>Walking the path since 2023</Text>

          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>QUESTS</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>8</Text>
              <Text style={styles.statLabel}>TEMPLES</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>45</Text>
              <Text style={styles.statLabel}>DAYS</Text>
            </View>
          </View>
        </View>

        {/* Spirit Stamps */}
        <View style={styles.stampsSection}>
          <View style={styles.stampsSectionHeader}>
            <Ionicons name="checkmark-circle" size={20} color={colors.primary} />
            <Text style={styles.stampsSectionTitle}>SPIRIT STAMPS</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.stampsScroll}
          >
            {stamps.map((stamp) => (
              <TouchableOpacity key={stamp.id} style={styles.stampItem} activeOpacity={0.7}>
                <View style={styles.stampCircle}>
                  <Ionicons
                    name={stamp.icon}
                    size={30}
                    color={colors.textSub}
                  />
                  <View style={styles.stampBorder} />
                </View>
                <Text style={styles.stampName}>{stamp.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
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
    paddingBottom: spacing.lg,
    backgroundColor: 'rgba(248, 248, 245, 0.9)',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  headerTime: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
    color: colors.textMain,
  },
  settingsButton: {
    padding: spacing.sm,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: spacing.sm,
    paddingBottom: 120,
  },
  profileSection: {
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
    gap: spacing.md,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: borderRadius.full,
    backgroundColor: colors.surfaceLight,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  avatarText: {
    fontSize: typography.sizes.xxxl,
    fontWeight: typography.weights.light,
    color: colors.textMain,
  },
  badge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: colors.backgroundLight,
  },
  name: {
    fontSize: typography.sizes.xxl,
    fontWeight: typography.weights.bold,
    color: colors.textMain,
  },
  memberSince: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
    color: colors.textSub,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xl,
    marginTop: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.bold,
    color: colors.textMain,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: typography.weights.bold,
    color: colors.textSub,
    letterSpacing: 2,
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 32,
    backgroundColor: 'rgba(140, 139, 95, 0.2)',
  },
  stampsSection: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
  },
  stampsSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  stampsSectionTitle: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.bold,
    color: colors.textMain,
    letterSpacing: 2,
  },
  stampsScroll: {
    gap: spacing.md,
    paddingRight: spacing.lg,
  },
  stampItem: {
    alignItems: 'center',
    gap: spacing.sm,
  },
  stampCircle: {
    width: 80,
    height: 80,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'rgba(140, 139, 95, 0.5)',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  stampBorder: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: borderRadius.full,
    borderWidth: 4,
    borderColor: 'rgba(140, 139, 95, 0.1)',
  },
  stampName: {
    fontSize: 10,
    fontWeight: typography.weights.medium,
    color: colors.textSub,
  },
});
