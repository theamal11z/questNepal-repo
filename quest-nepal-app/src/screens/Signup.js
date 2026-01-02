import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/theme';

export default function Signup({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSignup = () => {
    navigation.navigate('MainTabs');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header with Back Button */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={20} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.helpText}>Help</Text>
          </TouchableOpacity>
        </View>

        {/* Hero Image */}
        <View style={styles.heroContainer}>
          <ImageBackground
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbNsJvM_t0ybLXAart_uMhoP9J5DWN-2YDiBE5nR04tsmMaIMSO-zVC8967myn9XyFBxulWakU84JfodiL3_jSsRQwREAA0RzG0BTl0CQp5FECkXeZDLcDvIk9wlwSxbiW-mLehl5xBKe6May6si92yGna9AuZ2eKFabButg0gRfybS3DaxhMA68bf7NGKy0JXmZOZmUtPaRO5WC6njoekodLrYSM8VHmAg2uzmAeUoS9XkQn7TzGpwJhEGm1lz3C07H2MywDedmg',
            }}
            style={styles.heroImage}
            resizeMode="cover"
          >
            <LinearGradient
              colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.2)', colors.backgroundLight]}
              style={styles.heroGradient}
            >
              <View style={styles.badge}>
                <Ionicons name="image-outline" size={16} color={colors.primary} />
                <Text style={styles.badgeText}>QUEST NEPAL</Text>
              </View>
              <Text style={styles.heroTitle}>
                Begin Your{'\n'}Journey
              </Text>
            </LinearGradient>
          </ImageBackground>
        </View>

        {/* Form Content */}
        <View style={styles.content}>
          <Text style={styles.description}>
            Create an account to track your progress and discover hidden paths.
          </Text>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>ADVENTURER NAME</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="e.g. Tenzing"
                  placeholderTextColor="rgba(140, 139, 95, 0.3)"
                  value={username}
                  onChangeText={setUsername}
                />
                <Ionicons name="person-outline" size={20} color={colors.textSub} />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>EMAIL ADDRESS</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="you@example.com"
                  placeholderTextColor="rgba(140, 139, 95, 0.3)"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <Ionicons name="mail-outline" size={20} color={colors.textSub} />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>PASSWORD</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor="rgba(140, 139, 95, 0.3)"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons
                    name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                    size={20}
                    color={colors.textSub}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => setAgreedToTerms(!agreedToTerms)}
              >
                {agreedToTerms && (
                  <Ionicons name="checkmark" size={14} color={colors.black} />
                )}
              </TouchableOpacity>
              <Text style={styles.checkboxText}>
                I agree to the{' '}
                <Text style={styles.link}>Terms of Journey</Text> and{' '}
                <Text style={styles.link}>Privacy Policy</Text>.
              </Text>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={handleSignup}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Create Account</Text>
              <Ionicons name="arrow-forward" size={20} color={colors.textMain} />
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have a pass? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={styles.loginLink}>
                <Text style={styles.loginText}>Login</Text>
                <View style={styles.dot} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xxl + spacing.md,
    paddingBottom: spacing.lg,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpText: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  heroContainer: {
    height: 300,
    width: '100%',
  },
  heroImage: {
    flex: 1,
    width: '100%',
  },
  heroGradient: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    backgroundColor: 'rgba(249, 245, 6, 0.2)',
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: 'rgba(249, 245, 6, 0.2)',
    alignSelf: 'flex-start',
    marginBottom: spacing.md,
  },
  badgeText: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.bold,
    color: colors.primary,
    letterSpacing: 1.5,
  },
  heroTitle: {
    fontSize: typography.sizes.huge,
    fontWeight: typography.weights.bold,
    color: colors.textMain,
    lineHeight: 44,
  },
  content: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  description: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.medium,
    color: colors.textSub,
    lineHeight: 26,
    marginBottom: spacing.xl,
  },
  form: {
    gap: spacing.lg,
  },
  inputGroup: {
    gap: spacing.sm,
  },
  label: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.bold,
    color: colors.textSub,
    letterSpacing: 2,
    marginLeft: spacing.md,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceLight,
    borderRadius: borderRadius.xl,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  input: {
    flex: 1,
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.medium,
    color: colors.textMain,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    paddingHorizontal: spacing.sm,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.textSub,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  checkboxText: {
    flex: 1,
    fontSize: typography.sizes.xs,
    color: colors.textSub,
    lineHeight: 18,
  },
  link: {
    textDecorationLine: 'underline',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    marginTop: spacing.md,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
    color: colors.textMain,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  footerText: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
    color: colors.textSub,
  },
  loginLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  loginText: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.bold,
    color: colors.textMain,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
  },
});
