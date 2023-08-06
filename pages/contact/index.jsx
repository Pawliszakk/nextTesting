import Head from 'next/head';
import ContactForm from '../../components/contact/ContactForm';

const ContactPage = () => {
	return (
		<>
			<Head>
				<title>Contact</title>
				<meta
					name="description"
					content="Go contact us, we would like to answer your question"
				/>
			</Head>
			<ContactForm />
		</>
	);
};

export default ContactPage;
