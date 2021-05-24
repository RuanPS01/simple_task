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

export async function saveTask(url, bodyJson) {
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

