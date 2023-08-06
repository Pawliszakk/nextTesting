import { createContext, useState } from 'react';

const NotificationContext = createContext({
	notification: null,
	showNotification: (notificationData) => {},
	hideNotification: () => {},
});

export const NotificationContextProvider = ({ children }) => {
	const [notification, setNotification] = useState();

	const showNotification = (notificationData) => {
		setNotification(notificationData);
	};
	const hideNotification = () => {
		setNotification(null);
	};
	const value = {
		notification,
		showNotification,
		hideNotification,
	};
	return (
		<NotificationContext.Provider value={value}>
			{children}
		</NotificationContext.Provider>
	);
};
export default NotificationContext;
