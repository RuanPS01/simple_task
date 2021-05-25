const url = 'http://localhost:8080';
export default url;

export async function getTasks(url) {
	return new Promise((resolve, reject) => {
		fetch(url, {
		})
			.then(response => response.json())
			.then(data => resolve(data))
			.catch(() => reject('Rejected'));
	});
}

export async function editTask(url, bodyJson) {
	return new Promise((resolve, reject) => {
            const options = {
                method: 'POST',
                body: JSON.stringify( bodyJson )  
            };
            fetch(url, options)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(() => reject('Rejected'));
            });
}

export async function deleteTask(url) {
	return new Promise((resolve, reject) => {
            const options = {
                method: 'DELETE',  
            };
            fetch(url, options)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(() => resolve());
            });
}

export async function saveTask(url, bodyJson) {
	return new Promise((resolve, reject) => {
            const options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify( bodyJson )  
            };
            fetch(url, options)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(() => resolve());
            });
}

