import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/theme';

export default function ContactUs({ navigation }) {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

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
                    <Text style={styles.headerTitle}>Contact Us</Text>
                    <View style={{ width: 44 }} />
                </View>

                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                    <Text style={styles.intro}>
                        Have a specific question or found a bug? Send us a message and our team will get back to you within 24 hours.
                    </Text>

                    <View style={styles.form}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Subject</Text>
                            <TextInput
                                style={styles.input}
                                value={subject}
                                onChangeText={setSubject}
                                placeholder="What's this about?"
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Message</Text>
                            <TextInput
                                style={[styles.input, styles.textArea]}
                                value={message}
                                onChangeText={setMessage}
                                placeholder="Describe your issue or feedback in detail..."
                                multiline
                                numberOfLines={6}
                            />
                        </View>

                        <TouchableOpacity style={styles.sendBtn} onPress={() => navigation.goBack()}>
                            <Text style={styles.sendBtnText}>Send Message</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.otherTitle}>Other ways to reach us</Text>
                    <View style={styles.otherModes}>
                        <View style={styles.otherItem}>
                            <Ionicons name="mail-outline" size={20} color={colors.textMain} />
                            <Text style={styles.otherText}>support@questnepal.com</Text>
                        </View>
                        <View style={styles.otherItem}>
                            <Ionicons name="call-outline" size={20} color={colors.textMain} />
                            <Text style={styles.otherText}>+977 1 4455667</Text>
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
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: spacing.lg,
        paddingTop: 30,
        paddingBottom: 40,
    },
    intro: {
        fontSize: 16,
        color: colors.textSub,
        lineHeight: 24,
        marginBottom: 40,
    },
    form: {
        gap: 32,
        marginBottom: 60,
    },
    inputGroup: {
        gap: 12,
    },
    label: {
        fontSize: 12,
        fontWeight: '700',
        color: colors.textSub,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    input: {
        backgroundColor: colors.backgroundLight,
        padding: 16,
        borderRadius: 16,
        fontSize: 16,
    },
    textArea: {
        height: 150,
        textAlignVertical: 'top',
    },
    sendBtn: {
        backgroundColor: colors.primary,
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
    },
    sendBtnText: {
        color: colors.backgroundDark,
        fontSize: 16,
        fontWeight: 'bold',
    },
    otherTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.textMain,
        marginBottom: 20,
    },
    otherModes: {
        gap: 16,
    },
    otherItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    otherText: {
        fontSize: 15,
        color: colors.textSub,
    }
});
