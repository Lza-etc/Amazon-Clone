export interface IProduct {
    id: number;
    brand: string;
    name: string;
    imgurl: Array<string>;
    rating: number;
    discount: number;
    category: string;
    gender: string;
    mrp: number;
    price: number;
    extradetails: {[key: string]: string};
  }
  
  export class Product implements IProduct {
    public id: number=0;
    public brand: string = "";
    public name: string = "";
    public imgurl: Array<string> = [];
    public rating: number = 0;
    public discount: number = 0;
    public category: string = "";
    public gender: string = "";
    public mrp: number = 0;
    public price: number = 0;
    public extradetails: {[key: string]: string} = {};
  
    constructor(id: number,brand: string, name: string, category: string, gender: string, imgurl: Array<string>, rating: number, discount: number, mrp: number, price: number, extradetails: 
      {[key:string]: string}) {
      this.id=id;
      this.brand = brand;
      this.name = name;
      this.imgurl = imgurl;
      this.rating = rating;
      this.discount = discount;
      this.gender = gender;
      this.category = category;
      this.mrp = mrp;
      this.price = price;
      this.extradetails = extradetails;
    }
  }
  