import { Component, OnInit } from '@angular/core';

import { PurchaseRegistriesService } from '../../Services/purchase-registries.service';
import { ProveedoresService } from '../../Services/proveedores.service';
import { purchase } from 'src/app/models/purchase';

@Component({
  selector: 'app-purchaseregistry',
  templateUrl: './purchaseregistry.component.html',
  styleUrls: ['./purchaseregistry.component.css']
})
export class PurchaseregistryComponent implements OnInit {

  

  purchasereg: any = [];
  
  puchasedetail: any = [];
  purchaseorder: any = [];
  

  selectedPurchaceID: number;
  selectedOrderID: number;
  selectedProveedorID: number;
  
  

  constructor(private purchaseeegistryservice: PurchaseRegistriesService, private proveedoresservice: ProveedoresService) { }

  ngOnInit(): void {
    this.purchaseeegistryservice.getDetalleComprasAll().subscribe(
      res =>{
        console.log(res);
        this.purchasereg = res;
      },
      err => console.log(err)
    )

  }

  fillform(id: number, idordencompra: number){
   
    this.selectedOrderID = idordencompra;
    this.selectedPurchaceID = id;
   
    
    this.purchaseeegistryservice.getOrdenCompraID(this.selectedOrderID.toString()).subscribe(
      res =>{
        console.log(res);
        this.puchasedetail = res;
      },
      err => console.log(err)
      
    )
    
    this.purchaseeegistryservice.getDetalleCompraID(this.selectedPurchaceID.toString()).subscribe(
      res =>{
        console.log(res);
        this.purchaseorder = res;
      },
      err => console.log(err)
    )
/*
    this.proveedoresservice.getProveedoresID(this.selectedProveedorID.toString()).subscribe(
      res =>{
        this.proveedoreselected = res;
      },
      err => console.log(err)
    )*/
    //PrecioUnitario1.value = this.puchasedetail.PrecioUnitario;
    
    

  }

  AddRegistroCompra(registryPurch: purchase){
      
  }
  

}
