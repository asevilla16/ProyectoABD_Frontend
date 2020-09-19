import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { purchase } from '../models/purchase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseRegistriesService {

  API_URI = 'https://localhost:44342/api';
  selectedPurchace: purchase;
  

  constructor(private http: HttpClient) { }


  getDetalleComprasAll(){
    return this.http.get(`${this.API_URI}/detallecompras`)
  }
  getOrdenComprasAll(){
    return this.http.get(`${this.API_URI}/OrdenCompras`)
  }

  getDetalleCompraID(id: string){
    return this.http.get(`${this.API_URI}/detallecompras/${id}`);
  }
  getOrdenCompraID(id: string){
    return this.http.get(`${this.API_URI}/OrdenCompras/${id}`);
  }



  deletepurchase(id: string){
    return this.http.delete(`${this.API_URI}/OrdenCompras/${id}`);
  }
  savePurchaseRegistry(Purchase: purchase){
    return this.http.post(`${this.API_URI}/OrdenCompras/`, Purchase);
  }
  updatePurchase(id: string, updatedpurchase: purchase): Observable<purchase> {
    return this.http.put(`${this.API_URI}/OrdenCompras/${id}`, updatedpurchase)
  }

}
