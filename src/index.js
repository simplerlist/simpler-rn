// Packages
import { Button, Text, View } from 'react-native'
import { useSignIn } from '@clerk/clerk-expo'
// Layouts
import Hero from '../design/layouts/home/hero'

const Home = ({ navigation }) => {
	const { signIn, setSession, isLoaded } = useSignIn()

	return (
		<View>
			<Hero />

			<Text className='text-3xl font-black'>Use</Text>

			<Text className='text-gradient text-3xl font-black'>AI.</Text>

			<Button title='Sign In' onPress={() => navigation.navigate('Sign In')} />
		</View>
	)
}

export default Home
