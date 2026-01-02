import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/theme';

export default function HelpCenter({ navigation }) {
    const categories = [
        { id: 1, icon: 'map-outline', name: 'Questing' },
        { id: 2, icon: 'person-outline', name: 'Account' },
        { id: 3, icon: 'wallet-outline', name: 'Payments' },
        { id: 4, icon: 'shield-outline', name: 'Security' },
    ];

    const faqs = [
        "How do I start a new quest?",
        "What are Spirit Stamps?",
        "Can I play offline?",
        "How to delete my account?",
    ];

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
                    <Text style={styles.headerTitle}>Help Center</Text>
                    <View style={{ width: 44 }} />
                </View>

                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                    <View style={styles.searchBox}>
                        <Ionicons name="search" size={20} color={colors.textSub} />
                        <TextInput
                            placeholder="Search help articles..."
                            style={styles.searchInput}
                        />
                    </View>

                    <Text style={styles.sectionTitle}>Categories</Text>
                    <View style={styles.categoriesGrid}>
                        {categories.map(cat => (
                            <TouchableOpacity key={cat.id} style={styles.categoryCard}>
                                <View style={styles.categoryIcon}>
                                    <Ionicons name={cat.icon} size={24} color={colors.primary} />
                                </View>
                                <Text style={styles.categoryName}>{cat.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <Text style={styles.sectionTitle}>Top Questions</Text>
                    <View style={styles.faqList}>
                        {faqs.map((q, i) => (
                            <TouchableOpacity key={i} style={styles.faqItem}>
                                <Text style={styles.faqText}>{q}</Text>
                                <Ionicons name="chevron-forward" size={18} color={colors.textSub} />
                            </TouchableOpacity>
                        ))}
                    </View>

                    <TouchableOpacity
                        style={styles.contactBtn}
                        onPress={() => navigation.navigate('ContactUs')}
                    >
                        <Text style={styles.contactBtnText}>Still need help? Contact Us</Text>
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
        paddingTop: 20,
        paddingBottom: 40,
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.backgroundLight,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 16,
        gap: 12,
        marginBottom: 32,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: '700',
        color: colors.textSub,
        textTransform: 'uppercase',
        letterSpacing: 2,
        marginBottom: 20,
    },
    categoriesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: -8,
        marginBottom: 32,
    },
    categoryCard: {
        width: '50%',
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    categoryIcon: {
        width: 56,
        height: 56,
        borderRadius: 16,
        backgroundColor: colors.primary + '15',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    categoryName: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.textMain,
    },
    faqList: {
        gap: 12,
        marginBottom: 40,
    },
    faqItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
    faqText: {
        fontSize: 15,
        color: colors.textMain,
    },
    contactBtn: {
        padding: 20,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: colors.primary,
        alignItems: 'center',
    },
    contactBtnText: {
        color: colors.primary,
        fontSize: 16,
        fontWeight: 'bold',
    }
});
