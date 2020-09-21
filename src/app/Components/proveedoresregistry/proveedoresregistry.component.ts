import { Component, OnInit, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { proveedor } from 'src/app/models/proveedor';

import {ProveedoresService} from '../../Services/proveedores.service';

declare var M: any;
@Component({
  selector: 'app-proveedoresregistry',
  templateUrl: './proveedoresregistry.component.html',
  styleUrls: ['./proveedoresregistry.component.css'],
  providers: [ProveedoresService]
})
export class ProveedoresregistryComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  
  allproveedores: any = [];
  oneproveedorSelected: any = [];
  selectedProveedorID: number;
  nombreproveedor1: string;

  constructor(public proveedoresservice: ProveedoresService) { }

  ngOnInit(): void {
    
    this.getallProveedore();

  }

  getallProveedore(){

    this.proveedoresservice.getProveedoresAll().subscribe(
      res=>{
        console.log('res :>> ', res);
        this.allproveedores = res;
      },
      err => console.log(err)
    )
  }

  AddProveedor(form: NgForm){
   if(form.value.id){
     this.proveedoresservice.updateProvider(form.value).subscribe(
       res=>{
         console.log('res :>> ', res);
       }
     )
   }
   else{
    console.log('form.value :>> ', form.value);
    this.proveedoresservice.saveNewProvider(form.value).subscribe(
      res =>{
        console.log('res :>> ', res);
      }
    )
    if(form){
      form.reset();
      this.proveedoresservice.selectedproveedor = new proveedor();
      M.toast({html: 'Proveedor Agregado'})
    }
    
  }
}

  

editproveedor(provider: proveedor){
  this.proveedoresservice.selectedproveedor = provider;
  //this.proveedoresservice.updateProvider()
}
  


}
