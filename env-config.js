const envConfig = {
	'process.env.BACKEND_URL' : process.env.NODE_ENV === 'production' ? 'https://pftrobot.github.io/pftrobot' : '',
}

export default envConfig