# Quest Nepal - Deployment Guide

## 🚀 Repository Information

**GitHub Repository**: https://github.com/blackbox-remote/remote-code-user-MtWS8-1k.git
**Branch**: `agent/review-the-html-file-that-is-html-version-of-app-n-1649`
**Status**: ✅ All code committed and ready to push

---

## 📦 Project Overview

This is a complete **Expo React Native** mobile application for Quest Nepal - a location-based narrative journey experience.

### Tech Stack
- **Framework**: Expo SDK 52
- **Language**: JavaScript (React Native)
- **Navigation**: React Navigation 7.x
- **UI**: Custom components with premium design system
- **Platform**: iOS, Android, Web

---

## 🛠️ Local Development Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Expo CLI (optional, but recommended)
- iOS Simulator (Mac only) or Android Emulator

### Installation Steps

```bash
# Clone the repository
git clone https://github.com/blackbox-remote/remote-code-user-MtWS8-1k.git quest-nepal-app
cd quest-nepal-app

# Checkout the correct branch
git checkout agent/review-the-html-file-that-is-html-version-of-app-n-1649

# Install dependencies
npm install

# Start the development server
npm start
```

### Running on Different Platforms

```bash
# iOS Simulator (Mac only)
npm run ios

# Android Emulator
npm run android

# Web Browser
npm run web
```

### Using Expo Go App
1. Install Expo Go on your mobile device
2. Run `npm start`
3. Scan the QR code with:
   - iOS: Camera app
   - Android: Expo Go app

---

## 📱 Application Structure

```
quest-nepal-app/
├── App.js                      # Main entry point
├── index.js                    # Expo entry
├── app.json                    # Expo configuration
├── package.json                # Dependencies
├── assets/                     # Images and icons
│   ├── icon.png
│   ├── splash-icon.png
│   ├── adaptive-icon.png
│   └── favicon.png
└── src/
    ├── constants/
    │   └── theme.js           # Design system & colors
    ├── navigation/
    │   └── MainTabs.js        # Bottom tab navigation
    └── screens/
        ├── OnboardingWelcome.js
        ├── Login.js
        ├── Signup.js
        ├── Home.js
        ├── ActiveQuestDetails.js
        ├── ContinueJourney.js
        ├── JourneyTrail.js
        ├── Discovery.js
        ├── Map.js
        ├── Profile.js
        └── Scan.js
```

---

## 🎨 Design System

### Color Palette
- **Primary**: `#f9f506` (Yellow accent)
- **Background**: `#0a0a0a` (Deep black)
- **Surface**: `#1a1a1a` (Card background)
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#999999`
- **Border**: `#333333`

### Typography
- **Display**: 32px, Bold
- **Title**: 24px, Bold
- **Heading**: 20px, Semibold
- **Body**: 16px, Regular
- **Caption**: 14px, Regular
- **Small**: 12px, Regular

### Spacing System
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- xxl: 48px

---

## 🧭 Screen Flow

### Authentication Flow
1. **Onboarding Welcome** → Login/Signup
2. **Login** → Home
3. **Signup** → Home

### Main Navigation (Bottom Tabs)
- **Home** (House icon)
- **Journey Trail** (Map icon)
- **Scan** (Center floating button)
- **Discovery** (Compass icon)
- **Profile** (User icon)

### Journey Flow
1. **Home** → Active Quest Card → **Active Quest Details**
2. **Active Quest Details** → Continue Button → **Continue Journey**
3. **Continue Journey** → Complete Stage → Back to Home

---

## 🔧 Configuration Files

### app.json
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
    "platforms": ["ios", "android", "web"]
  }
}
```

### package.json Scripts
- `npm start` - Start Expo development server
- `npm run android` - Run on Android emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run in web browser

---

## 📦 Dependencies

### Core Dependencies
- `expo` - ^52.0.0
- `react` - 18.3.1
- `react-native` - 0.76.5
- `@react-navigation/native` - ^7.0.13
- `@react-navigation/native-stack` - ^7.1.10
- `@react-navigation/bottom-tabs` - ^7.2.0
- `react-native-screens` - ~4.4.0
- `react-native-safe-area-context` - 4.12.0

---

## 🚀 Deployment Options

### 1. Expo Application Services (EAS)

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure EAS
eas build:configure

# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android

# Submit to App Store
eas submit --platform ios

# Submit to Google Play
eas submit --platform android
```

### 2. Manual Build

#### iOS (requires Mac)
```bash
npx expo prebuild
cd ios
pod install
open QuestNepal.xcworkspace
# Build in Xcode
```

#### Android
```bash
npx expo prebuild
cd android
./gradlew assembleRelease
# APK will be in android/app/build/outputs/apk/release/
```

### 3. Web Deployment

```bash
# Build for web
npx expo export:web

# Deploy to Vercel
npm install -g vercel
vercel --prod

# Or deploy to Netlify
npm install -g netlify-cli
netlify deploy --prod --dir web-build
```

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] Onboarding flow works
- [ ] Login/Signup navigation
- [ ] Bottom tab navigation
- [ ] Home screen displays active quest
- [ ] Quest details screen shows timeline
- [ ] Continue journey screen functional
- [ ] All screens render without errors
- [ ] Transitions are smooth (300-1000ms)
- [ ] Touch targets are comfortable (40-48px)
- [ ] Text is readable on dark background

### Testing on Physical Device
1. Install Expo Go app
2. Run `npm start`
3. Scan QR code
4. Test all screens and interactions

---

## 📝 Environment Variables

Currently, the app uses mock data. For production:

1. Create `.env` file:
```env
API_BASE_URL=https://api.questnepal.com
GOOGLE_MAPS_API_KEY=your_key_here
EXPO_PUBLIC_API_KEY=your_expo_key
```

2. Install dotenv:
```bash
npm install react-native-dotenv
```

3. Configure in `babel.config.js`

---

## 🐛 Troubleshooting

### Common Issues

**Metro bundler cache issues:**
```bash
npx expo start --clear
```

**iOS build issues:**
```bash
cd ios && pod install && cd ..
npx expo start --ios
```

**Android build issues:**
```bash
cd android && ./gradlew clean && cd ..
npx expo start --android
```

**Dependencies issues:**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Documentation

- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native](https://reactnative.dev/)

---

## 🎯 Next Steps

### Immediate Tasks
1. Push code to GitHub repository
2. Set up Expo account
3. Configure EAS Build
4. Test on physical devices

### Future Enhancements
1. Integrate real backend API
2. Add location services (GPS)
3. Implement QR/NFC scanning
4. Add audio playback
5. Implement user authentication
6. Add offline support
7. Integrate maps (Google Maps/Mapbox)
8. Add push notifications
9. Implement analytics
10. Add crash reporting

---

## 👥 Team & Support

For questions or issues:
- Create GitHub issues
- Contact: developer@questnepal.com

---

## 📄 License

Copyright © 2026 Quest Nepal. All rights reserved.

---

**Status**: ✅ Ready for deployment
**Last Updated**: January 2, 2026
