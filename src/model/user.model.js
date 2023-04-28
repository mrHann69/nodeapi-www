class User {
    constructor(name, surname, type, number) {
        this.name = name;
        this.surname = surname;
        this.type = type;
        this.number = number;
    }

    toString(){
        return `{
            name: ${this.name},
            name: ${this.surname},
            name: ${this.type},
            name: ${this.number}
        }`
    }
}

module.exports = User