import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MasterNavigationComponent } from './Components/master-navigation/master-navigation.component';
import { PurchaseregistryComponent } from './Components/purchaseregistry/purchaseregistry.component';
import { InsumosregistryComponent } from './Components/insumosregistry/insumosregistry.component';
import { ProveedoresregistryComponent } from './Components/proveedoresregistry/proveedoresregistry.component';
import { CategoriesregistriesComponent } from './Components/categoriesregistries/categoriesregistries.component';
import { InvetarioregistriesComponent } from './Components/invetarioregistries/invetarioregistries.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterNavigationComponent,
    PurchaseregistryComponent,
    InsumosregistryComponent,
    ProveedoresregistryComponent,
    CategoriesregistriesComponent,
    InvetarioregistriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
