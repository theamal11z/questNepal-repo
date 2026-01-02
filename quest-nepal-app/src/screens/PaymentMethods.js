import React from 'react';
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

export default function PaymentMethods({ navigation }) {
    const cards = [
        { id: 1, type: 'visa', last4: '4242', expiry: '12/26', primary: true },
        { id: 2, type: 'mastercard', last4: '8890', expiry: '09/25', primary: false },
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
                    <Text style={styles.headerTitle}>Payment Methods</Text>
                    <TouchableOpacity>
                        <Ionicons name="add" size={32} color={colors.primary} />
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Your Cards</Text>
                        {cards.map(card => (
                            <TouchableOpacity key={card.id} style={styles.cardItem}>
                                <View style={styles.cardIcon}>
                                    <Ionicons
                                        name={card.type === 'visa' ? 'card' : 'card-outline'}
                                        size={24}
                                        color={colors.textMain}
                                    />
                                </View>
                                <View style={styles.cardInfo}>
                                    <Text style={styles.cardName}>
                                        {card.type.charAt(0).toUpperCase() + card.type.slice(1)} •••• {card.last4}
                                    </Text>
                                    <Text style={styles.cardExpiry}>Expires {card.expiry}</Text>
                                </View>
                                {card.primary && (
                                    <View style={styles.primaryBadge}>
                                        <Text style={styles.primaryText}>PRIMARY</Text>
                                    </View>
                                )}
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Digital Wallets</Text>
                        <TouchableOpacity style={styles.walletItem}>
                            <View style={styles.walletIcon}>
                                <Ionicons name="logo-apple" size={24} color={colors.textMain} />
                            </View>
                            <Text style={styles.walletName}>Apple Pay</Text>
                            <Ionicons name="chevron-forward" size={20} color={colors.textSub} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.walletItem}>
                            <View style={styles.walletIcon}>
                                <Ionicons name="wallet-outline" size={24} color={colors.textMain} />
                            </View>
                            <Text style={styles.walletName}>E-Sewa</Text>
                            <Text style={styles.linkText}>Link</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.addMethodBtn}>
                        <Text style={styles.addMethodText}>Add New Payment Method</Text>
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
        paddingTop: 30,
        paddingBottom: 40,
    },
    section: {
        marginBottom: 32,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: '700',
        color: colors.textSub,
        textTransform: 'uppercase',
        letterSpacing: 2,
        marginBottom: 16,
    },
    cardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.backgroundLight,
        padding: 16,
        borderRadius: 20,
        marginBottom: 12,
        gap: 16,
    },
    cardIcon: {
        width: 48,
        height: 48,
        borderRadius: 14,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardInfo: {
        flex: 1,
    },
    cardName: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.textMain,
    },
    cardExpiry: {
        fontSize: 12,
        color: colors.textSub,
        marginTop: 2,
    },
    primaryBadge: {
        backgroundColor: colors.primary + '20',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    primaryText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: colors.primary,
    },
    walletItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        gap: 16,
    },
    walletIcon: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: colors.backgroundLight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    walletName: {
        flex: 1,
        fontSize: 16,
        fontWeight: '600',
        color: colors.textMain,
    },
    linkText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.primary,
    },
    addMethodBtn: {
        marginTop: 20,
        backgroundColor: colors.backgroundDark,
        padding: 18,
        borderRadius: 20,
        alignItems: 'center',
    },
    addMethodText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
