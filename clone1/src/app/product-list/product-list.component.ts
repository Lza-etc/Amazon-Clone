import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// Define the Product class
class Product {
  public id: any=0;
  public brand: any = "";
  public name: any = "";
  public imgurl: any[] = [];
  public rating: any = 0;
  public discount: any = 0;
  public category: any = "";
  public gender: any = "";
  public mrp: any = 0;
  public price: any = 0;
  public extradetails: any = {};

  constructor(id: any,brand: any, name: any, category: any, gender: any, imgurl: any[], rating: any, discount: any, mrp: any, price: any, extradetails: any) {
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

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports:[
    CommonModule
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  // Array to hold the list of products
  public productList: any[]  = [];
  public currentProduct: number=-1;

  ngOnInit(): void {
    this.productList=[
      new Product(1, '1nauti nati', 'Nautinati Boy\'s Fleece Neck Hooded Sweatshirt (NN312-5011_Yellow_3 4 Years)','Party','boys' ,['https://m.media-amazon.com/images/I/61YuOR1H6DL._SX679_.jpg', 'https://m.media-amazon.com/images/I/61aFJQPFOGL._SY741_.jpg', 'https://m.media-amazon.com/images/I/71zksC83+8L._SY741_.jpg', 'https://m.media-amazon.com/images/I/710aAmR2wkL._SY741_.jpg'], 5.0, 77, 1499, 349, { Material: "Fleece", Sleeve: "Long Sleeve", Fit: "Regular", LengthStandard: "Length", Neck: "Hooded Neck" }),
      new Product(2, '2NIKHAT FASHION ONLINE', 'Kid\'s Delta Casual Comfotable and Breathable Delta Frock/Dress for Girls', 'Casual','girls',['https://m.media-amazon.com/images/I/51X0JusfjsL.jpg', 'https://m.media-amazon.com/images/I/61tkGg1Rl3L._SY741_.jpg', 'https://m.media-amazon.com/images/I/51i892-M0FL._SY741_.jpg', 'https://m.media-amazon.com/images/I/419n23Dtc+L._SY741_.jpg'], 4.2, 10, 360, 329, { Material: "Delta", Fit: "Regular", StyleFit: "Flare", Closure: "Zipper", Care: "Hand Wash Only" }),
      new Product(3, '3Macitoz', 'Stylish Dungaree for Baby Boys | Half Sleeves & Knee Length with Bow | Suitable as Casual & Party Wears Baby dress','Party' ,'boys',['https://m.media-amazon.com/images/I/919vheixT0L._SX679_.jpg', 'https://m.media-amazon.com/images/I/A1jhB7f2jFL._SX679_.jpg', 'https://m.media-amazon.com/images/I/71nV2bAmw2L._SX679_.jpg', 'https://m.media-amazon.com/images/I/81tRP0Sk1TL._SX679_.jpg'], 4.5, '-54%', 1199, 550, { Material: "Cotton", Fit: "Relaxed", StyleSantino: "Baby party wear", Closure: "No Closure", Care: "Machine Wash" }),
      new Product(4, '4BABY GO', 'Full Sleeve Regular Round Neck A Line Frocks for Baby Girls (Pack of 2)','Casual','girls', ['https://m.media-amazon.com/images/I/615pksFmAlL._SX569_.jpg', 'https://m.media-amazon.com/images/I/61WhKW4qkwL._SX679_.jpg', 'https://m.media-amazon.com/images/I/81eTEgjKwiL._SX679_.jpg', 'https://m.media-amazon.com/images/I/61YXIUXJ6NL._SX679_.jpg'], 4.4, 62, 1299, 499, { Material: "Cotton", Length: "Midi", Occasion: "Casual", Sleeve: "Long Sleeve", Pattern: "Solid" }),
      new Product(5, '5 Niren Enterprise', 'Hulk Frock with Beautiful Floral Print Baby Girl Dress', 'Party','girls' , ['https://m.media-amazon.com/images/I/51slMfViU2L._SY741_.jpg', 'https://m.media-amazon.com/images/I/61EKLPUJthL._SY741_.jpg', 'https://m.media-amazon.com/images/I/51kupPHQpDL._SY741_.jpg', 'https://m.media-amazon.com/images/I/51uCphRZMzL._SY741_.jpg'], 3.8, 77, 1999, 467, { Material: "Rayon", Length: "Knee-Length", Occasion: "Ceremony", Sleeve: "Sleeveless", Pattern: "Floral" }),
     ];
  }
  public showProductDetails(id:number): void{
    this.currentProduct=id;
  }
  public getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
