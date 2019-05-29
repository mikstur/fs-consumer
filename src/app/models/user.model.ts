export class User {
    public firstname: string;
    public lastname: string;

    private age: number;

    constructor() {
        this.firstname = "";
        this.lastname = "";
    }

    public setFirstname(firstname: string) {
        this.firstname = firstname;
    }

    public setDateOfBirth(dob: Date) {
        // Calculate the age
        this.age = 55;
    }

    public getAge() {
        return this.age;
    }

    // public setFullname(name: string) {

    // }
}