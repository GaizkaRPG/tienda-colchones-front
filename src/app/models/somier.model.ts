export class Somier {

    constructor(_id = '', name = '', description = '', img = '', price = 0){
        this._id = _id;
        this.name = name;
        this.description = description;
        this.img = img;
        this.price = price;
    }

    _id: string;
    name: string;
    description: string;
    img: string;
    price: number;
}