// Packages
import { useState, useEffect } from 'react'
import { ClerkProvider } from '@clerk/clerk-expo'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as Font from 'expo-font'
import * as SecureStore from 'expo-secure-store'
import { StatusBar } from 'expo-status-bar'
// Pages
import Home from './src'

const App = () => {
	const Stack = createNativeStackNavigator()

	const [fontsLoaded, setFontsLoaded] = useState(false)

	useEffect(() => {
		;(async () => {
			await Font.loadAsync({
				'Inter-Regular': require('./assets/fonts/Inter-Light.ttf'),
				'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
				'Inter-Regular': require('./assets/fonts/Inter-Medium.ttf'),
				'Inter-Regular': require('./assets/fonts/Inter-SemiBold.ttf'),
				'Inter-Regular': require('./assets/fonts/Inter-Bold.ttf'),
				'Inter-Black': require('./assets/fonts/Inter-Black.ttf')
			})

			setFontsLoaded(true)
		})()
	}, [])

	if (!fontsLoaded) return null

	return (
		<ClerkProvider
			publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
			tokenCache={{
				getToken: key => SecureStore.getItemAsync(key),
				saveToken: (key, value) => SecureStore.setItemAsync(key, value)
			}}
		>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name='Home' component={Home} />
				</Stack.Navigator>
			</NavigationContainer>
		</ClerkProvider>
	)
}

export default App
