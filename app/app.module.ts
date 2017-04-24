import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent }  from './app.component';
import { ProductListComponent }  from './products/product-list.component';
import { ProductFilterPipe }  from './products/product-filter-pipe';


@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,ProductListComponent,ProductFilterPipe],
  // pipes: [ProductFilterPipe],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
