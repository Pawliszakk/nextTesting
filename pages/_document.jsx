import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="pl">
				<Head />
				<body>
					<Main />
					<NextScript />
					<div id="notification"></div>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
