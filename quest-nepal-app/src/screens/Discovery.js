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

export default function Discovery({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name="sunny" size={20} color={colors.textCharcoalDark} />
          <Text style={styles.headerTemp}>21°C</Text>
        </View>
        <Text style={styles.headerTitle}>Oct 24 • Kathmandu</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color={colors.textCharcoalDark} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Featured Quest */}
        <View style={styles.featuredCard}>
          <ImageBackground
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXuUoxlfDKfafofzDzTWDSRYo7RvhWG8YL_G7uxdWymx_feEhzMljZ_zT2rfbadX38SI71ePgbVIaJ6O8JQJEM7b2qrx0PdAQozNtWq4trNDsIqlxLWi_DtPIa3cb5oxqMfpylPyJ_2DMAewJSiJPl2H7CGqjkCJKQpE0VTTkOHqCQcYeteCTSNKOEiu0t3PeAFLtOshaEkxio2qBJ_ntWbYOXpVxaeY7MH2mXMHIdYe8T-4ShEzpt9gsfinYIfYNz3OatbD18hGs',
            }}
            style={styles.featuredImage}
            imageStyle={styles.featuredImageStyle}
          >
            <LinearGradient
              colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.1)', 'transparent']}
              style={styles.featuredGradient}
            >
              <View style={styles.recommendedBadge}>
                <Text style={styles.recommendedText}>Recommended</Text>
              </View>
            </LinearGradient>
          </ImageBackground>
          <View style={styles.featuredContent}>
            <View style={styles.featuredMeta}>
              <Ionicons name="image-outline" size={16} color={colors.textCharcoalDark} />
              <Text style={styles.featuredCategory}>Sunset Ritual</Text>
              <Text style={styles.featuredDot}>•</Text>
              <Text style={styles.featuredEffort}>Moderate Effort</Text>
            </View>
            <Text style={styles.featuredTitle}>
              The Golden Hour at Swayambhunath
            </Text>
            <Text style={styles.featuredDescription}>
              Witness the stupa bathed in amber light as the monkeys play and the
              city below begins to twinkle. A moment of pure serenity above the
              chaos.
            </Text>
            <TouchableOpacity style={styles.beginButton} activeOpacity={0.8}>
              <Text style={styles.beginButtonText}>Begin Journey</Text>
              <Ionicons name="arrow-forward" size={18} color={colors.textCharcoalDark} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Paths Unfolding */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Paths Unfolding</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.pathCard} activeOpacity={0.9}>
            <View style={styles.pathContent}>
              <View style={styles.pathMeta}>
                <Ionicons name="headset-outline" size={16} color={colors.primaryYellow} />
                <Text style={styles.pathCategory}>Audio Walk</Text>
              </View>
              <Text style={styles.pathTitle}>Echoes of the Durbar</Text>
              <Text style={styles.pathDescription}>
                Listen to the stones speak. A guided audio path through the ancient
                royal squares.
              </Text>
            </View>
            <ImageBackground
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCjdb6djVLpYcw4LmvsxK-0-8HamOHvM592zpcrh46Au-otcHEPPc0j9exM3Ty51s2cwyYZH1C8KeOcaeazIC_gvjXpkuTA3ro2TLvkNpMQ57hFsOnX0VKKNX_OHQpCsibiAILVRMh2Sk2YDUGfeTsr1M3yiLILgcSWkNUHslmsR0y7gzVBIVXUDTr-VGSfzMMzA6AAxYbqWdzTYWk7kJGXmNPSt6aLpXCaqjn08XGEVoOoqEBQaICdSQuvL-NBMqghFOm4sitUcQ',
              }}
              style={styles.pathImage}
              imageStyle={styles.pathImageStyle}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  headerTemp: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.medium,
    color: colors.textCharcoalDark,
  },
  headerTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
    color: colors.textCharcoalDark,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  featuredCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    marginBottom: spacing.xl,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 20,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  featuredImage: {
    width: '100%',
    aspectRatio: 4 / 3,
  },
  featuredImageStyle: {
    resizeMode: 'cover',
  },
  featuredGradient: {
    flex: 1,
    padding: spacing.md,
  },
  recommendedBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
    alignSelf: 'flex-start',
  },
  recommendedText: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.bold,
    color: colors.textCharcoalDark,
  },
  featuredContent: {
    padding: spacing.lg,
    gap: spacing.md,
  },
  featuredMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  featuredCategory: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.bold,
    color: colors.textCharcoalDark,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  featuredDot: {
    color: colors.textCharcoalMedium,
  },
  featuredEffort: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.medium,
    color: colors.textCharcoalMedium,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  featuredTitle: {
    fontSize: typography.sizes.xxl,
    fontWeight: typography.weights.bold,
    color: colors.textCharcoalDark,
    lineHeight: 28,
  },
  featuredDescription: {
    fontSize: typography.sizes.sm,
    lineHeight: 20,
    color: colors.textCharcoalMedium,
  },
  beginButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.primaryYellow,
    paddingVertical: spacing.sm + 2,
    borderRadius: borderRadius.lg,
    marginTop: spacing.xs,
  },
  beginButtonText: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.bold,
    color: colors.textCharcoalDark,
  },
  section: {
    gap: spacing.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: spacing.xs,
  },
  sectionTitle: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.bold,
    color: colors.textCharcoalDark,
  },
  viewAllText: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.bold,
    color: colors.textCharcoalDark,
    borderBottomWidth: 2,
    borderBottomColor: colors.primaryYellow,
    paddingBottom: 2,
  },
  pathCard: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  pathContent: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: 'space-between',
  },
  pathMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    marginBottom: spacing.sm,
  },
  pathCategory: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.bold,
    color: colors.textCharcoalDark,
  },
  pathTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
    color: colors.textCharcoalDark,
    lineHeight: 24,
    marginBottom: spacing.xs,
  },
  pathDescription: {
    fontSize: typography.sizes.xs,
    lineHeight: 18,
    color: colors.textCharcoalMedium,
  },
  pathImage: {
    width: 120,
    height: '100%',
  },
  pathImageStyle: {
    resizeMode: 'cover',
  },
});
