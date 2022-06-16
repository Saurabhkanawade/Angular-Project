import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  name:String;

  constructor(private msgservice:MessageService) { 

    this.name=msgservice.getmessage();
    console.log(this.name);
  }

  ngOnInit(): void {
  }

}
