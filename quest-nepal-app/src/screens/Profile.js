import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/theme';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function Profile({ navigation }) {
  const stamps = [
    { id: 1, icon: 'business', name: 'Patan', date: 'Oct 2023', color: colors.primary },
    { id: 2, icon: 'image-outline', name: 'Nagarkot', date: 'Nov 2023', color: '#8E8B5F' },
    { id: 3, icon: 'bonfire-outline', name: 'Thamel', date: 'Dec 2023', color: '#D4AF37' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Header - Blended with Home Screen */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name="sunny" size={20} color={colors.textMain} />
          <Text style={styles.headerTime}>10:42 AM</Text>
        </View>
        <View style={styles.headerCenter}>
          <Ionicons name="location" size={20} color={colors.textSub} />
          <Text style={styles.headerLocation}>Patan Durbar Square</Text>
        </View>
        <TouchableOpacity
          style={styles.notificationButton}
          onPress={() => navigation.navigate('Settings')}
        >
          <Ionicons name="settings-outline" size={24} color={colors.textMain} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Info Section */}
        <View style={styles.profileHero}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>AS</Text>
            </View>
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>LVL 12</Text>
            </View>
          </View>
          <Text style={styles.userName}>Aarav Sharma</Text>
          <Text style={styles.userBio}>Exploring the hidden narratives of the Kathmandu Valley, one temple at a time.</Text>
        </View>

        {/* Stats Section - Replicating Home Card Style */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Quests</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>84km</Text>
            <Text style={styles.statLabel}>Traversed</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2.4k</Text>
            <Text style={styles.statLabel}>Essence</Text>
          </View>
        </View>

        {/* Spirit Stamps - Immersive Grid */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Spirit Stamps</Text>
            <TouchableOpacity onPress={() => { }}>
              <Text style={styles.viewMoreText}>Gallery</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.stampsGrid}>
            {stamps.map((stamp) => (
              <TouchableOpacity key={stamp.id} style={styles.stampCard} activeOpacity={0.9}>
                <LinearGradient
                  colors={['#ffffff', '#f8f8f5']}
                  style={styles.stampInner}
                >
                  <View style={[styles.stampIcon, { backgroundColor: stamp.color + '15' }]}>
                    <Ionicons name={stamp.icon} size={28} color={stamp.color} />
                  </View>
                  <Text style={styles.stampName}>{stamp.name}</Text>
                  <Text style={styles.stampDate}>{stamp.date}</Text>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Achievement Snippet */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.achievementSnippet} activeOpacity={0.8}>
            <View style={styles.achievementIconContainer}>
              <Ionicons name="trophy" size={24} color={colors.primary} />
            </View>
            <View style={styles.achievementInfo}>
              <Text style={styles.achievementTitle}>Pathfinder</Text>
              <Text style={styles.achievementDesc}>Discovered 5 hidden shrines</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.textSub} />
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
    paddingBottom: spacing.lg,
    backgroundColor: 'rgba(248, 248, 245, 0.8)',
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
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  headerLocation: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.bold,
    color: colors.textMain,
  },
  notificationButton: {
    padding: spacing.sm,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: 40,
  },
  profileHero: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: spacing.lg,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.surfaceDark,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: '300',
    color: colors.white,
    letterSpacing: 2,
  },
  levelBadge: {
    position: 'absolute',
    bottom: -8,
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: borderRadius.md,
    borderWidth: 2,
    borderColor: colors.backgroundLight,
  },
  levelText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.textMain,
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textMain,
    marginBottom: spacing.xs,
  },
  userBio: {
    fontSize: 14,
    color: colors.textSub,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderRadius: borderRadius.xxl,
    marginBottom: spacing.xxl,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textMain,
  },
  statLabel: {
    fontSize: 10,
    color: colors.textSub,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginTop: 4,
  },
  divider: {
    width: 1,
    height: '60%',
    backgroundColor: 'rgba(0,0,0,0.05)',
    alignSelf: 'center',
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textMain,
  },
  viewMoreText: {
    fontSize: 14,
    color: colors.textSub,
    fontWeight: '600',
  },
  stampsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  stampCard: {
    flex: 1,
    aspectRatio: 0.8,
  },
  stampInner: {
    flex: 1,
    borderRadius: borderRadius.xl,
    padding: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.03)',
    elevation: 2,
  },
  stampIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  stampName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.textMain,
    textAlign: 'center',
  },
  stampDate: {
    fontSize: 10,
    color: colors.textSub,
    marginTop: 2,
  },
  achievementSnippet: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.03)',
  },
  achievementIconContainer: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.lg,
    backgroundColor: 'rgba(249, 245, 6, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  achievementInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textMain,
  },
  achievementDesc: {
    fontSize: 12,
    color: colors.textSub,
  },
});
