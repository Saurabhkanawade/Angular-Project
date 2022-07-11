import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
   
  id=0;
  color='';
  price=0;
  pageno=0;
  product='';


  constructor( private activatedRoute  : ActivatedRoute) {

    this.activatedRoute.queryParams.subscribe((params)=>{
    
      this.id=params['id'];
      this.color=params['color'];
      this.price=params['price'];
      this.pageno=params['pageno'];
      this.product=params['product'];

      console.log(params)
    });
   }

  ngOnInit(): void {
  }

}
