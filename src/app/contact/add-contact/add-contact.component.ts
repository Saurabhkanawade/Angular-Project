import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit, OnChanges, OnDestroy {

  photoId =0;
  contactId =0;
  
  constructor(private activatedRoute : ActivatedRoute) {
    
    this.activatedRoute.params.subscribe((params )=>{

      const intervalue=params;

      this.contactId=intervalue['contactId'];
      this.photoId=intervalue['photoId'];

      console.log(params);
      
    })
  }

  ngOnInit(): void {}

  ngOnChanges(): void {}

  ngOnDestroy(): void {}
}
