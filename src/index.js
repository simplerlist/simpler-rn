// Packages
import { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { useSignIn } from '@clerk/clerk-expo'

const Home = () => {
	const { signIn, setSession, isLoaded } = useSignIn()

	return (
		<View>
			<Text className='font-inter font-black text-3xl'>Inter Black</Text>
		</View>
	)
}

export default Home
