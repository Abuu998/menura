# Settings Screen Implementation

A beautiful, modern settings screen for the Menura app, built with React Native and styled using the Tailwind CSS theme from `global.css`.

## Overview

The settings screen provides a comprehensive interface for users to customize their app experience. It features organized sections, toggle switches, and a consistent design language that matches the app's theme.

## Components

### 1. **SettingItem** (`components/settings/item.tsx`)

Individual setting item component that supports both clickable items and toggleable options.

**Props:**
- `icon?: string` - Icon name from Ionicons
- `title: string` - Setting title
- `description?: string` - Optional description text
- `onPress?: () => void` - Callback for clickable items
- `value?: boolean` - Toggle switch value
- `onValueChange?: (value: boolean) => void` - Callback for toggle changes
- `className?: string` - Additional CSS classes

**Features:**
- Adaptive rendering (toggle switch vs chevron icon)
- Icon support with primary color
- Description text in muted color
- Active state feedback
- Rounded corners and border styling

### 2. **SettingsSection** (`components/settings/section.tsx`)

Container component that groups related settings together with an optional icon and title.

**Props:**
- `title: string` - Section title
- `icon?: string` - Optional icon name from Ionicons
- `children: React.ReactNode` - Setting items
- `description?: string` - Optional section description

**Features:**
- Organized visual grouping
- Icon support with primary color
- Uppercase, tracking-spaced title
- Proper spacing and alignment

### 3. **Settings Screen** (`app/(tabs)/settings.tsx`)

Main settings screen component that combines all sections and manages app settings state.

**Features:**
- Scrollable layout with safe area insets
- Multiple organized sections:
  - Display & Theme
  - Notifications & Sound
  - Privacy & Security
  - Data & Storage
  - About
  - Quick Access
- State management for settings
- Integration with Expo Router for navigation
- i18n support via react-i18next

## Design System Integration

The settings screen uses the following theme tokens from `global.css`:

- **Colors:**
  - `bg-background` - Main background
  - `bg-card` - Card/item background
  - `text-foreground` - Primary text
  - `text-muted-foreground` - Secondary text
  - `text-primary` - Icon colors
  - `border-border` - Border colors
  - `bg-primary/15` - Header icon background

- **Typography:**
  - Title variant (semibold, 24px)
  - Default variant (18px)
  - Small text (12px) for descriptions
  - Uppercase, tracking-wide for section headers

- **Spacing:**
  - Consistent padding (px-4, py-4)
  - Gap-based spacing between items (gap-2)
  - Margin-based section spacing (mb-8)

- **Radius:**
  - Rounded-xl (16px) for items and containers
  - Rounded-2xl (20px) for header icon background

## Usage Example

```tsx
// Basic toggle setting
<SettingItem
  icon="moon"
  title="Dark Mode"
  description="Enable dark theme for better night viewing"
  value={darkMode}
  onValueChange={setDarkMode}
/>

// Clickable setting
<SettingItem
  icon="language"
  title="Language"
  description="English"
  onPress={() => router.push("/language")}
/>

// Section with multiple items
<SettingsSection title="Display & Theme" icon="palette-sharp">
  <SettingItem
    icon="moon"
    title="Dark Mode"
    value={darkMode}
    onValueChange={setDarkMode}
  />
  <SettingItem
    icon="text"
    title="Text Size"
    onPress={handleTextSize}
  />
</SettingsSection>
```

## State Management

The settings screen uses React's `useState` hook to manage app settings:

```tsx
interface SettingsState {
  notifications: boolean;
  darkMode: boolean;
  privateMode: boolean;
  dataSync: boolean;
  sound: boolean;
  biometric: boolean;
}
```

Current settings are:
- **Notifications** - Enable/disable notifications (default: true)
- **Dark Mode** - Toggle dark theme (default: false)
- **Private Mode** - Hide sensitive information (default: false)
- **Data Sync** - Auto-sync data to cloud (default: true)
- **Sound** - Enable sound and vibration (default: true)
- **Biometric** - Use fingerprint/face recognition (default: false)

## Sections

### Display & Theme
- Dark Mode toggle
- High Contrast toggle
- Text Size selector

### Notifications & Sound
- Enable Notifications toggle
- Sound & Vibration toggle
- Daily Reminder time picker

### Privacy & Security
- Private Mode toggle
- Biometric Login toggle
- Privacy Policy link

### Data & Storage
- Cloud Sync toggle
- Clear Cache button
- Backup & Restore button

### About
- App Version info
- Build Number info
- Send Feedback option
- Help & Support option

### Quick Access
- Meal History link
- Favorites manager

## Styling Features

1. **Visual Hierarchy**
   - Large, bold section headers
   - Prominent icons with primary color
   - Clear description text in muted color

2. **Interactive States**
   - Active state feedback on pressable items
   - Smooth toggle switch animations
   - Visual distinction between toggle and clickable items

3. **Accessibility**
   - Large touch targets (py-4)
   - Clear icon and text labels
   - Proper color contrast based on theme

4. **Responsive Design**
   - ScrollView for overflow content
   - Safe area insets (`py-safe`)
   - Flexible layout with flex-1

## Future Enhancements

- [ ] Persist settings to AsyncStorage
- [ ] Add language selection modal
- [ ] Implement text size preview
- [ ] Add backup/restore functionality
- [ ] Implement biometric authentication
- [ ] Add settings search/filter
- [ ] Create dedicated setting pages (Language, Reminders, etc.)
- [ ] Add analytics tracking for settings changes
- [ ] Implement settings sync across devices

## Dependencies

- `react-native` - UI components
- `expo-router` - Navigation
- `react-i18next` - Internationalization
- `@expo/vector-icons` - Icon library
- `uniwind` - Tailwind CSS for React Native
- `class-variance-authority` - Component variants

## Related Files

- `global.css` - Theme configuration and colors
- `components/ui/defaults.tsx` - Default UI components (MyText, MyView)
- `components/settings/link.tsx` - Legacy SettingsLink component