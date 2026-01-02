# Quest Nepal - Location-Based Narrative Journey App

A premium, calm, and culturally respectful mobile application built with Expo React Native that guides users through real places using stories, atmosphere, and reflection.

## 🎯 Design Philosophy

- **Premium & Modern**: Clean, minimal yet expressive design language
- **Calm Experience**: Gentle guidance without urgency or gamification
- **Cultural Respect**: Grounded in local culture and traditions
- **Presence Over Speed**: Encourages slow exploration and curiosity

## 📱 Features

### Core Screens

1. **Onboarding Welcome** - Immersive introduction with hero imagery
2. **Login/Signup** - Clean authentication flows
3. **Home** - Active journey card with recent memories and paths ahead
4. **Active Quest Details** - Vertical storytelling layout with timeline
5. **Journey Trail** - Collection of completed memories
6. **Discovery** - Featured quests and paths unfolding
7. **Map** - Location-based quest discovery
8. **Profile** - User stats and spirit stamps
9. **Scan** - QR/NFC scanning for location markers
10. **Continue Journey** - Current stage with tasks and guidance

### Navigation

- Custom bottom tab navigation with 4 primary destinations
- Floating scan button for quick access
- Smooth, natural transitions between screens

### Design Elements

- **Typography**: Strong hierarchy with clear roles
- **Colors**: Premium yellow accent (#f9f506) with neutral backgrounds
- **Motion**: Slow, natural transitions and subtle animations
- **Spacing**: Consistent rhythm with rounded cards
- **Imagery**: Full-bleed hero images with readable text overlays

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Expo CLI installed globally: `npm install -g expo-cli`
- iOS Simulator (Mac) or Android Emulator, or Expo Go app on your phone

### Installation

```bash
# Navigate to project directory
cd quest-nepal-app

# Install dependencies
npm install

# Start the development server
npm start
```

### Running the App

After starting the development server, you can:

- Press `i` to open iOS Simulator
- Press `a` to open Android Emulator
- Scan the QR code with Expo Go app on your phone

## 📂 Project Structure

```
quest-nepal-app/
├── App.js                      # Main app entry point
├── src/
│   ├── screens/               # All screen components
│   │   ├── OnboardingWelcome.js
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── Home.js
│   │   ├── ActiveQuestDetails.js
│   │   ├── JourneyTrail.js
│   │   ├── Discovery.js
│   │   ├── Map.js
│   │   ├── Profile.js
│   │   ├── Scan.js
│   │   └── ContinueJourney.js
│   ├── navigation/            # Navigation configuration
│   │   └── MainTabs.js
│   ├── components/            # Reusable components
│   └── constants/             # Theme and constants
│       └── theme.js
└── package.json
```

## 🎨 Design System

### Colors

```javascript
primary: '#f9f506'           // Yellow accent
backgroundLight: '#f8f8f5'   // Light background
backgroundDark: '#23220f'    // Dark background
textMain: '#181811'          // Primary text
textSub: '#8c8b5f'          // Secondary text
```

### Typography

- **Display**: Spline Sans (headings, UI)
- **Serif**: Noto Serif (narrative text)
- **Weights**: Light (300), Regular (400), Medium (500), Semibold (600), Bold (700)

### Spacing Scale

- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- xxl: 48px

## 🔧 Technologies Used

- **React Native** - Mobile framework
- **Expo** - Development platform
- **React Navigation** - Navigation library
- **Expo Linear Gradient** - Gradient backgrounds
- **Expo Blur** - Blur effects
- **@expo/vector-icons** - Icon library

## 📱 Screen Flow

```
Onboarding → Login/Signup → Home (Main Tabs)
                              ├── Home
                              ├── Map
                              └── Profile

From Home:
├── Active Quest Details → Continue Journey
├── Journey Trail (History)
├── Discovery (Paths Ahead)
└── Scan (QR/NFC)
```

## 🎯 Key Interactions

- **Slow Transitions**: Natural, calm animations (300-500ms)
- **Large Touch Targets**: Comfortable 40-48px minimum
- **Subtle Feedback**: Gentle scale and opacity changes
- **No Urgent Motion**: Avoid rapid or playful animations

## 🌟 Accessibility

- High contrast text on backgrounds
- Readable outdoor-friendly typography
- No color-only meaning conveyance
- Responsive layouts for multiple device sizes
- Safe area support for notched devices

## 📝 Notes

- No reward systems, points, badges, or streaks
- No leaderboards or social feeds
- No map-first interface
- Focus on presence and meaning over completion

## 🤝 Contributing

This is a prototype application demonstrating UI/UX design principles for a location-based narrative experience.

## 📄 License

This project is a design prototype for Quest Nepal.

---

**Built with ❤️ in Kathmandu**
