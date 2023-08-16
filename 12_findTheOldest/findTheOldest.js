const findTheOldest = function(people) {
    let old = people.reduce((person1, person2) => {
        let age1 = person1.yearOfDeath - person1.yearOfBirth;
        let age2 = person2.yearOfDeath - person2.yearOfBirth;
    
        if (age1 > age2) {
            return person1;
        } else {
            return person2;
        }
    });
        return old;
};

// Do not edit below this line
module.exports = findTheOldest;