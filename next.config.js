const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: 'admino',
				mongodb_password: 'Manuelneuerace1',
				mongodb_clustername: 'nextjscluster',
				mongodb_database: 'Devcontact',
			},
		};
	}

	return {
		env: {
			mongodb_username: 'admino',
			mongodb_password: 'Manuelneuerace1',
			mongodb_clustername: 'nextjscluster',
			mongodb_database: 'ProdContact',
		},
	};
};
