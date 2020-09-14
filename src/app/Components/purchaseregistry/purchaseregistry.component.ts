import { Component, OnInit } from '@angular/core';

import { PurchaseRegistriesService } from '../../Services/purchase-registries.service';

@Component({
  selector: 'app-purchaseregistry',
  templateUrl: './purchaseregistry.component.html',
  styleUrls: ['./purchaseregistry.component.css']
})
export class PurchaseregistryComponent implements OnInit {

  constructor(private purchaseeegistryservice: PurchaseRegistriesService) { }

  ngOnInit(): void {
    this.purchaseeegistryservice.getPurchaseRegistries().subscribe(
      res => console.log(res),
      err => console.log(err)
    )

  }

}
