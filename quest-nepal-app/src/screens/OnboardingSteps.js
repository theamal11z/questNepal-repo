import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/theme';

const { width, height } = Dimensions.get('window');

const slides = [
    {
        id: 1,
        title: 'Discover Ancient Paths',
        subtitle: 'Walk the hidden trails.',
        description: 'Walk the hidden trails of the Kathmandu Valley, guided by stories forgotten by time.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHlLCFYuP-T8cr9Nl7m9T8EsIeoq6j5FTxofayUJZKrD7IOkU_cmnxUqbCH6ERoAZBoAm1oik0WHi5vuh6LrHgxqNv-GXB0rVrpVzkQcMDE9sZuju1cy0cduAXhM7wc1h7VnH2qO-wV3EbNGg8Ya0zWAt29DmpDh5rRlq9nj_REwfNy8drwKaABwrQtJ0u8JM7WshMPJ0ScqukH3aGFhVyA6b0HUjkKK2x4TENkbno0NPABgn-BE2g6UkebevxdCOp8w14fB9Z-uY', // Using one of the provided images for slide 1 as well
        navText: 'Skip',
        buttonText: 'Next',
        showTempleIcon: false,
    },
    {
        id: 2,
        title: 'Seek the unseen,',
        subtitle: 'embrace the quest.',
        description: 'Every path holds a secret, every moment a story. Your journey is not about points, but presence.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6u95IxmKaDG6lovkPsku4sE6rqdSxsDZg98ixsMm3gJ7I0oji24-zT7vCPCFQofc8xFIOJ_gcvF2qXYIc0MOk8iAAE87NITx_bDkQW_pIJRtPfWwknnjVWLBejaIySrQLXp4s-6ZoyTRzmhQKX2bB2Qja1o8rpx2Ac3h6swFyezDHJ4K-oPYE6cePu2I9CU20brPEQLDc8LnEW5TiSVvedVm4usIvHeZa2Vu00NWe17SbC7-0uDf4wV3KX-NA11ZTBhuZzainEN4',
        navText: 'Skip',
        buttonText: 'Continue',
        showTempleIcon: true,
    },
    {
        id: 3,
        title: 'Living history,',
        subtitle: 'all around you.',
        description: 'Prepare for your journey. Engage with centuries of culture and tradition as you step into the narrative.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHlLCFYuP-T8cr9Nl7m9T8EsIeoq6j5FTxofayUJZKrD7IOkU_cmnxUqbCH6ERoAZBoAm1oik0WHi5vuh6LrHgxqNv-GXB0rVrpVzkQcMDE9sZuju1cy0cduAXhM7wc1h7VnH2qO-wV3EbNGg8Ya0zWAt29DmpDh5rRlq9nj_REwfNy8drwKaABwrQtJ0u8JM7WshMPJ0ScqukH3aGFhVyA6b0HUjkKK2x4TENkbno0NPABgn-BE2g6UkebevxdCOp8w14fB9Z-uY',
        navText: 'Log In',
        buttonText: 'Start Exploring',
        showTempleIcon: true,
    }
];

