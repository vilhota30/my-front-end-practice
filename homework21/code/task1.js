function User(name, surname, age, location) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.location = location;
}

User.prototype.getInfo = function() {
    return {
        name: this.name,
        surname: this.surname,
        age: this.age,
        location: this.location,
    };
};

const userMale = new User("Taras", "Kravchenko", 35, "Lviv");
const userFemale = new User("Olena", "Pavlus", 26, "Mykolaiv");
const userTeenager  = new User("Marichka", "Кhusti", 16, "Chernihiv");

console.log(userMale.getInfo());
console.log(userFemale.getInfo());
console.log(userTeenager.getInfo());
