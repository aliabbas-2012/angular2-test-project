import {Component,OnInit,OnDestroy} from '@angular/core'
import {Router,ActivatedRoute} from '@angular/router'

import {Subscription} from 'rxjs/Subscription'

import { IProduct }  from './product';
import { ProductFilterPipe }  from './product-filter-pipe';
import { ProductService }  from './product.service';

@Component({
    selector: "product-detail",
    templateUrl: "app/products/product-detail.component.html",
    styleUrls: ["app/products/product-list.component.css"],

  
})

export class ProductDetailComponent implements OnInit,OnDestroy {
    
    constructor(private _router: Router,private _route: ActivatedRoute,private _productService: ProductService){

    }

    pageTitle: string = "Product Detail"
    private sub: Subscription;
    product: IProduct
    products: IProduct[] 
    errorMessage: String
    ratingClickedTitle: string = ""

    ngOnInit(): void {
        console.log("---on product detail----");
        
        this.sub = this._route.params.subscribe(
                params => {
                    let id = +params['id'];
                    console.log(params)
                    //set page title
                    this.setPageTitle(id)
                    //setting product 
                    this.getProduct(id)

                    
          });
            
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onBack():void {
        this._router.navigate(['products'])
    }

    private setPageTitle(id: number): void{
          this.pageTitle+= ' : '+ id
    }

    getProduct(id: number) {
        this._productService.getProducts().
                            subscribe(
                                products=> this.product = products.find(p => p.productId === id) ,
                                error => this.errorMessage = <any> error
                     ) // end of subscribe
    }

    onRatingClick(message: string):void {
        console.log(message); 
        this.ratingClickedTitle =  " : " + message;
    }

}