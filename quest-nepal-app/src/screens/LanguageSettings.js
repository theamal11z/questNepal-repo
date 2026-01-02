import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/theme';

export default function LanguageSettings({ navigation }) {
    const [selected, setSelected] = useState('en');

    const languages = [
        { id: 'en', name: 'English', native: 'English' },
        { id: 'np', name: 'Nepali', native: 'नेपाली' },
        { id: 'hi', name: 'Hindi', native: 'हिन्दी' },
        { id: 'fr', name: 'French', native: 'Français' },
        { id: 'de', name: 'German', native: 'Deutsch' },
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
                    <Text style={styles.headerTitle}>Language</Text>
                    <View style={{ width: 44 }} />
                </View>

                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                    <Text style={styles.sectionTitle}>App Language</Text>
                    <View style={styles.list}>
                        {languages.map((lang) => (
                            <TouchableOpacity
                                key={lang.id}
                                style={styles.item}
                                onPress={() => setSelected(lang.id)}
                            >
                                <View style={styles.itemTextContainer}>
                                    <Text style={styles.itemName}>{lang.name}</Text>
                                    <Text style={styles.itemNative}>{lang.native}</Text>
                                </View>
                                {selected === lang.id && (
                                    <Ionicons name="checkmark-circle" size={24} color={colors.primary} />
                                )}
                            </TouchableOpacity>
                        ))}
                    </View>
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
        paddingTop: 30,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: '700',
        color: colors.textSub,
        textTransform: 'uppercase',
        letterSpacing: 2,
        marginBottom: 20,
    },
    list: {
        gap: 8,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: colors.backgroundLight,
        borderRadius: 20,
        marginBottom: 8,
    },
    itemTextContainer: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.textMain,
    },
    itemNative: {
        fontSize: 12,
        color: colors.textSub,
        marginTop: 2,
    }
});
