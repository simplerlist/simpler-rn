import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

const App = () => {
	return (
		<View className='flex-1 justify-center items-center bg-slate-500'>
			<Text>Open up App.js to start working on your app!</Text>

			<StatusBar style='auto' />
		</View>
	)
}

export default App
