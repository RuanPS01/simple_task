import bcrypt from 'bcrypt';

export default url = 'localhost:8080';

export async function login(url, username, password) {
	return new Promise((resolve, reject) => {
            const hash = bcrypt.hashSync(password);
            const options = {
                method: 'GET',
                body: JSON.stringify( {
					"username": username,
				} )  
            };
            fetch(url, options)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(() => reject('Rejected'));
            });
}

export async function createUser(url, username, password) {
	return new Promise((resolve, reject) => {
            const hash = bcrypt.hashSync(password);
            const options = {
                method: 'GET',
                body: JSON.stringify( {
					"username": username,
					"password": hash
				})  
            };
            fetch(url, options)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(() => reject('Rejected'));
            });
}