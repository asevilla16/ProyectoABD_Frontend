import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { purchase } from '../models/purchase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseRegistriesService {

  API_URI = 'https://localhost:44342';

  constructor(private http: HttpClient) { }


  getPurchaseRegistries(){
    return this.http.get(`${this.API_URI}/detallecomprascontroller`)
  }

  getPurchase(id: string){
    return this.http.get(`${this.API_URI}/detallecomprascontroller/${id}`);
  }
  
  deletepurchase(id: string){
    return this.http.delete(`${this.API_URI}/detallecomprascontroller/${id}`);
  }

  savePurchaseRegistry(Purchase: purchase){
    return this.http.post(`${this.API_URI}/detallecomprascontroller/`, Purchase);
  }

  updatePurchase(id: string, updatedpurchase: purchase): Observable<purchase> {
    return this.http.put(`${this.API_URI}/detallecomprascontroller/${id}`, updatedpurchase)
  }

}
