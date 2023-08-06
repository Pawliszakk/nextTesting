import '../styles/globals.css';
import Layout from '../components/layout/Layout';

import { NotificationContextProvider } from '../store/notification-context';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<NotificationContextProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</NotificationContextProvider>
		</>
	);
}

export default MyApp;
