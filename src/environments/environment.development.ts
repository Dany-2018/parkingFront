export const environment = {
    production: true,
    hmr: false,
	http: {
		apiUrl: 'http://localhost:5253/api',
	},
	mqtt: {
		server: 'broker.hivemq.com',
		protocol: "wss",
		port: 8000
	}
};
