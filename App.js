// Packages
import { useCallback } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen'
import { ClerkProvider } from '@clerk/clerk-expo'
import { useSignIn } from '@clerk/clerk-expo'

SplashScreen.preventAutoHideAsync()

const App = () => {
	const { signIn, setSession, isLoaded } = useSignIn()

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
					<Text className='text-xl'>Open up App.js to start working on your app!</Text>

					<StatusBar style='auto' />
				</View>
			</SafeAreaProvider>
		</ClerkProvider>
	)
}

export default App
