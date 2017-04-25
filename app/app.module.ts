import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }  from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent }  from './app.component';
import {WelcomeComponent} from './home/welcome.component'
import { ProductListComponent }  from './products/product-list.component';
import { ProductFilterPipe }  from './products/product-filter-pipe';
import { StarComponent }  from './shared/star.component';
import { routing } from './app.routes';
@NgModule({
  imports: [ BrowserModule,FormsModule,HttpModule, routing ],
  declarations: [ AppComponent,WelcomeComponent,ProductListComponent,ProductFilterPipe,StarComponent],
  // pipes: [ProductFilterPipe],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
