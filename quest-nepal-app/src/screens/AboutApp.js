import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/theme';

export default function AboutApp({ navigation }) {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="chevron-back" size={28} color={colors.textMain} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>About</Text>
                    <View style={{ width: 44 }} />
                </View>

                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                    <View style={styles.logoSection}>
                        <View style={styles.logoBox}>
                            <Ionicons name="map" size={60} color={colors.primary} />
                        </View>
                        <Text style={styles.appName}>Quest Nepal</Text>
                        <Text style={styles.version}>Version 2.4.0 (Build 124)</Text>
                    </View>

                    <View style={styles.content}>
                        <Text style={styles.para}>
                            Quest Nepal is more than just a navigation app. It's a digital companion for explorers, history buffs, and spiritual seekers. Our mission is to preserve and share the rich cultural heritage of Nepal through immersive, gamified experiences.
                        </Text>
                        <Text style={styles.para}>
                            Founded in 2023, we've helped over 50,000 users discover the hidden stories of our ancient streets.
                        </Text>
                    </View>

                    <View style={styles.links}>
                        <TouchableOpacity style={styles.linkItem}>
                            <Text style={styles.linkText}>Terms of Service</Text>
                            <Ionicons name="chevron-forward" size={18} color={colors.textSub} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.linkItem}>
                            <Text style={styles.linkText}>Privacy Policy</Text>
                            <Ionicons name="chevron-forward" size={18} color={colors.textSub} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.linkItem}>
                            <Text style={styles.linkText}>Open Source Licenses</Text>
                            <Ionicons name="chevron-forward" size={18} color={colors.textSub} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.copyright}>© 2026 Quest Nepal Pvt. Ltd.</Text>
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
        borderRadius: 12,
        backgroundColor: colors.backgroundLight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.textMain,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: spacing.lg,
        paddingTop: 40,
        paddingBottom: 40,
    },
    logoSection: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logoBox: {
        width: 120,
        height: 120,
        borderRadius: 30,
        backgroundColor: colors.backgroundDark,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        elevation: 10,
    },
    appName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.textMain,
    },
    version: {
        fontSize: 14,
        color: colors.textSub,
        marginTop: 4,
    },
    content: {
        marginBottom: 40,
    },
    para: {
        fontSize: 16,
        color: 'rgba(0,0,0,0.6)',
        lineHeight: 24,
        marginBottom: 20,
    },
    links: {
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.05)',
    },
    linkItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
    linkText: {
        fontSize: 16,
        color: colors.textMain,
    },
    copyright: {
        marginTop: 40,
        textAlign: 'center',
        fontSize: 12,
        color: colors.textSub,
    }
});
