import { Component, OnInit, HostBinding } from '@angular/core';
import { proveedor } from 'src/app/models/proveedor';

import {ProveedoresService} from '../../Services/proveedores.service';


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
    this.proveedoresservice.getProveedoresAll().subscribe(
      res=>{
        console.log('res :>> ', res);
        this.allproveedores = res;
      },
      err => console.log(err)
    )

  }

  

  fillProvForm(id: number){
    this.selectedProveedorID = id;
    

    this.proveedoresservice.getProveedoresID(this.selectedProveedorID.toString()).subscribe(
      res=>{
        console.log('res :>> ', res);
        this.oneproveedorSelected = res;
      },
      err =>console.log('err :>> ', err)
    )

  }

  AddProveedor(Proveedorform: proveedor){

  }
  


}
