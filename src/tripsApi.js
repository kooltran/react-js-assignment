var myHeaders = new Headers({
    'Content-Type': 'application/json',
});

export const tripsApi = () => {
    return fetch('https://api.gigacover.com/recruitment/challenge', {
        mode: 'no-cors',
        headers: myHeaders
    }).then(res => res.json())
}
