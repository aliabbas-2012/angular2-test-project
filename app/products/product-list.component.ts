import {Component,OnInit} from '@angular/core'
import { IProduct }  from './product';
import { ProductFilterPipe }  from './product-filter-pipe';
import { ProductService }  from './product.service';

@Component({
    selector: "product-list",
    templateUrl: "app/products/product-list.component.html",
    styleUrls: ["app/products/product-list.component.css"],

  
})

export class ProductListComponent implements OnInit {

    constructor(private _productService: ProductService){
       
    }


    pageTitle: string = "Product List"
    filterByTitle:string = "Filter By"
    showImageHeading: string = "Show Image"
    hideImageHeading: string = "Hide Image"
    filterParameter: string 
    ratingClickedTitle: string = ""
    errorMessage: string 
    products: IProduct[] 

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
        this._productService.getProducts().
            subscribe(
                products=> this.products = products,
                error => this.errorMessage = <any> error
        ) // end of subscribe
        
    }
    onRatingClick(message: string):void {
        console.log(message); 
        this.ratingClickedTitle =  " : " + message;
    }
}