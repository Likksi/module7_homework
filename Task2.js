const userAccount = {
    name: 'Oleg',
    surname: 'Petrov',
    year: 2023,
    status: 'student',
};

function getObjectValues(obj) {
    for (let key in obj) {
        console.log(key + ' = ' + obj[key]);
    }
}

getObjectValues(userAccount);
