// ====== ./app/app.routes.ts ======

// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './home/welcome.component'
import {ProductListComponent} from './products/product-list.component'

// Route Configuration
export const routes: Routes = [
    { path: '',redirectTo: '/welcome',pathMatch: 'full'},
    { path: 'welcome',  component: WelcomeComponent },
    { path: 'products', component: ProductListComponent }

];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);