import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  datos:Array<any> = [
    {
      "id": "249942",
      "name": "Hotel Stefanos"
    },
    {
      "id": "161901",
      "name": "Hotel Santa Cruz"
    },
    {
      "id": "161914",
      "name": "NM Lima Hotel"
    },
    {
      "id": "208599",
      "name": "El Golf Hotel Boutique"
    },
    {
      "id": "236309",
      "name": "Casa Andina Select Miraflores"
    },
    {
      "id": "161899",
      "name": "Radisson Hotel Decapolis Miraflores"
    },
    {
      "id": "104074",
      "name": "Antigua Miraflores Hotel"
    },
    {
      "id": "512559",
      "name": "Casa Falleri Boutique Hotel"
    },
    {
      "id": "228165",
      "name": "Habitat Hotel"
    },
    {
      "id": "137536",
      "name": "Hotel San Blas"
    },
    {
      "id": "266879",
      "name": "Palmetto Hotel Business San Borja"
    },
    {
      "id": "19325",
      "name": "Foresta Hotel Lima"
    },
    {
      "id": "427467",
      "name": "Royal Inca Hotel"
    }
]
  constructor() { }

  ngOnInit() {
  }

}
