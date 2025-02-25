import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from "../shared/shared.module";
import { ProductComponent } from './components/product/product.component';



@NgModule({
 

  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule
]
})
export class ProductsModule { }
