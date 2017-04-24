import {Component,OnInit} from '@angular/core'
import { IProduct }  from './product';
import { ProductFilterPipe }  from './product-filter-pipe';

@Component({
    selector: "product-list",
    templateUrl: "app/products/product-list.component.html",
    styleUrls: ["app/products/product-list.component.css"],

  
})

export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List"
    filterByTitle:string = "Filter By"
    showImageHeading: string = "Show Image"
    hideImageHeading: string = "Hide Image"
    filterParameter: string = ""
    ratingClickedTitle: string = ""

    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.9,
            "starRating": 3.2,
            "imageUrl": "http://images.clipartpanda.com/sports-equipment-clipart-black-and-white-soccer-ball-hi.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://images.clipartpanda.com/christmas-tree-clip-art-LTKdEy5Ta.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://images.clipartpanda.com/clipart-smiley-face-RTAG68GTL.jpeg"
        },
        {
            "productId": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2016",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "http://images.clipartpanda.com/clot-clipart-childrens-clothes-collection-vector-739543.jpg"
        },
        {
            "productId": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2015",
            "description": "Standard two-button video game controller",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": "http://images.clipartpanda.com/iron-man-clipart-e20dca2a318ccda39836af96ccef2663.jpg"
        }
    ]
    imageWidth: number = 50
    imageMargin: number = 2
    showImage: boolean = false
    getTiitle(): string  {
            return this.pageTitle;
    }
    toggleImage(): void {
        this.showImage = !this.showImage
    }
    ngOnInit(): void {
        console.log("---on initialization----");
    }
    onRatingClick(message: string):void {
        console.log(message); 
        this.ratingClickedTitle =  " : " + message;
    }
}