module.exports = class People {
    id = 0;
    name = '';
    age = 0;

    constructor({id, name, age}) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}