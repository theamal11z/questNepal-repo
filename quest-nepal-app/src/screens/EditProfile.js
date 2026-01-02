import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/theme';

export default function EditProfile({ navigation }) {
    const [name, setName] = useState('Aarav Sharma');
    const [bio, setBio] = useState('Exploring the hidden narratives of the Kathmandu Valley, one temple at a time.');

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
                    <Text style={styles.headerTitle}>Edit Profile</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.saveText}>Save</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                    <View style={styles.avatarSection}>
                        <View style={styles.avatarWrapper}>
                            <View style={styles.avatar}>
                                <Text style={styles.avatarText}>AS</Text>
                            </View>
                            <TouchableOpacity style={styles.editBadge}>
                                <Ionicons name="camera" size={20} color={colors.white} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.changePhotoText}>Change Profile Photo</Text>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Full Name</Text>
                            <TextInput
                                style={styles.input}
                                value={name}
                                onChangeText={setName}
                                placeholder="Enter your name"
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Bio</Text>
                            <TextInput
                                style={[styles.input, styles.textArea]}
                                value={bio}
                                onChangeText={setBio}
                                placeholder="Tell us about your journey"
                                multiline
                                numberOfLines={4}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Location</Text>
                            <View style={styles.inputWithIcon}>
                                <Ionicons name="location-outline" size={20} color={colors.textSub} />
                                <TextInput
                                    style={[styles.input, { flex: 1, borderBottomWidth: 0 }]}
                                    value="Kathmandu, Nepal"
                                    editable={false}
                                />
                            </View>
                            <View style={styles.divider} />
                        </View>
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
    saveText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.primary,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: spacing.lg,
        paddingTop: 30,
    },
    avatarSection: {
        alignItems: 'center',
        marginBottom: 40,
    },
    avatarWrapper: {
        position: 'relative',
        marginBottom: 16,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: colors.surfaceDark,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        fontSize: 32,
        color: colors.white,
        fontWeight: '300',
    },
    editBadge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#ffffff',
    },
    changePhotoText: {
        fontSize: 14,
        color: colors.primary,
        fontWeight: '600',
    },
    form: {
        gap: 24,
    },
    inputGroup: {
        gap: 8,
    },
    label: {
        fontSize: 12,
        fontWeight: '700',
        color: colors.textSub,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    input: {
        fontSize: 16,
        color: colors.textMain,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    inputWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.05)',
    }
});
