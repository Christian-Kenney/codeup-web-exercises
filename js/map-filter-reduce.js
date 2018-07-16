const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

let newUsers = users.filter( user => user.languages.length > 2);
let emails = users.map(user => user.email);
// let objNums = users.reduce((objNum, users) => {
//     for(var i = 0; i < users.length; i++){
//         objNums[i] += objNums;
//     }
//     return objNums;
// });

let newObject = users.reduce( (accumulation, curObj) => {
    return (accumulation[curObj.id] = curObj);
}, {});

