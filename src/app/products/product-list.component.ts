import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent 
    implements OnInit {
    pageTitle: string="Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string ;
    filteredProducts: IProduct[];
    products: IProduct[]=
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

    constructor() {
        this.filteredProducts = this.products;
    }
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

     toggleImage():void {
       this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log("In OnInit")
    }
}