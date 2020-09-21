import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import{ FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MasterNavigationComponent } from './Components/master-navigation/master-navigation.component';
import { PurchaseregistryComponent } from './Components/purchaseregistry/purchaseregistry.component';
import { InsumosregistryComponent } from './Components/insumosregistry/insumosregistry.component';
import { ProveedoresregistryComponent } from './Components/proveedoresregistry/proveedoresregistry.component';
import { CategoriesregistriesComponent } from './Components/categoriesregistries/categoriesregistries.component';
import { InvetarioregistriesComponent } from './Components/invetarioregistries/invetarioregistries.component';

import { PurchaseRegistriesService } from './Services/purchase-registries.service';
import { MasterNavitationSuperadminComponent } from './Components/master-navitation-superadmin/master-navitation-superadmin.component';
import { EmpleadosRegistriesComponent } from './Components/empleados-registries/empleados-registries.component';
import { ClientesRegistriesComponent } from './Components/clientes-registries/clientes-registries.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterNavigationComponent,
    PurchaseregistryComponent,
    InsumosregistryComponent,
    ProveedoresregistryComponent,
    CategoriesregistriesComponent,
    InvetarioregistriesComponent,
    MasterNavitationSuperadminComponent,
    EmpleadosRegistriesComponent,
    ClientesRegistriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PurchaseRegistriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
