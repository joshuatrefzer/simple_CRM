export class User {

    firstname: string;
    lastname: string;
    birthdate: number
    street: string;
    zipcode: number;
    city: string;
    email: any;

    constructor(obj?: any) {
        this.firstname = obj ? obj.firstname : '';
        this.lastname = obj ? obj.lastname : '';
        this.birthdate = obj ? obj.birthdate : '';
        this.street = obj ? obj.street : '';
        this.zipcode = obj ? obj.zipcode : '';
        this.city = obj ? obj.city : '';
        this.email = obj ? obj.email : '';
    }

    public toJson(): any {
        return {
            firstname: this.firstname,
            lastname: this.lastname,
            birthdate: this.birthdate,
            street: this.street,
            zipcode: this.zipcode,
            city: this.city,
            email: this.email
        }
    }
}