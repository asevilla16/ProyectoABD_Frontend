import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchaseregistryComponent } from './Components/purchaseregistry/purchaseregistry.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:  '/purchase-registry',
    pathMatch: 'full'
  },
  {
    path: 'purchase-registry',
    component: PurchaseregistryComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
