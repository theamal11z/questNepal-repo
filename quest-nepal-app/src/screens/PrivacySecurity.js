import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Switch,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/theme';

export default function PrivacySecurity({ navigation }) {
    const [incognito, setIncognito] = useState(false);
    const [analytics, setAnalytics] = useState(true);
    const [faceId, setFaceId] = useState(true);

    const SecurityItem = ({ icon, title, desc, value, onToggle }) => (
        <View style={styles.item}>
            <View style={styles.itemIcon}>
                <Ionicons name={icon} size={22} color={colors.textMain} />
            </View>
            <View style={styles.itemContent}>
                <Text style={styles.itemTitle}>{title}</Text>
                <Text style={styles.itemDesc}>{desc}</Text>
            </View>
            <Switch
                value={value}
                onValueChange={onToggle}
                trackColor={{ false: '#e0e0e0', true: colors.primary }}
                thumbColor="#ffffff"
            />
        </View>
    );

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
                    <Text style={styles.headerTitle}>Privacy & Security</Text>
                    <View style={{ width: 44 }} />
                </View>

                <ScrollView style={styles.scrollView}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Privacy</Text>
                        <SecurityItem
                            icon="eye-off-outline"
                            title="Incognito Mode"
                            desc="Hide your presence on shared trails."
                            value={incognito}
                            onToggle={setIncognito}
                        />
                        <SecurityItem
                            icon="bar-chart-outline"
                            title="Usage Analytics"
                            desc="Share anonymous data to help us improve."
                            value={analytics}
                            onToggle={setAnalytics}
                        />
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Security</Text>
                        <SecurityItem
                            icon="scan-outline"
                            title="Biometric Login"
                            desc="Use Face ID or Touch ID for access."
                            value={faceId}
                            onToggle={setFaceId}
                        />
                        <TouchableOpacity style={styles.actionItem}>
                            <View style={styles.itemIcon}>
                                <Ionicons name="key-outline" size={22} color={colors.textMain} />
                            </View>
                            <Text style={styles.actionTitle}>Change Password</Text>
                            <Ionicons name="chevron-forward" size={20} color={colors.textSub} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionItem}>
                            <View style={styles.itemIcon}>
                                <Ionicons name="shield-checkmark-outline" size={22} color={colors.textMain} />
                            </View>
                            <Text style={styles.actionTitle}>Two-Factor Authentication</Text>
                            <Ionicons name="chevron-forward" size={20} color={colors.textSub} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.infoBox}>
                        <Ionicons name="information-circle-outline" size={20} color={colors.textSub} />
                        <Text style={styles.infoText}>
                            Your data is encrypted using industry-standard protocols. Read our Privacy Policy for more details.
                        </Text>
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
    section: {
        paddingHorizontal: spacing.lg,
        paddingTop: 30,
        gap: 16,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: '700',
        color: colors.textSub,
        textTransform: 'uppercase',
        letterSpacing: 2,
        marginBottom: 8,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        paddingVertical: 8,
    },
    itemIcon: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: colors.backgroundLight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContent: {
        flex: 1,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.textMain,
    },
    itemDesc: {
        fontSize: 12,
        color: colors.textSub,
        marginTop: 2,
    },
    actionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        paddingVertical: 8,
    },
    actionTitle: {
        flex: 1,
        fontSize: 16,
        fontWeight: '600',
        color: colors.textMain,
    },
    infoBox: {
        margin: spacing.lg,
        marginTop: 40,
        padding: 16,
        backgroundColor: colors.backgroundLight,
        borderRadius: 16,
        flexDirection: 'row',
        gap: 12,
    },
    infoText: {
        flex: 1,
        fontSize: 12,
        color: colors.textSub,
        lineHeight: 18,
    }
});
