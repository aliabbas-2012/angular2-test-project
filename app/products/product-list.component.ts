import {Component} from '@angular/core'

@Component({
    selector: "product-list",
    templateUrl: "app/products/product-list.component.html"
})

export class ProductListComponent {
    pageTitle: string = "Product List"
    filterByTitle:string = "Filter By"
    imageHeading: string = "Show Image"
    proudcts: any[]
    getTiitle(): string  {
            return this.pageTitle;
    }
}