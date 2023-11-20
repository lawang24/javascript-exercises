const findTheOldest = function (people) {
    return people.reduce((oldest, next) => getAge(oldest) > getAge(next) ? oldest : next);
};

function getAge(person) {
    const endDate = ('yearOfDeath' in person) ? person['yearOfDeath'] : new Date().getFullYear();
    return endDate - person['yearOfBirth'];
}

// Do not edit below this line
module.exports = findTheOldest;
