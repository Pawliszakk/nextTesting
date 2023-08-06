import { MongoClient } from 'mongodb';
async function handler(req, res) {
	const URL = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.ti64sg5.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
	let client;

	try {
		client = await MongoClient.connect(URL);
	} catch (error) {
		res.status(500).json({ message: 'Connecting to database failed...' });
		return;
	}

	if (req.method === 'POST') {
		const { email, name, message } = req.body;

		if (
			!email.includes('@') ||
			!email ||
			!name ||
			name.trim() === '' ||
			!message ||
			message.trim() === ''
		) {
			res.status(400).json({ message: 'Bad values sended!' });
		}
		const contactMessage = { email, name, message };
		try {
			const db = client.db();
			await db.collection('messages').insertOne(contactMessage);
			res
				.status(201)
				.json({ message: 'Successfully saved your message in database!' });
		} catch (error) {
			res
				.status(500)
				.json({ message: 'Failed to insert your message to database, sorry' });
		}
	}

	client.close();
}
export default handler;
