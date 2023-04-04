// Packages
import { Text, View } from 'react-native'
import { useSignIn } from '@clerk/clerk-expo'

const Pages = () => {
	const { signIn, setSession, isLoaded } = useSignIn()

	return <Text className='text-3xl font-bold'>Sign in</Text>
}

export default Pages
