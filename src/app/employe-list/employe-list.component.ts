import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.scss']
})
export class EmployeListComponent implements OnInit {

  constructor() {
    
    console.log('employe loaded');
   }

  ngOnInit(): void {
  }

}
