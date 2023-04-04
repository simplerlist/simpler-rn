// Packages
import { useSignIn } from '@clerk/clerk-expo'
import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

const AuthSignIn = ({ navigation }) => {
	const { signIn, setSession, isLoaded } = useSignIn()

	const [emailAddress, setEmailAddress] = useState('')
	const [password, setPassword] = useState('')

	const onSignInPress = async () => {
		if (!isLoaded) return

		const completeSignIn = await signIn.create({ identifier: emailAddress, password })

		await setSession(completeSignIn.createdSessionId)
	}

	const onSignUpPress = () => navigation.replace('SignUp')

	return (
		<View>
			<View>
				<TextInput
					autoCapitalize='none'
					value={emailAddress}
					style={styles.textInput}
					placeholder='Email...'
					placeholderTextColor='#000'
					onChangeText={emailAddress => setEmailAddress(emailAddress)}
				/>
			</View>

			<View>
				<TextInput
					value={password}
					placeholder='Password...'
					placeholderTextColor='#000'
					secureTextEntry={true}
					onChangeText={password => setPassword(password)}
				/>
			</View>

			<TouchableOpacity onPress={onSignInPress}>
				<Text>Sign in</Text>
			</TouchableOpacity>

			<View>
				<Text>Have an account?</Text>

				<TouchableOpacity onPress={onSignUpPress}>
					<Text>Sign up</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default AuthSignIn