export default function OnboardingSteps({ navigation }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;

    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            navigation.replace('Login');
        }
    };

    const handleNavAction = (action) => {
        if (action === 'Log In') {
            navigation.replace('Login');
        } else {
            // Skip
            navigation.replace('Login');
        }
    }

    const renderItem = ({ item }) => (
        <View style={styles.slide}>
            <ImageBackground
                source={{ uri: item.image }}
                style={styles.image}
                resizeMode="cover"
            >
                <LinearGradient
                    colors={['rgba(0,0,0,0.2)', 'transparent', 'rgba(35, 34, 15, 0.9)']}
                    style={styles.gradient}
                    locations={[0, 0.5, 0.9]}
                >
                    <SafeAreaView style={styles.safeArea}>
                        {/* Navbar */}
                        <View style={styles.navBar}>
                            {item.showTempleIcon ? (
                                <View style={styles.iconContainer}>
                                    <Ionicons name="business" size={20} color={colors.primary} />
                                </View>
                            ) : (
                                <View style={{ width: 40 }} />
                            )}

                            <TouchableOpacity onPress={() => handleNavAction(item.navText)}>
                                <Text style={styles.navText}>{item.navText}</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Content */}
                        <View style={styles.contentContainer}>
                            <View style={styles.divider} />

                            <View style={styles.textWrapper}>
                                <Text style={styles.title}>
                                    {item.title}{'\n'}
                                    <Text style={styles.subtitle}>{item.subtitle}</Text>
                                </Text>
                                <Text style={styles.description}>{item.description}</Text>
                            </View>
                        </View>

                        {/* Footer / Button Area for this specific slide design */}
                        <View style={styles.footerContainer}>
                            <TouchableOpacity
                                style={styles.actionButton}
                                onPress={handleNext}
                                activeOpacity={0.9}
                            >
                                <View style={[styles.arrowCircle, currentIndex === 2 ? { backgroundColor: 'transparent' } : null]}>
                                    {currentIndex < 2 ? (
                                        <Ionicons name="arrow-forward" size={24} color={colors.white} />
                                    ) : (
                                        <Ionicons name="compass-outline" size={24} color={colors.white} />
                                    )}
                                </View>
                                <View style={styles.btnTextContainer}>
                                    <Text style={[styles.btnTitle, currentIndex === 2 ? { color: colors.primary } : null]}>{item.buttonText}</Text>
                                    <Text style={styles.btnSubtitle}>
                                        {currentIndex < 2 ? 'Next: Your Rewards' : 'Enter the Gateway'}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </LinearGradient>
            </ImageBackground>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={slides}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                bounces={false}
                keyExtractor={(item) => item.id.toString()}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                scrollEventThrottle={32}
            />

            {/* Global Pagination Indicators (Overlay) */}
            <View style={styles.paginationContainer}>
                {slides.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            currentIndex === index && styles.dotActive
                        ]}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundDark,
    },
    slide: {
        width,
        height,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    gradient: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        justifyContent: 'space-between',
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.md,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: borderRadius.full,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderColor: 'rgba(255,255,255,0.1)',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navText: {
        fontSize: 10, // text-xs
        fontWeight: '600', // font-semibold
        letterSpacing: 1.5, // tracking-widest
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.4)',
    },
    contentContainer: {
        paddingHorizontal: spacing.xl,
        marginBottom: spacing.xxl,
    },
    divider: {
        width: 32, // w-8
        height: 2,
        backgroundColor: colors.primary,
        borderRadius: borderRadius.full,
        marginBottom: spacing.xl,
    },
    textWrapper: {
        gap: spacing.md,
    },
    title: {
        fontSize: 36, // text-4xl / 5xl
        fontWeight: '300', // font-light
        color: colors.white,
        lineHeight: 40, // leading-tight
        letterSpacing: -0.5,
    },
    subtitle: {
        fontSize: 36,
        color: 'rgba(255,255,255,0.5)',
        fontStyle: 'italic',
        fontWeight: '200', // font-extralight
    },
    description: {
        fontSize: typography.sizes.lg,
        color: '#9ca3af', // text-gray-400
        fontWeight: '300', // font-light
        lineHeight: 28,
        maxWidth: 300,
        paddingTop: spacing.xs,
    },
    footerContainer: {
        paddingHorizontal: spacing.xl,
        paddingBottom: 80, // Space for pagination at very bottom
        alignItems: 'flex-start',
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.lg,
    },
    arrowCircle: {
        width: 64, // w-16
        height: 64, // h-16
        borderRadius: borderRadius.full,
        backgroundColor: colors.surfaceDark, // bg-surface-dark
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        // shadow...
    },
    btnTextContainer: {
        alignItems: 'flex-start',
        gap: 2,
    },
    btnTitle: {
        fontSize: typography.sizes.sm,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: colors.white,
        letterSpacing: 1.5,
    },
    btnSubtitle: {
        fontSize: 11,
        color: 'rgba(255,255,255,0.3)',
        fontWeight: '500',
        letterSpacing: 0.5,
    },
    paginationContainer: {
        position: 'absolute',
        bottom: spacing.xl,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 12, // gap-3
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: borderRadius.full,
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    dotActive: {
        backgroundColor: colors.primary,
        // shadow...
    }
});
