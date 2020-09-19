import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PurchaseregistryComponent } from './Components/purchaseregistry/purchaseregistry.component';
import { InsumosregistryComponent } from './Components/insumosregistry/insumosregistry.component';
import { ProveedoresregistryComponent } from './Components/proveedoresregistry/proveedoresregistry.component';
import { CategoriesregistriesComponent } from './Components/categoriesregistries/categoriesregistries.component';
import { InvetarioregistriesComponent } from './Components/invetarioregistries/invetarioregistries.component';

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
  {
    path: 'insumosregistry',
    component: InsumosregistryComponent
  },
  {
    path: 'proveedoresregistry',
    component: ProveedoresregistryComponent
  },
  {
    path: 'categoriesregistry',
    component: CategoriesregistriesComponent
  },
  {
    path: 'invetarioregistry',
    component: InvetarioregistriesComponent
  }

];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
