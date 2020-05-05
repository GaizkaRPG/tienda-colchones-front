export class User {

    constructor(_id = '', name = '', password = '', type = 0){
        this._id = _id;
        this.name = name;
        this.password = password;
        this.type = type;
    }

    _id: string;
    name: string;
    password: string;
    type: number;
}