# 🎧 Podcast App

A modern, feature-rich podcast application built with React Native and Expo. Browse, search, and listen to your favorite podcasts with a beautiful, intuitive interface.

## 📱 Features

### Core Features
- **Browse Trending Podcasts** - Discover popular podcasts on the home screen
- **Search Functionality** - Search for podcasts by name or topic with debounced input
- **Podcast Details** - View podcast information, description, and episode list
- **Audio Player** - Full-featured audio player with playback controls
- **Episode Downloads** - Download episodes for offline listening
- **User Authentication** - Secure sign-in and sign-up with Clerk
- **User Profile** - View and manage your account

### Audio Player Features
- Play/Pause controls
- Skip forward (30 seconds) and backward (15 seconds)
- Adjustable playback speed (0.5x, 0.75x, 1x, 1.25x, 1.5x, 2x)
- Progress bar with seeking capability
- Volume control
- Mini player for continuous playback while browsing
- Background audio playback support

### Download Management
- Download episodes for offline listening
- View downloaded episodes in Library
- Delete downloaded episodes
- Persistent download state using SQLite

## 🛠️ Tech Stack

- **Framework**: React Native with Expo SDK 55
- **Navigation**: Expo Router (file-based routing)
- **State Management**: Zustand
- **Data Fetching**: TanStack React Query
- **Authentication**: Clerk
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Audio**: Expo Audio
- **Storage**: Expo SQLite (for persistent data)
- **File System**: Expo File System (for downloads)
- **Animations**: React Native Reanimated

## 📁 Project Structure

```
podcast/
├── src/
│   ├── app/                          # App screens and routing
│   │   ├── _layout.tsx              # Root layout with providers
│   │   ├── index.tsx                # Entry point (redirects to home)
│   │   ├── player.tsx               # Full audio player screen
│   │   ├── profile.tsx              # User profile screen
│   │   ├── (auth)/                  # Authentication screens
│   │   │   ├── _layout.tsx          # Auth layout
│   │   │   ├── sign-in.tsx          # Sign in screen
│   │   │   └── sign-up.tsx          # Sign up screen
│   │   └── (tabs)/                  # Main tab navigation
│   │       ├── _layout.tsx          # Tab layout with mini player
│   │       ├── home/                # Home tab
│   │       │   ├── _layout.tsx      # Home layout
│   │       │   ├── index.tsx        # Trending podcasts list
│   │       │   └── [id].tsx         # Podcast details screen
│   │       ├── search/              # Search tab
│   │       │   ├── _layout.tsx      # Search layout
│   │       │   └── index.tsx        # Search screen
│   │       ├── library/             # Library tab
│   │       │   ├── _layout.tsx      # Library layout
│   │       │   ├── index.tsx        # Library main screen
│   │       │   └── downloads.tsx    # Downloaded episodes list
│   │       └── new/                 # New tab (placeholder)
│   │           ├── _layout.tsx      # New layout
│   │           └── index.tsx        # New screen
│   ├── components/                   # Reusable UI components
│   │   ├── EpisodeList.tsx          # Episode list component
│   │   ├── EpisodeListItem.tsx      # Individual episode item
│   │   ├── MiniPlayer.tsx           # Mini player for tab bar
│   │   ├── PodcastCard.tsx          # Podcast card component
│   │   └── Shimmer.tsx              # Loading shimmer effect
│   ├── providers/                    # Context providers
│   │   └── PlayerProvider.tsx       # Audio player context
│   ├── services/                     # API and service functions
│   │   ├── podcast-index.ts         # Podcast Index API integration
│   │   └── downloads.tsx            # File download utilities
│   ├── store/                        # State management
│   │   └── useDownloadStore.ts      # Zustand store for downloads
│   └── types/                        # TypeScript type definitions
│       └── index.tsx                # Feed and Episode types
├── assets/                           # Static assets
│   └── images/                      # App icons and images
├── app.json                          # Expo configuration
├── package.json                      # Dependencies
├── tsconfig.json                     # TypeScript configuration
├── eslint.config.js                  # ESLint configuration
├── nativewind-env.d.ts              # NativeWind type definitions
├── metro.config.js                   # Metro bundler configuration
├── postcss.config.mjs               # PostCSS configuration
└── global.css                        # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd podcast
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory with the following variables:
   ```env
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   EXPO_PUBLIC_PODCAST_INDEX_API_KEY=your_podcast_index_api_key
   EXPO_PUBLIC_PODCAST_INDEX_API_SECRET=your_podcast_index_api_secret
   ```

4. **Start the development server**
   ```bash
   npx expo start
   ```

5. **Run on your preferred platform**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Press `w` for web browser
   - Scan QR code with Expo Go app on your device

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk authentication publishable key |
| `EXPO_PUBLIC_PODCAST_INDEX_API_KEY` | Podcast Index API key |
| `EXPO_PUBLIC_PODCAST_INDEX_API_SECRET` | Podcast Index API secret |

## 📚 API Integration

This app uses the [Podcast Index API](https://podcastindex-org.github.io/docs-api/) to fetch podcast data:

- **Trending Podcasts**: Fetch popular podcasts
- **Search**: Search podcasts by term
- **Podcast Details**: Get podcast information by ID
- **Episodes**: Fetch episodes for a specific podcast

## 🎨 UI/UX Features

- **Shimmer Loading Effects** - Beautiful loading animations while content loads
- **Responsive Design** - Optimized for both iOS and Android
- **Native Navigation** - Platform-specific tab navigation
- **Smooth Animations** - Fluid transitions and interactions
- **Dark Mode Support** - Automatic theme switching based on system preferences
- **Haptic Feedback** - Tactile feedback for interactions (iOS)

## 🔐 Authentication

The app uses [Clerk](https://clerk.com/) for authentication:

- Email/password sign-up and sign-in
- Multi-factor authentication support
- Secure token storage
- Session management
- Protected routes

## 💾 Data Persistence

- **Downloads**: Stored in device file system using Expo File System
- **Download Metadata**: Persisted using Expo SQLite with Zustand
- **Authentication Tokens**: Securely stored using Expo Secure Store

## 🎵 Audio Features

- **Background Playback**: Continue listening while using other apps
- **Lock Screen Controls**: Control playback from lock screen
- **Playback Speed**: Adjust listening speed from 0.5x to 2x
- **Seek Controls**: Skip forward/backward with precise timing
- **Volume Control**: Independent volume slider

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `expo` | Core Expo framework |
| `expo-router` | File-based navigation |
| `@clerk/expo` | Authentication |
| `@tanstack/react-query` | Data fetching and caching |
| `zustand` | State management |
| `nativewind` | Tailwind CSS styling |
| `expo-audio` | Audio playback |
| `expo-file-system` | File management |
| `expo-sqlite` | Local database |
| `react-native-reanimated` | Animations |

## 🧪 Development

### Running Tests
```bash
npm test
```

### Linting
```bash
npm run lint
```

### Building for Production

**iOS**
```bash
npx expo build:ios
```

**Android**
```bash
npx expo build:android
```

## 📄 License

This project is private and not licensed for public use.

## 👨‍💻 Author

**Awais Mumtaz**
- Bundle Identifier: `com.awaismumtaz0099.podcast`

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) for the amazing development platform
- [Podcast Index](https://podcastindex.org/) for the podcast data API
- [Clerk](https://clerk.com/) for authentication services
- [NativeWind](https://www.nativewind.dev/) for Tailwind CSS integration

---

Made with ❤️ using React Native and Expo
