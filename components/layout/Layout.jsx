import { useContext } from 'react';
import MainNavigation from './MainNavigation';
import NotificationContext from '../../store/notification-context';
import Notification from '../UI/notification';
const Layout = ({ children }) => {
	const notificationCtx = useContext(NotificationContext);
	const notification = notificationCtx.notification;

	return (
		<>
			<MainNavigation />
			<main>{children}</main>
			{notification && (
				<Notification
					title={notification.title}
					status={notification.status}
					message={notification.message}
				/>
			)}
		</>
	);
};

export default Layout;
