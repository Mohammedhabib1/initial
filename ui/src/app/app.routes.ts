import { Routes } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ShopComponent } from './shop/shop.component';
import { SingleProductComponent } from './single-product/single-product.component';

export const routes: Routes = [


  {
    path: 'add', component: ProductFormComponent

  },
  {
    path: '', component: ProductListComponent
  },
  {
    path: 'update/:id', component: ProductUpdateComponent
  },
  {
    path: 'single', component: SingleProductComponent
  },
  {
    path: 'shop', component: ShopComponent
  }
];


