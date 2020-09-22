import { Component, OnInit, HostBinding } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import {insumo} from '../../models/insumo';
import { InsumosService } from '../../Services/insumos.service';
import {CategoriasService} from '../../Services/categorias.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-insumosregistry',
  templateUrl: './insumosregistry.component.html',
  styleUrls: ['./insumosregistry.component.css']
})
export class InsumosregistryComponent implements OnInit {


  @HostBinding('class') classes = 'row';
  showaddform: boolean;
  showedifform: boolean = true;

  allinsumos: any = [];
  allcategories: any = [];

  constructor(public insumoservice: InsumosService, public categoryservices: CategoriasService ) { }

  ngOnInit(): void {

    this.getallinsumos();
    this.getallcategories();

  }

  getallinsumos(){
    this.insumoservice.getInsumosAll().subscribe(
      res=>{
        
        this.allinsumos = res;
      }
    )
  }

  getallcategories(){
    this.categoryservices.getCategoriasAll().subscribe(
      res=>{
        
        this.allcategories = res;
      }
    )

  }

  hiddeeditform(){
    this.showaddform= true;
    this.showedifform=false;
    
  }
  
  showeditform(){
    this.showaddform= false;
    this.showedifform=true;
    
  }

  Editinsumo(insumoform){

  }

  addtoform(insumo: insumo){
    this.insumoservice.selectedinsumo = insumo;
  }

  addnewinsumo(insumoform){

    
  }

}
