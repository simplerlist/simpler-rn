// Packages
import { createContext, useState, useContext } from 'react'

const Context = createContext(null)

export const AppProvider = ({ children }) => {
	const [appDarkMode, setAppDarkMode] = useState(null)
	const [appEnableChat, setAppEnableChat] = useState(null)
	const [appLibrary, setAppLibrary] = useState(null)
	const [appNotification, setAppNotification] = useState(null)
	const [appNotificationMenuOpen, setAppNotificationMenuOpen] = useState(false)
	const [appOpenChat, setAppOpenChat] = useState(null)
	const [appPaymentCreditsUsed, setAppPaymentCreditsUsed] = useState(0)
	const [appPaymentStatus, setAppPaymentStatus] = useState(null) // `{ paid: false, credits: 100 }`
	const [appPaymentUpgrade, setAppPaymentUpgrade] = useState(false)
	const [appReplicache, setAppReplicache] = useState(null)
	const [appSettings, setAppSettings] = useState(null)
	const [appShare, setAppShare] = useState(false)
	const [appTheme, setAppTheme] = useState(null)
	const [appTrack, setAppTrack] = useState({ event: null, data: null })

	return (
		<Context.Provider
			{...{
				value: {
					appDarkMode,
					appEnableChat,
					appLibrary,
					appNotification,
					appNotificationMenuOpen,
					appOpenChat,
					appPaymentCreditsUsed,
					appPaymentStatus,
					appPaymentUpgrade,
					appReplicache,
					appSettings,
					appShare,
					appTheme,
					appTrack,
					setAppDarkMode,
					setAppEnableChat,
					setAppLibrary,
					setAppNotification,
					setAppNotificationMenuOpen,
					setAppOpenChat,
					setAppPaymentCreditsUsed,
					setAppPaymentStatus,
					setAppPaymentUpgrade,
					setAppReplicache,
					setAppSettings,
					setAppShare,
					setAppTheme,
					setAppTrack
				}
			}}
		>
			{children}
		</Context.Provider>
	)
}

export const useAppCtx = () => useContext(Context)
