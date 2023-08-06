import { useContext, useEffect, useRef, useState } from 'react';
import classes from './ContactForm.module.css';
import NotificationContext from '../../store/notification-context';

const ContactForm = () => {
	const [error, setError] = useState(false);
	const emailInputRef = useRef();
	const nameInputRef = useRef();
	const messageInputRef = useRef();

	const notificationCtx = useContext(NotificationContext);
	const { showNotification, hideNotification } = notificationCtx;

	useEffect(() => {
		const timerForHidingNotification = setTimeout(
			() => hideNotification(),
			3000
		);
		return () => clearTimeout(timerForHidingNotification);
	}, [showNotification, hideNotification]);

	const onSubmitHandler = async (e) => {
		e.preventDefault();

		const email = emailInputRef.current.value;
		const name = nameInputRef.current.value;
		const message = messageInputRef.current.value;

		if (!email.includes('@') || name.trim() === '' || !message) {
			setError({ isError: true, errorMessage: 'Invalid input values' });
			return;
		}
		if (error) setError(false);

		const contactMessage = { email, name, message };

		try {
			showNotification({
				status: 'pending',
				message: 'Waiting to finish inserting your message',
				title: 'waiting...',
			});
			const res = await fetch('/api/contact', {
				method: 'POST',
				body: JSON.stringify(contactMessage),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (!res.ok) {
				throw new error(error);
			}
			const resData = await res.json();
			showNotification({
				status: 'success',
				message: resData.message,
				title: 'success',
			});
			emailInputRef.current.value = '';
			nameInputRef.current.value = '';
			messageInputRef.current.value = '';
		} catch (error) {
			showNotification({
				status: 'error',
				message: 'Something went wrong...',
				title: 'error',
			});
		}
	};

	return (
		<section className={classes.contact}>
			<h1>How can i help you?</h1>
			<form className={classes.form} onSubmit={onSubmitHandler}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="email">Your Email</label>
						<input type="text" id="email" ref={emailInputRef} />
					</div>
					<div className={classes.control}>
						<label htmlFor="text">Your Name</label>
						<input type="name" id="name" required ref={nameInputRef} />
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor="message">Your message</label>
					<textarea id="message" rows="5" ref={messageInputRef}></textarea>
				</div>
				<div className={classes.actions}>
					<button>Send message</button>
				</div>
			</form>
			{error && <p>Invalid input data</p>}
		</section>
	);
};

export default ContactForm;
