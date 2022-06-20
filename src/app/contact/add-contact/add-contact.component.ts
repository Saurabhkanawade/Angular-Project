import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit, OnChanges, OnDestroy {

  constructor() {
    console.log("hello");
  }

  ngOnInit(): void {}

  ngOnChanges(): void {}

  ngOnDestroy(): void {}
}
