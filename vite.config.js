import { sveltekit } from '@sveltejs/kit/vite';
import fs from 'fs'
// import basicSsl from '@vitejs/plugin-basic-ssl'
import mkcert from 'vite-plugin-mkcert'


const certificate = fs.readFileSync('cert.pem')
const key = fs.readFileSync('key.pem')
const https = () => ({ cert: certificate, key: key })

/** @type {import('vite').UserConfig} */
const config = {
	server: {
		https: false
	},
	preview: {
		https: true
	},
	plugins: [sveltekit()],
};

export default config;
