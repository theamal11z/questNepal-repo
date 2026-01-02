# Quest Nepal - Screen Flow & Navigation Guide

## 📱 Complete Screen Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     ONBOARDING WELCOME                          │
│  • Full-screen hero image (Himalayan temple)                   │
│  • "A pilgrimage, not a game" tagline                          │
│  • Animated fade-in effects                                     │
│  • Begin Journey button                                         │
│  • Login link in header                                         │
└────────────┬────────────────────────────────┬───────────────────┘
             │                                │
             ▼                                ▼
      ┌──────────┐                     ┌──────────┐
      │  LOGIN   │                     │  SIGNUP  │
      └────┬─────┘                     └────┬─────┘
           │                                │
           └────────────┬───────────────────┘
                        ▼
           ┌────────────────────────┐
           │     MAIN TABS          │
           │  (Bottom Navigation)   │
           └────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        ▼               ▼               ▼
   ┌────────┐      ┌────────┐     ┌─────────┐
   │  HOME  │      │  MAP   │     │ PROFILE │
   └───┬────┘      └───┬────┘     └─────────┘
       │               │
       │               │
       ▼               ▼
┌──────────────┐  ┌──────────────┐
│ ACTIVE QUEST │  │ QUEST CARD   │
│   DETAILS    │  │  (on map)    │
└──────┬───────┘  └──────────────┘
       │
       ▼
┌──────────────┐
│  CONTINUE    │
│   JOURNEY    │
└──────────────┘
       │
       ▼
┌──────────────┐
│     SCAN     │
│  (QR/NFC)    │
└──────────────┘

