import Kisi from 'kisi-client';
import { userConfig } from '../config/config';

const kisiClient = new Kisi();

export async function getKisiClient() {
	const { email, password } = userConfig;
	try {
		await kisiClient.signIn(email, password);
		return kisiClient;
	} catch (e) {
		console.error(`invalid username or password`);
	}
}

export async function signIn(email, password) {
	await kisiClient.signIn(email, password);
	userConfig.email = email;
	userConfig.password = password;
	return kisiClient;
}
