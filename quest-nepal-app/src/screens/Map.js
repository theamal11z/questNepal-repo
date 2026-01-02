import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/theme';

export default function Map({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Map Background Pattern */}
      <View style={styles.mapBackground}>
        <View style={styles.gridPattern} />
        <View style={styles.pathCurve} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color={colors.textSub} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for quests..."
            placeholderTextColor={colors.textSub}
          />
        </View>
      </View>

      {/* Active Location Marker */}
      <TouchableOpacity
        style={styles.markerContainer}
        onPress={() => navigation.navigate('ActiveQuestDetails')}
        activeOpacity={0.8}
      >
        <View style={styles.markerPulse} />
        <View style={styles.marker}>
          <Ionicons name="business" size={24} color={colors.primary} />
        </View>
        <View style={styles.markerLabel}>
          <Text style={styles.markerLabelText}>Selected</Text>
        </View>
      </TouchableOpacity>

      {/* Bottom Card */}
      <View style={styles.bottomCard}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('ActiveQuestDetails')}
          activeOpacity={0.9}
        >
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHlLCFYuP-T8cr9Nl7m9T8EsIeoq6j5FTxofayUJZKrD7IOkU_cmnxUqbCH6ERoAZBoAm1oik0WHi5vuh6LrHgxqNv-GXB0rVrpVzkQcMDE9sZuju1cy0cduAXhM7wc1h7VnH2qO-wV3EbNGg8Ya0zWAt29DmpDh5rRlq9nj_REwfNy8drwKaABwrQtJ0u8JM7WshMPJ0ScqukH3aGFhVyA6b0HUjkKK2x4TENkbno0NPABgn-BE2g6UkebevxdCOp8w14fB9Z-uY',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardContent}>
            <View style={styles.cardMeta}>
              <Text style={styles.cardCategory}>SACRED SITE</Text>
              <View style={styles.cardDot} />
              <Text style={styles.cardDistance}>0.5 mi away</Text>
            </View>
            <Text style={styles.cardTitle}>Boudhanath Stupa</Text>
            <Text style={styles.cardDescription}>
              Lighting ceremony starts at sunset.
            </Text>
          </View>
          <TouchableOpacity style={styles.cardButton}>
            <Ionicons name="arrow-forward" size={20} color={colors.textMain} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2ee',
  },
  mapBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#f0efe9',
  },
  gridPattern: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.4,
  },
  pathCurve: {
    position: 'absolute',
    top: '30%',
    left: -50,
    right: -50,
    height: 300,
    borderTopWidth: 20,
    borderTopColor: '#e3e1d5',
    borderRadius: 200,
    transform: [{ rotate: '-10deg' }],
  },
  searchContainer: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xxl + spacing.xl,
    paddingBottom: spacing.md,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
    color: colors.textMain,
  },
  markerContainer: {
    position: 'absolute',
    top: '42%',
    left: '45%',
    alignItems: 'center',
    zIndex: 10,
  },
  markerPulse: {
    position: 'absolute',
    width: 128,
    height: 128,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    opacity: 0.05,
  },
  marker: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.full,
    backgroundColor: colors.textMain,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  markerLabel: {
    marginTop: spacing.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    backgroundColor: colors.textMain,
    borderRadius: borderRadius.full,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  markerLabelText: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.bold,
    color: colors.primary,
  },
  bottomCard: {
    position: 'absolute',
    bottom: 120,
    left: spacing.lg,
    right: spacing.lg,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  cardImage: {
    width: 64,
    height: 64,
    borderRadius: borderRadius.lg,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  cardContent: {
    flex: 1,
  },
  cardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    marginBottom: 4,
  },
  cardCategory: {
    fontSize: 10,
    fontWeight: typography.weights.bold,
    color: colors.primary,
    letterSpacing: 1.5,
  },
  cardDot: {
    width: 4,
    height: 4,
    borderRadius: borderRadius.full,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  cardDistance: {
    fontSize: 10,
    fontWeight: typography.weights.medium,
    color: colors.textSub,
  },
  cardTitle: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.bold,
    color: colors.textMain,
    marginBottom: 2,
  },
  cardDescription: {
    fontSize: typography.sizes.xs,
    color: colors.textSub,
  },
  cardButton: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    backgroundColor: colors.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