Additional Screens:
┌──────────────┐  ┌──────────────┐
│   JOURNEY    │  │  DISCOVERY   │
│    TRAIL     │  │ (Paths Ahead)│
└──────────────┘  └──────────────┘
```

## 🎯 Screen Details & Purpose

### 1. Onboarding Welcome
**Purpose**: First impression, set the tone  
**Key Elements**:
- Full-screen hero image
- Gradient overlay
- Animated text
- "Begin Your Journey" CTA
- Pagination dots

**Navigation**:
- → Signup (primary)
- → Login (secondary)

---

### 2. Login
**Purpose**: Returning user authentication  
**Key Elements**:
- Email input with icon
- Password input with visibility toggle
- "Forgot?" link
- "Resume Quest" button
- Signup link

**Navigation**:
- → Main Tabs (on success)
- → Signup
- ← Onboarding

---

### 3. Signup
**Purpose**: New user registration  
**Key Elements**:
- Hero image header
- Name, email, password inputs
- Terms checkbox
- "Create Account" button
- Login link

**Navigation**:
- → Main Tabs (on success)
- → Login
- ← Onboarding

---

### 4. Home (Main Tab)
**Purpose**: Central hub, active quest overview  
**Key Elements**:
- Time and location header
- Large active quest card
- Recent memories timeline
- Paths ahead carousel
- Bottom tab navigation

**Navigation**:
- → Active Quest Details (quest card)
- → Continue Journey (continue button)
- → Journey Trail (memories)
- → Discovery (paths ahead)
- → Scan (tab bar)

---

### 5. Active Quest Details
**Purpose**: Detailed view of current journey  
**Key Elements**:
- Large hero image
- Chapter description
- Vertical timeline
- Completed/active stages
- Audio ambience card
- "Open Compass" button

**Navigation**:
- → Continue Journey (compass button)
- ← Home

---

### 6. Continue Journey
**Purpose**: Current stage guidance  
**Key Elements**:
- Hero image
- Floating content card
- Progress dots
- Chapter info
- Task objective
- "I Found It" button

**Navigation**:
- ← Active Quest Details
- → Next stage (on completion)

---

### 7. Journey Trail
**Purpose**: History of completed journeys  
**Key Elements**:
- "Collected Moments" title
- Journey statistics
- Memory cards with images
- Location stamps
- Grayscale to color on hover

**Navigation**:
- ← Home

---

### 8. Discovery
**Purpose**: Explore new quests  
**Key Elements**:
- Featured quest card
- "Recommended" badge
- "Paths Unfolding" section
- Quest categories
- "Begin Journey" buttons

**Navigation**:
- ← Home
- → Quest Details (any card)

---

### 9. Map (Main Tab)
**Purpose**: Location-based quest discovery  
**Key Elements**:
- Decorative map background
- Search bar
- Active location marker
- Nearby quest card
- Distance indicator

**Navigation**:
- → Active Quest Details (quest card)
- → Quest marker details

---

### 10. Profile (Main Tab)
**Purpose**: User stats and achievements  
**Key Elements**:
- Avatar with initials
- User statistics
- Spirit stamps collection
- Settings button

**Navigation**:
- → Settings (future)

---

### 11. Scan
**Purpose**: QR/NFC scanning for locations  
**Key Elements**:
- Camera view simulation
- Animated scan frame
- Corner indicators
- "Searching" badge
- NFC alternative button
- Flashlight toggle

**Navigation**:
- → Continue Journey (on scan)
- ← Previous screen

---

### 12. Main Tabs (Bottom Navigation)
**Purpose**: Primary navigation hub  
**Key Elements**:
- Home tab
- Map tab
- Profile tab
- Scan button (prominent)
- Floating design

**Always Visible**: Yes (except on full-screen views)

---

## 🔄 Navigation Patterns

### Primary Flow (New User)
```
Onboarding → Signup → Home → Active Quest → Continue Journey → Scan
```

### Primary Flow (Returning User)
```
Login → Home → Active Quest → Continue Journey
```

### Discovery Flow
```
Home → Discovery → Quest Details → Begin Journey
```

### History Flow
```
Home → Journey Trail → Memory Details
```

### Location Flow
```
Map → Quest Card → Quest Details → Continue Journey
```

## 🎨 Screen Transitions

### Animation Types:
- **Fade**: Onboarding, Login, Signup (1000ms)
- **Slide**: Stack navigation (300ms)
- **Scale**: Button presses (200ms)
- **Pulse**: Active indicators (2000ms loop)

### Transition Rules:
- Slow and natural
- No jarring movements
- Maintain context
- Gentle easing

## 📱 Bottom Tab Behavior

### Visible On:
- ✅ Home
- ✅ Map
- ✅ Profile

### Hidden On:
- ❌ Onboarding
- ❌ Login
- ❌ Signup
- ❌ Scan (full-screen)

### Scan Button:
- Always accessible from main tabs
- Prominent yellow accent
- Opens full-screen scanner

## 🎯 User Journey Examples

### Example 1: First-Time User
```
1. Opens app → Onboarding Welcome
2. Taps "Begin Journey" → Signup
3. Creates account → Home
4. Sees active quest → Active Quest Details
5. Taps "Open Compass" → Continue Journey
6. Reads task → Scan
7. Scans marker → Quest progresses
```

### Example 2: Returning User
```
1. Opens app → Login
2. Enters credentials → Home
3. Taps "Continue Journey" → Continue Journey
4. Completes task → Next stage
5. Views history → Journey Trail
6. Explores new → Discovery
```

### Example 3: Explorer
```
1. Opens app → Home
2. Taps "Map" tab → Map
3. Sees nearby quest → Quest Card
4. Taps card → Active Quest Details
5. Starts journey → Continue Journey
```

## 🎨 Visual Hierarchy

### Screen Importance:
1. **Home** - Primary hub (most visited)
2. **Active Quest Details** - Core experience
3. **Continue Journey** - Active engagement
4. **Map** - Discovery tool
5. **Profile** - Personal space
6. **Scan** - Action moment
7. **Discovery** - Exploration
8. **Journey Trail** - Reflection
9. **Login/Signup** - Entry points
10. **Onboarding** - First impression

## 📊 Screen Complexity

| Screen | Components | Interactions | Complexity |
|--------|-----------|--------------|------------|
| Onboarding | 8 | 2 | Medium |
| Login | 10 | 4 | Medium |
| Signup | 12 | 5 | Medium |
| Home | 15+ | 8+ | High |
| Active Quest | 12+ | 3 | High |
| Continue Journey | 12+ | 2 | High |
| Journey Trail | 10+ | 2 | Medium |
| Discovery | 10+ | 4 | Medium |
| Map | 8 | 3 | Medium |
| Profile | 10 | 2 | Medium |
| Scan | 10 | 3 | Medium |
| Main Tabs | 6 | 4 | Medium |

## 🎯 Key Interaction Points

### Home Screen:
- Active quest card → Details
- Continue button → Journey
- Memory item → Trail
- Path card → Discovery
- Tab bar → Navigation

### Active Quest:
- Compass button → Continue
- Audio play → Sound
- Timeline item → Stage info
- Back button → Home

### Continue Journey:
- Task card → Information
- Action button → Progress
- Back button → Previous

### Map:
- Search bar → Filter
- Marker → Quest info
- Quest card → Details
- Tab bar → Navigation

## ✨ Special Features

### Animations:
- Fade in on mount
- Pulse on active elements
- Breathe on scan frame
- Scale on press
- Slide on navigation

### Gestures:
- Tap for navigation
- Scroll for content
- Swipe for tabs (future)
- Long press for details (future)

---

## 📝 Navigation Summary

**Total Screens**: 12  
**Navigation Types**: Stack + Bottom Tabs  
**Transition Style**: Fade (300-1000ms)  
**Tab Bar**: Custom floating design  
**Deep Linking**: Ready for implementation  

**Primary Path**: Onboarding → Auth → Home → Quest → Journey  
**Secondary Paths**: Discovery, History, Map, Profile  
**Action Path**: Scan → Continue → Complete  

---

This navigation structure ensures a calm, predictable, and meaningful user experience that encourages slow exploration and deep engagement with each location and story.
