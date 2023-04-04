// Packages
import { useCallback } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

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
		<View className='font-inter flex-1 justify-center items-center' onLayout={onLayoutRootView}>
			<Text className='text-xl font-bold'>Open up App.js to start working on your app!</Text>

			<StatusBar style='auto' />
		</View>
	)
}

export default App
