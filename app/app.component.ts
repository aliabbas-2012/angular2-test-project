import { Component } from '@angular/core';
// import { HttpModule }  from '@angular/http';
import 'rxjs/Rx'
import { ProductService }  from './products/product.service';

@Component({
    selector: 'my-app',
    template: ` <div>
            <h1>{{pageTitle}}.</h1>
            <product-list></product-list>
        </div>
    `,
    providers: [ProductService]
   
})
export class AppComponent {
    pageTitle: string = "Home Page"
    applicationTitle: string = "Product Management System"
   
}
