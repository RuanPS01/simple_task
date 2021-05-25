const url = 'http://localhost:8080';
export default url;

export async function login(url) {
	return new Promise((resolve, reject) => {
            const options = {
                method: 'GET',
            };
            fetch(url, options)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch((err) => {console.log("ErrorOnLogin -> ", err);reject('Rejected')});
            });
}

export async function createUser(url, username, password) {
	return new Promise((resolve, reject) => {
            const options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
					"username": username,
					"password": password
				}) 
            };
            fetch(url, options)
                .then(response => response.json())
                .then(data =>{console.log("ErrorOnCreation -> ", data);resolve(data)})
                .catch((err) =>{console.log("ErrorOnCreation -> ", err);reject('Rejected')});
            });
}