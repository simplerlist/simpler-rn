// Packages
import { ClerkProvider } from '@clerk/clerk-expo'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as SecureStore from 'expo-secure-store'
// Providers
import { AppProvider } from './contexts/app'
// Pages
import Home from './src'
import SignIn from './src/auth/SignIn'

const App = () => {
	const Stack = createNativeStackNavigator()

	return (
		<ClerkProvider
			publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
			tokenCache={{
				getToken: key => SecureStore.getItemAsync(key),
				saveToken: (key, value) => SecureStore.setItemAsync(key, value)
			}}
		>
			<AppProvider>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name='Home' component={Home} />
						<Stack.Screen name='Sign In' component={SignIn} />
					</Stack.Navigator>
				</NavigationContainer>
			</AppProvider>
		</ClerkProvider>
	)
}

export default App
