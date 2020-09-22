import { Component, OnInit, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InventarioService } from '../../Services/inventario.service';
import { inventario } from "../../models/inventario";
//import {} from "../../Services/insu"

declare var M: any;
@Component({
  selector: 'app-invetarioregistries',
  templateUrl: './invetarioregistries.component.html',
  styleUrls: ['./invetarioregistries.component.css']
})
export class InvetarioregistriesComponent implements OnInit {

  allinventarios: any = [];

  constructor(public serviciosInventario: InventarioService) { }

  ngOnInit(): void {
    this.getallinventario();
  }

  getallinventario(){
    this.serviciosInventario.getinventariosAll().subscribe(
      res=>{
        console.log('res :>> ', res);
        this.allinventarios = res;
      }
    )
    
  }

}
