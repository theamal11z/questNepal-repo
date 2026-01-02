import React from 'react';
import { StatusBar } from 'expo-status-bar';
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

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            {/* Header */}
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
                    onPress={() => navigation.navigate('Notifications')}
                >
                    <Ionicons name="notifications" size={24} color={colors.textMain} />
                    <View style={styles.notificationDot} />
                </TouchableOpacity>
            </View>

            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Active Quest Card */}
                <TouchableOpacity
                    style={styles.activeQuestCard}
                    onPress={() => navigation.navigate('ActiveQuestDetails')}
                    activeOpacity={0.95}
                >
                    <ImageBackground
                        source={{
                            uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHlLCFYuP-T8cr9Nl7m9T8EsIeoq6j5FTxofayUJZKrD7IOkU_cmnxUqbCH6ERoAZBoAm1oik0WHi5vuh6LrHgxqNv-GXB0rVrpVzkQcMDE9sZuju1cy0cduAXhM7wc1h7VnH2qO-wV3EbNGg8Ya0zWAt29DmpDh5rRlq9nj_REwfNy8drwKaABwrQtJ0u8JM7WshMPJ0ScqukH3aGFhVyA6b0HUjkKK2x4TENkbno0NPABgn-BE2g6UkebevxdCOp8w14fB9Z-uY',
                        }}
                        style={styles.questImage}
                        imageStyle={styles.questImageStyle}
                    >
                        <LinearGradient
                            colors={['rgba(0,0,0,0.1)', 'transparent', 'rgba(0,0,0,0.8)']}
                            style={styles.questGradient}
                        >
                            <View style={styles.questContent}>
                                <View style={styles.activeQuestBadge}>
                                    <View style={styles.pulseDot} />
                                    <Text style={styles.activeQuestText}>ACTIVE QUEST</Text>
                                </View>
                                <Text style={styles.questTitle}>Whispers of the Old City</Text>
                                <Text style={styles.questChapter}>Chapter 3: The Golden Gate</Text>
                                <TouchableOpacity
                                    style={styles.continueButton}
                                    onPress={() => navigation.navigate('ContinueJourney')}
                                    activeOpacity={0.8}
                                >
                                    <Text style={styles.continueButtonText}>Continue Journey</Text>
                                    <Ionicons name="arrow-forward" size={18} color={colors.textMain} />
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                </TouchableOpacity>

                {/* Recent Memories */}
                <TouchableOpacity
                    style={styles.section}
                    onPress={() => navigation.navigate('JourneyTrail')}
                    activeOpacity={0.9}
                >
                    <View style={styles.sectionHeader}>
                        <Ionicons name="time-outline" size={20} color={colors.textSub} />
                        <Text style={styles.sectionTitle}>RECENT MEMORIES</Text>
                    </View>
                    <View style={styles.timeline}>
                        <View style={styles.timelineLine} />
                        <View style={styles.timelineItem}>
                            <View style={styles.timelineIcon}>
                                <Ionicons name="business" size={18} color={colors.textSub} />
                            </View>
                            <View style={styles.timelineContent}>
                                <Text style={styles.timelineTitle}>Pottery Square</Text>
                                <Text style={styles.timelineDate}>Yesterday</Text>
                            </View>
                        </View>
                        <View style={[styles.timelineItem, { opacity: 0.5 }]}>
                            <View style={styles.timelineIcon}>
                                <Ionicons name="image-outline" size={18} color={colors.textSub} />
                            </View>
                            <View style={styles.timelineContent}>
                                <Text style={styles.timelineTitle}>Nyatapola Temple</Text>
                                <Text style={styles.timelineDate}>2 days ago</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Paths Ahead */}
                <View style={styles.section}>
                    <View style={styles.pathsHeader}>
                        <Text style={styles.pathsTitle}>Paths Ahead</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Discovery')}>
                            <Text style={styles.viewAllText}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.pathsScroll}
                    >
                        <TouchableOpacity
                            style={styles.pathCard}
                            onPress={() => navigation.navigate('Discovery')}
                            activeOpacity={0.9}
                        >
                            <ImageBackground
                                source={{
                                    uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbNsJvM_t0ybLXAart_uMhoP9J5DWN-2YDiBE5nR04tsmMaIMSO-zVC8967myn9XyFBxulWakU84JfodiL3_jSsRQwREAA0RzG0BTl0CQp5FECkXeZDLcDvIk9wlwSxbiW-mLehl5xBKe6May6si92yGna9AuZ2eKFabButg0gRfybS3DaxhMA68bf7NGKy0JXmZOZmUtPaRO5WC6njoekodLrYSM8VHmAg2uzmAeUoS9XkQn7TzGpwJhEGm1lz3C07H2MywDedmg',
                                }}
                                style={styles.pathImage}
                                imageStyle={styles.pathImageStyle}
                            >
                                <LinearGradient
                                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                                    style={styles.pathGradient}
                                >
                                    <Text style={styles.pathCategory}>ADVENTURE</Text>
                                    <Text style={styles.pathTitle}>The Yeti's Trail</Text>
                                    <Text style={styles.pathMeta}>High Altitude • 5 Days</Text>
                                </LinearGradient>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.pathCard}
                            onPress={() => navigation.navigate('Discovery')}
                            activeOpacity={0.9}
                        >
                            <ImageBackground
                                source={{
                                    uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDh0Y6aCt8jS6BKlO5XvLdrbyOQeVNavlazddZRfYUHNxOPTsRiSNgHCdFEQkat0tzCg_3J0dXb9XfkUEy1ThJA63YizMPAbJff-666Mx9CSViMTVpKGF9Y0kQ3CEuP9nFGj0G1pArWQj9hQxLJGcSHMMMm_-EgryrdgTyhIXOtVdXumF76kLf353tT-n6lZZ8zgXo5APwOIrq8m6P_WW9J67H4EyMjyHNhiGkNQlGuznyyDIshn3FFaeDfmB0hDy0rlWoKiUcjVdU',
                                }}
                                style={styles.pathImage}
                                imageStyle={styles.pathImageStyle}
                            >
                                <LinearGradient
                                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                                    style={styles.pathGradient}
                                >
                                    <Text style={styles.pathCategory}>CULTURE</Text>
                                    <Text style={styles.pathTitle}>Spices of Thamel</Text>
                                    <Text style={styles.pathMeta}>Culinary • 3 Hours</Text>
                                </LinearGradient>
                            </ImageBackground>
                        </TouchableOpacity>
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
        position: 'relative',
        padding: spacing.sm,
    },
    notificationDot: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 8,
        height: 8,
        borderRadius: borderRadius.full,
        backgroundColor: colors.primary,
        borderWidth: 2,
        borderColor: colors.backgroundLight,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.sm,
        paddingBottom: 120,
    },
    activeQuestCard: {
        width: '100%',
        aspectRatio: 4 / 5,
        borderRadius: borderRadius.xl,
        overflow: 'hidden',
        marginBottom: spacing.xl,
    },
    questImage: {
        flex: 1,
        width: '100%',
    },
    questImageStyle: {
        borderRadius: borderRadius.xl,
    },
    questGradient: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    questContent: {
        padding: spacing.lg,
        gap: spacing.md,
    },
    activeQuestBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: borderRadius.full,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        alignSelf: 'flex-start',
    },
    pulseDot: {
        width: 8,
        height: 8,
        borderRadius: borderRadius.full,
        backgroundColor: colors.primary,
    },
    activeQuestText: {
        fontSize: typography.sizes.xs,
        fontWeight: typography.weights.semibold,
        color: colors.white,
        letterSpacing: 1.5,
    },
    questTitle: {
        fontSize: typography.sizes.xxxl,
        fontWeight: typography.weights.bold,
        color: colors.white,
        lineHeight: 36,
    },
    questChapter: {
        fontSize: typography.sizes.md,
        fontWeight: typography.weights.medium,
        color: 'rgba(255, 255, 255, 0.8)',
    },
    continueButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: spacing.sm,
        backgroundColor: colors.primary,
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.lg,
        borderRadius: borderRadius.full,
        alignSelf: 'flex-start',
        marginTop: spacing.sm,
    },
    continueButtonText: {
        fontSize: typography.sizes.sm,
        fontWeight: typography.weights.bold,
        color: colors.textMain,
    },
    section: {
        marginBottom: spacing.xl,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
        marginBottom: spacing.lg,
        opacity: 0.6,
    },
    sectionTitle: {
        fontSize: typography.sizes.sm,
        fontWeight: typography.weights.bold,
        color: colors.textMain,
        letterSpacing: 2,
    },
    timeline: {
        position: 'relative',
        paddingLeft: spacing.sm,
    },
    timelineLine: {
        position: 'absolute',
        left: 19,
        top: 8,
        bottom: 16,
        width: 2,
        backgroundColor: 'rgba(140, 139, 95, 0.2)',
        borderRadius: borderRadius.full,
    },
    timelineItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: spacing.lg,
        marginBottom: spacing.xl,
    },
    timelineIcon: {
        width: 40,
        height: 40,
        borderRadius: borderRadius.full,
        backgroundColor: colors.surfaceLight,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.05)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    timelineContent: {
        paddingTop: spacing.xs,
    },
    timelineTitle: {
        fontSize: typography.sizes.md,
        fontWeight: typography.weights.medium,
        color: colors.textMain,
        marginBottom: 4,
    },
    timelineDate: {
        fontSize: typography.sizes.sm,
        color: colors.textSub,
    },
    pathsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing.lg,
    },
    pathsTitle: {
        fontSize: typography.sizes.xl,
        fontWeight: typography.weights.bold,
        color: colors.textMain,
    },
    viewAllText: {
        fontSize: typography.sizes.sm,
        fontWeight: typography.weights.medium,
        color: colors.textSub,
    },
    pathsScroll: {
        gap: spacing.md,
        paddingRight: spacing.lg,
    },
    pathCard: {
        width: 256,
        height: 320,
        borderRadius: borderRadius.xl,
        overflow: 'hidden',
    },
    pathImage: {
        flex: 1,
        width: '100%',
    },
    pathImageStyle: {
        borderRadius: borderRadius.xl,
    },
    pathGradient: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: spacing.lg,
    },
    pathCategory: {
        fontSize: 10,
        fontWeight: typography.weights.bold,
        color: colors.primary,
        letterSpacing: 1.5,
        marginBottom: spacing.xs,
    },
    pathTitle: {
        fontSize: typography.sizes.lg,
        fontWeight: typography.weights.bold,
        color: colors.white,
        lineHeight: 24,
        marginBottom: spacing.xs,
    },
    pathMeta: {
        fontSize: typography.sizes.xs,
        color: 'rgba(255, 255, 255, 0.6)',
    },
});
