import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/theme';

export default function Settings({ navigation }) {
    const [pushNotifications, setPushNotifications] = React.useState(true);
    const [locationServices, setLocationServices] = React.useState(true);

    const SettingItem = ({ icon, title, type = 'arrow', value, onToggle }) => (
        <TouchableOpacity
            style={styles.settingItem}
            activeOpacity={type === 'toggle' ? 1 : 0.7}
        >
            <View style={styles.settingIcon}>
                <Ionicons name={icon} size={20} color={colors.textCharcoalDark} />
            </View>
            <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>{title}</Text>
            </View>
            {type === 'toggle' ? (
                <Switch
                    value={value}
                    onValueChange={onToggle}
                    trackColor={{ false: '#e0e0e0', true: colors.primary }}
                    thumbColor={colors.white}
                    ios_backgroundColor="#e0e0e0"
                />
            ) : (
                <Ionicons name="chevron-forward" size={20} color={colors.textSub} />
            )}
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back" size={24} color={colors.textCharcoalDark} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Settings</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Account Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>ACCOUNT</Text>
                    <View style={styles.sectionContent}>
                        <SettingItem
                            icon="person-outline"
                            title="Edit Profile"
                            onPress={() => navigation.navigate('EditProfile')}
                        />
                        <SettingItem
                            icon="shield-checkmark-outline"
                            title="Privacy & Security"
                            onPress={() => navigation.navigate('PrivacySecurity')}
                        />
                        <SettingItem
                            icon="card-outline"
                            title="Payment Methods"
                            onPress={() => navigation.navigate('PaymentMethods')}
                        />
                    </View>
                </View>

                {/* Preferences Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>PREFERENCES</Text>
                    <View style={styles.sectionContent}>
                        <View style={styles.settingItem}>
                            <View style={styles.settingIcon}>
                                <Ionicons name="notifications-outline" size={22} color={colors.textMain} />
                            </View>
                            <Text style={styles.settingTitle}>Push Notifications</Text>
                            <Switch
                                value={pushNotifications}
                                onValueChange={setPushNotifications}
                                trackColor={{ false: '#e0e0e0', true: colors.primary }}
                                thumbColor="#ffffff"
                            />
                        </View>
                        <View style={styles.settingItem}>
                            <View style={styles.settingIcon}>
                                <Ionicons name="location-outline" size={22} color={colors.textMain} />
                            </View>
                            <Text style={styles.settingTitle}>Location Services</Text>
                            <Switch
                                value={locationServices}
                                onValueChange={setLocationServices}
                                trackColor={{ false: '#e0e0e0', true: colors.primary }}
                                thumbColor="#ffffff"
                            />
                        </View>
                        <SettingItem
                            icon="language-outline"
                            title="Language"
                            showArrow
                            onPress={() => navigation.navigate('LanguageSettings')}
                        />
                    </View>
                </View>

                {/* Support Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>SUPPORT</Text>
                    <View style={styles.sectionContent}>
                        <SettingItem
                            icon="help-circle-outline"
                            title="Help Center"
                            onPress={() => navigation.navigate('HelpCenter')}
                        />
                        <SettingItem
                            icon="mail-outline"
                            title="Contact Us"
                            onPress={() => navigation.navigate('ContactUs')}
                        />
                        <SettingItem
                            icon="information-circle-outline"
                            title="About Quest Nepal"
                            onPress={() => navigation.navigate('AboutApp')}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.logoutButton}
                    activeOpacity={0.8}
                    onPress={() => navigation.reset({
                        index: 0,
                        routes: [{ name: 'OnboardingWelcome' }],
                    })}
                >
                    <Text style={styles.logoutText}>Log Out</Text>
                </TouchableOpacity>

                <Text style={styles.versionText}>Version 1.0.0 (Build 54)</Text>
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
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
    backButton: {
        padding: spacing.xs,
    },
    headerTitle: {
        fontSize: typography.sizes.lg,
        fontWeight: typography.weights.bold,
        color: colors.textMain,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        padding: spacing.lg,
        paddingBottom: spacing.xxl,
    },
    sectionTitle: {
        fontSize: 10,
        fontWeight: typography.weights.bold,
        color: colors.textSub,
        letterSpacing: 2,
        marginBottom: spacing.sm,
        marginLeft: spacing.xs,
        marginTop: spacing.md,
    },
    section: {
        backgroundColor: colors.white,
        borderRadius: borderRadius.xl,
        padding: spacing.xs,
        marginBottom: spacing.lg,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)',
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.02,
        shadowRadius: 8,
        elevation: 2,
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: spacing.md,
        gap: spacing.md,
    },
    settingIcon: {
        width: 32,
        height: 32,
        borderRadius: borderRadius.full,
        backgroundColor: colors.surfaceLight,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)',
    },
    settingContent: {
        flex: 1,
    },
    settingTitle: {
        fontSize: typography.sizes.md,
        fontWeight: typography.weights.medium,
        color: colors.textMain,
    },
    logoutButton: {
        backgroundColor: '#fff1f0',
        borderRadius: borderRadius.full,
        padding: spacing.md,
        alignItems: 'center',
        marginTop: spacing.lg,
        borderWidth: 1,
        borderColor: '#ffccc7',
    },
    logoutText: {
        color: '#cf1322',
        fontWeight: typography.weights.bold,
        fontSize: typography.sizes.md,
    },
    versionText: {
        textAlign: 'center',
        marginTop: spacing.xl,
        color: colors.textSub,
        fontSize: 10,
    }
});
