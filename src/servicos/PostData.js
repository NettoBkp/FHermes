export function PostData(userData) {
    return new Promise((resolve, reject) => {
        fetch('https://wp.artsystemti.com/wp-json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
         body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {
                reject(error);
            })
    });
}