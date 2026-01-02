import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/theme';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function Notifications({ navigation }) {
    const notifications = [
        {
            id: 1,
            type: 'quest',
            title: 'Path of the Ancients',
            message: 'A new chapter has been revealed in Patan Durbar Square.',
            time: 'Just now',
            read: false,
            color: '#FFD700',
        },
        {
            id: 2,
            type: 'reward',
            title: 'Essence Received',
            message: 'You earned 50 Essence for completing the "Silent Bell" mystery.',
            time: '2 hours ago',
            read: false,
            color: '#4ADE80',
        },
        {
            id: 3,
            type: 'social',
            title: 'Friend Activity',
            message: 'Siddharth reached Level 15 in the Everest Base Camp quest.',
            time: '1 day ago',
            read: true,
            color: '#60A5FA',
        },
    ];

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <SafeAreaView style={styles.safeArea}>
                {/* Premium Header */}
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="chevron-back" size={28} color={colors.textMain} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Notifications</Text>
                    <TouchableOpacity style={styles.markReadButton}>
                        <Ionicons name="checkmark-done-outline" size={24} color={colors.textSub} />
                    </TouchableOpacity>
                </View>

                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Recent Updates</Text>
                        <View style={styles.unreadBadge}>
                            <Text style={styles.unreadText}>2 New</Text>
                        </View>
                    </View>

                    {notifications.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={[styles.notificationCard, !item.read && styles.unreadCard]}
                            activeOpacity={0.8}
                        >
                            <View style={[styles.typeIndicator, { backgroundColor: item.color }]} />
                            <View style={styles.contentRow}>
                                <View style={[styles.iconBox, { backgroundColor: item.color + '15' }]}>
                                    <Ionicons
                                        name={
                                            item.type === 'quest' ? 'map' :
                                                item.type === 'reward' ? 'sparkles' : 'people'
                                        }
                                        size={22}
                                        color={item.color}
                                    />
                                </View>
                                <View style={styles.textContainer}>
                                    <View style={styles.titleRow}>
                                        <Text style={[styles.notifTitle, !item.read && styles.unreadTitle]}>{item.title}</Text>
                                        <Text style={styles.notifTime}>{item.time}</Text>
                                    </View>
                                    <Text style={styles.notifMessage} numberOfLines={2}>
                                        {item.message}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}

                    <TouchableOpacity style={styles.clearAllButton}>
                        <Text style={styles.clearAllText}>Clear All History</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    safeArea: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.md,
    },
    backButton: {
        width: 44,
        height: 44,
        borderRadius: borderRadius.md,
        backgroundColor: colors.backgroundLight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.textMain,
    },
    markReadButton: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.lg,
        paddingBottom: 40,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.textSub,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    unreadBadge: {
        backgroundColor: colors.primary,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    unreadText: {
        fontSize: 10,
        fontWeight: '800',
        color: colors.backgroundDark,
    },
    notificationCard: {
        backgroundColor: colors.backgroundLight,
        borderRadius: 20,
        padding: 16,
        marginBottom: 16,
        flexDirection: 'row',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.03)',
    },
    unreadCard: {
        backgroundColor: '#ffffff',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        borderColor: 'rgba(249, 245, 6, 0.2)',
    },
    typeIndicator: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: 4,
    },
    contentRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 16,
    },
    iconBox: {
        width: 48,
        height: 48,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    notifTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.textMain,
    },
    unreadTitle: {
        fontWeight: '800',
    },
    notifTime: {
        fontSize: 12,
        color: colors.textSub,
    },
    notifMessage: {
        fontSize: 14,
        color: 'rgba(0,0,0,0.6)',
        lineHeight: 20,
    },
    clearAllButton: {
        marginTop: 20,
        padding: 16,
        alignItems: 'center',
    },
    clearAllText: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.textSub,
    },
});
