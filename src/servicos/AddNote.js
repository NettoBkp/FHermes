export function AddNote(noteData) {
    return new Promise((resolve, reject) => {

        let token = sessionStorage.getItem('userData');

        //fetch('https://wp.artsystemti.com/wp-json/wp/v2', {
            fetch(`http://localhost:3001/hermes/add`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
         body: JSON.stringify(noteData)
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