import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: 'product-list.component.html'
})
export class ProductListComponent {
    pageTitle: string="Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = "ice";
    products: any[]=
    [
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
       
    ];
    toggleImage():void {
       this.showImage = !this.showImage;
    }
}