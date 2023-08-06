import { useContext } from 'react';

import classes from './notification.module.css';
import NotificationContext from '../../store/notification-context';
import { createPortal } from 'react-dom';

function Notification({ title, message, status }) {
	const notificationCtx = useContext(NotificationContext);
	const hideNotification = notificationCtx.hideNotification;
	let statusClasses = '';

	if (status === 'success') {
		statusClasses = classes.success;
	}

	if (status === 'error') {
		statusClasses = classes.error;
	}

	const cssClasses = `${classes.notification} ${statusClasses}`;

	return createPortal(
		<div className={cssClasses} onClick={hideNotification}>
			<h2>{title}</h2>
			<p>{message}</p>
		</div>,
		document.getElementById('notification')
	);
}

export default Notification;
