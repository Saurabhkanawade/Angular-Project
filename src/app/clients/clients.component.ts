import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }




  clients=[
 {
  clientId:1,
  firstName:'saurabh',
  lastName:'kanawade',
  gender:'male',
  salary:55000,
 },
 {
  clientId:2,
  firstName:'shankar',
  lastName:'kandekar',
  gender:'male',
  salary:35000,
 },
 {
  clientId:3,
  firstName:'shailesh',
  lastName:'kanawade',
  gender:'male',
  salary:55000,
 },
 {
  clientId:4,
  firstName:'jayu',
  lastName:'kanawade',
  gender:'female',
  salary:42000,
 },
 {
  clientId:5,
  firstName:'hindvi',
  lastName:'chaudhary',
  gender:'female',
  salary:25000,
 },
];
}
