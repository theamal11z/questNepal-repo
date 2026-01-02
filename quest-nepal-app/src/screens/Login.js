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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/theme';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
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
        {/* Decorative Background Blurs */}
        <View style={styles.blurTop} />
        <View style={styles.blurBottom} />

        {/* Logo and Title */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Ionicons name="compass" size={40} color={colors.primary} />
            <View style={styles.badge}>
              <Ionicons name="lock-closed" size={14} color={colors.textMain} />
            </View>
          </View>
          <Text style={styles.title}>Quest Nepal</Text>
          <Text style={styles.subtitle}>Log in to continue your journey</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>EMAIL ADDRESS</Text>
            <View style={styles.inputContainer}>
              <Ionicons
                name="mail-outline"
                size={20}
                color={colors.textSub}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="nomad@questnepal.com"
                placeholderTextColor="rgba(140, 139, 95, 0.3)"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>PASSWORD</Text>
              <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <Ionicons
                name="key-outline"
                size={20}
                color={colors.textSub}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="••••••••••••"
                placeholderTextColor="rgba(140, 139, 95, 0.3)"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              >
                <Ionicons
                  name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                  size={20}
                  color={colors.textSub}
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Resume Quest</Text>
            <Ionicons name="arrow-forward" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>No account yet? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <View style={styles.signupLink}>
              <Text style={styles.signupText}>Start a new game</Text>
              <Ionicons name="chevron-forward" size={16} color={colors.textMain} />
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.madeIn}>MADE IN KATHMANDU</Text>
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
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xxl,
  },
  blurTop: {
    position: 'absolute',
    top: -100,
    right: 0,
    width: 500,
    height: 500,
    backgroundColor: colors.primary,
    opacity: 0.05,
    borderRadius: borderRadius.full,
  },
  blurBottom: {
    position: 'absolute',
    bottom: 0,
    left: -100,
    width: 400,
    height: 400,
    backgroundColor: colors.textSub,
    opacity: 0.05,
    borderRadius: borderRadius.full,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: colors.textMain,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
    transform: [{ rotate: '3deg' }],
  },
  badge: {
    position: 'absolute',
    bottom: -8,
    right: -8,
    width: 28,
    height: 28,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: colors.backgroundLight,
  },
  title: {
    fontSize: typography.sizes.xxxl,
    fontWeight: typography.weights.bold,
    color: colors.textMain,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: typography.sizes.base,
    fontWeight: typography.weights.medium,
    color: colors.textSub,
  },
  form: {
    gap: spacing.lg,
    marginBottom: spacing.lg,
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
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
  },
  forgotText: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.medium,
    color: colors.textSub,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  inputIcon: {
    marginRight: spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.medium,
    color: colors.textMain,
  },
  eyeIcon: {
    padding: spacing.sm,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.textMain,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    marginTop: spacing.md,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.bold,
    color: colors.primary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.md,
  },
  footerText: {
    fontSize: typography.sizes.sm,
    color: colors.textSub,
  },
  signupLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  signupText: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.bold,
    color: colors.textMain,
  },
  madeIn: {
    fontSize: 10,
    fontWeight: typography.weights.bold,
    color: colors.textSub,
    letterSpacing: 3,
    textAlign: 'center',
    marginTop: spacing.xl,
    opacity: 0.3,
  },
});
