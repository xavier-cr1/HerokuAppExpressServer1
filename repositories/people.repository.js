const People = require("../entities/people.entity");

var PEOPLE_DB = undefined;
var LAST_ID = 0;

module.exports = class PeopleRepository {
    constructor() {}
    
    /**
     * @returns { Map<number, string>() }
     */
    getDB() {
        return PEOPLE_DB || (PEOPLE_DB = new Map())
    }

    /**
     * @param { People } people 
     */
    save(people) {
        people.id = ++LAST_ID;
        this.getDB().set(people.id, people);
    }

    /**
     * 
     * @returns { People[] }
     */
    list() {
        return Array.from(this.getDB().values());
    }
}
