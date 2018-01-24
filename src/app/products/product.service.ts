import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable()
export class ProductService {

    getProducts(): IProduct[] {
        return [
            {
                imageUrl:"https://peopledotcom.files.wordpress.com/2016/05/mc-hammer-02-435.jpg",
                name:"MC Hammer",
                code:"stop-ht",
                available:510,
                price:3.50,
                rating:2.4,
            },
            {
                imageUrl:"https://metrouk2.files.wordpress.com/2016/11/vanilla-ice-e1479823884816.jpg?w=748&h=599&crop=1",
                name:"Vanilla Ice",
                code:"stop-c&l",
                available:123,
                price:14.98,
                rating:1.8,
            },
            {
                imageUrl:"https://s-i.huffpost.com/gen/1204976/images/o-FLAVOR-FLAV-FRIED-CHICKEN-EVICTION-facebook.jpg",
                name:"Flavor Flav",
                code:"yea-boy",
                available:211,
                price:9.11,
                rating:3.5,
            },
           
        ];    
    }
}