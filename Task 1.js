const userAccount = {
    name: 'Oleg',
    surname: 'Petrov',
    year: 2023,
    status: 'student',
};

getObjectValues(userAccount);

function getObjectValues(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ' = ' + obj[key]);
        }
    }
}
