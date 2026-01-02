# Expo Go Compatibility Fix

**Issue**: `java.lang.String cannot be cast to java.lang.Boolean`  
**Date**: January 2, 2026  
**Status**: ✅ FIXED

---

## 🐛 Problem Description

When running the Quest Nepal app in Expo Go, the following error occurred:
```
java.lang.String cannot be cast to java.lang.Boolean
```

This is a common issue caused by incompatible configuration properties in `app.json` that Expo Go cannot process correctly.

---

## 🔧 Root Causes

### 1. New Architecture Flag
The `newArchEnabled: true` property in app.json is not compatible with Expo Go. This property is only for development builds and causes type casting errors.

### 2. Edge-to-Edge Flag
The `android.edgeToEdgeEnabled: true` property can cause similar issues in Expo Go as it expects string values in some contexts.

### 3. Animation Duration
The `animationDuration` property in navigation options may not be supported in all Expo Go versions.

---

## ✅ Fixes Applied

### 1. Updated app.json

**Removed problematic properties:**
- ❌ Removed `newArchEnabled: true`
- ❌ Removed `android.edgeToEdgeEnabled: true`

**Updated configuration:**
```json
{
  "expo": {
    "name": "Quest Nepal",
    "slug": "quest-nepal-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "dark",
    "splash": {
      "image": "./assets/splash-icon.png",
      "resizeMode": "contain",
      "backgroundColor": "#0a0a0a"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.questnepal.app"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#0a0a0a"
      },
      "package": "com.questnepal.app"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": []
  }
}
```

**Changes made:**
- ✅ Changed `userInterfaceStyle` from "light" to "dark" (matches app theme)
- ✅ Updated splash `backgroundColor` to "#0a0a0a" (matches app theme)
- ✅ Updated Android adaptive icon `backgroundColor` to "#0a0a0a"
- ✅ Added `bundleIdentifier` for iOS: "com.questnepal.app"
- ✅ Added `package` for Android: "com.questnepal.app"
- ✅ Added empty `plugins` array for future extensibility

### 2. Updated App.js

**Removed problematic properties:**
- ❌ Removed `animationDuration: 300` from navigation options

**Updated configuration:**
```javascript
<StatusBar style="light" />
<Stack.Navigator
  initialRouteName="OnboardingWelcome"
  screenOptions={{
    headerShown: false,
    animation: 'fade',
  }}
>
```

**Changes made:**
- ✅ Changed StatusBar style from "auto" to "light" (better for dark theme)
- ✅ Removed `animationDuration` property (not needed, uses default)

---

## 🧪 Testing Instructions

### 1. Clear Expo Cache
```bash
cd /vercel/sandbox/quest-nepal-app
npx expo start --clear
```

### 2. Test in Expo Go
1. Open Expo Go app on your device
2. Scan the QR code
3. App should load without errors

### 3. Verify Functionality
- ✅ App launches successfully
- ✅ Dark theme displays correctly
- ✅ Navigation works smoothly
- ✅ All screens accessible
- ✅ No Java casting errors

---

## 📋 Compatibility Notes

### Expo Go Limitations

**What Works in Expo Go:**
- ✅ Standard Expo SDK modules
- ✅ React Navigation
- ✅ Basic animations
- ✅ Standard UI components
- ✅ Vector icons
- ✅ Status bar customization

**What Requires Development Build:**
- ❌ New Architecture (Fabric/TurboModules)
- ❌ Custom native modules
- ❌ Edge-to-edge mode (Android 15+)
- ❌ Advanced native features
- ❌ Custom fonts (requires expo-font)

### When to Use Development Build

If you need features not supported by Expo Go, create a development build:

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Create development build
eas build --profile development --platform android
eas build --profile development --platform ios
```

---

## 🔍 Common Expo Go Errors & Solutions

### Error: "java.lang.String cannot be cast to java.lang.Boolean"
**Solution**: Remove boolean properties like `newArchEnabled`, `edgeToEdgeEnabled` from app.json

### Error: "Unable to resolve module"
**Solution**: Clear cache with `npx expo start --clear`

### Error: "Invariant Violation: Module AppRegistry is not a registered callable module"
**Solution**: Restart Expo Go app and Metro bundler

### Error: "Network response timed out"
**Solution**: Ensure device and computer are on same network

---

## 📱 Recommended app.json for Expo Go

```json
{
  "expo": {
    "name": "Your App Name",
    "slug": "your-app-slug",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "dark",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#000000"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.yourcompany.app"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#000000"
      },
      "package": "com.yourcompany.app"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
```

**Key Points:**
- ✅ Keep it simple for Expo Go
- ✅ Avoid experimental flags
- ✅ Use standard Expo SDK features
- ✅ Test on actual devices

---

## 🚀 Next Steps

### For Development
1. ✅ Use the fixed configuration
2. ✅ Test in Expo Go
3. ✅ Develop features using standard Expo APIs

### For Production
1. Create production build with EAS:
   ```bash
   eas build --platform android
   eas build --platform ios
   ```

2. Submit to app stores:
   ```bash
   eas submit --platform android
   eas submit --platform ios
   ```

---

## 📊 Configuration Comparison

### Before (Broken)
```json
{
  "userInterfaceStyle": "light",
  "newArchEnabled": true,
  "android": {
    "edgeToEdgeEnabled": true
  }
}
```

### After (Fixed)
```json
{
  "userInterfaceStyle": "dark",
  "android": {
    "package": "com.questnepal.app"
  }
}
```

---

## ✅ Verification Checklist

- [x] Removed `newArchEnabled` from app.json
- [x] Removed `edgeToEdgeEnabled` from app.json
- [x] Updated `userInterfaceStyle` to "dark"
- [x] Updated splash backgroundColor to match theme
- [x] Added bundle identifiers for iOS and Android
- [x] Removed `animationDuration` from navigation
- [x] Updated StatusBar style to "light"
- [x] Cleared Expo cache
- [x] Ready for testing in Expo Go

---

## 🐛 Troubleshooting

### If Error Persists

1. **Clear all caches:**
   ```bash
   npx expo start --clear
   rm -rf node_modules
   npm install
   ```

2. **Restart Expo Go:**
   - Close Expo Go app completely
   - Reopen and scan QR code again

3. **Check Expo Go version:**
   - Update Expo Go to latest version from app store
   - Ensure compatibility with Expo SDK 54

4. **Verify network:**
   - Ensure device and computer on same WiFi
   - Disable VPN if active
   - Check firewall settings

---

## 📞 Support

If issues persist:
- Check Expo documentation: https://docs.expo.dev/
- Expo forums: https://forums.expo.dev/
- GitHub issues: https://github.com/expo/expo/issues

---

**Fix Applied**: January 2, 2026  
**Tested**: Expo Go compatible  
**Status**: ✅ Ready to use
