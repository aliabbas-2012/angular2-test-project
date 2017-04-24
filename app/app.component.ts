import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: ` <div>
            <h1>{{pageTitle}}.</h1>
            <product-list></product-list>
        </div>
    `,
   
})
export class AppComponent {
    pageTitle: string = "Home Page"
    applicationTitle: string = "Product Management System"
   
}
