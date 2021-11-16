const places = [{ id: 1, name: 'my place', description: '' }];
const groups = [
	{ id: 1, name: 'group1', description: '' },
	{ id: 2, name: 'group2', description: '' },
	{ id: 3, name: 'group3', description: '' },
];
const locks = [
	{ id: 1, name: 'lock-1', description: '' },
	{ id: 2, name: 'lock-2', description: '' },
];
const groupLocks = [
	{
		id: 10,
		group_id: 1,
		lock_id: 1,
		group: { id: 1, name: 'group1', description: '' },
		lock: { id: 1, name: 'lock-1', description: '' },
	},
	{
		id: 11,
		group_id: 1,
		lock_id: 2,
		group: { id: 1, name: 'group1', description: '' },
		lock: { id: 2, name: 'lock-2', description: '' },
	},
	{
		id: 12,
		group_id: 2,
		lock_id: 1,
		group: { id: 2, name: 'group2', description: '' },
		lock: { id: 1, name: 'lock-1', description: '' },
	},
];

export async function getKisiClient() {
	return {
		get: jest.fn(() => Promise.resolve({ data: {} })),
	};
}

export async function signIn(email, password) {
	if (email === 'a' && password === 'b') {
		return Promise.resolve({ data: {} });
	} else {
		return Promise.reject({ error: 'login failed!' });
	}
}

export async function get(url) {
	const response = await new Promise((resolve) => {
		if (url === 'places') {
			return resolve(places);
		} else if (url === 'groups') {
			return resolve(groups);
		} else if (url === 'locks') {
			return resolve(locks);
		}
		if (url === 'group_locks') {
			return resolve(groupLocks);
		} else {
			resolve({});
		}
	});
}
