const url = 'http://localhost:8080';
export default url;

export async function login(url, username) {
	return new Promise((resolve, reject) => {
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
            const options = {
                method: 'GET',
                body: JSON.stringify( {
					"username": username,
					"password": password
				})  
            };
            fetch(url, options)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(() => reject('Rejected'));
            });
}