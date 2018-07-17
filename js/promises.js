function wait(timer){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (timer > 0) {
                resolve();
            } else {
                reject();
            }
        }, timer);
})};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


function getGithubUsernames() {
    return fetch('https://api.github.com/users/Christian-Kenney/events', {headers: {'Authorization': '3c6d033fdf077de45e7622b960aadbed880583fd'}})
        .then(response => response.json())
}
getGithubUsernames().then((usernames) => {
    console.log(usernames[0].created_at);
}).catch(error => console.error(error));

