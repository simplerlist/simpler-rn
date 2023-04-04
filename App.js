// Packages
import { ClerkProvider } from '@clerk/clerk-expo'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useCallback } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
// Pages
import Home from './src'

SplashScreen.preventAutoHideAsync()

const App = () => {
	const [fontsLoaded] = useFonts({
		Inter: require('./assets/fonts/Inter-Regular.ttf')
	})

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) await SplashScreen.hideAsync()
	}, [fontsLoaded])

	if (!fontsLoaded) return null

	return (
		<ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
			<SafeAreaProvider>
				<View className='font-inter flex-1 justify-center items-center' onLayout={onLayoutRootView}>
					<Home />

					<StatusBar style='auto' />
				</View>
			</SafeAreaProvider>
		</ClerkProvider>
	)
}

export default App
