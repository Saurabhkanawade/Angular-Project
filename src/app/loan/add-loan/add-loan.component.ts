import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.scss']
})
export class AddLoanComponent implements OnInit {

  userid=0;
  loanid=0;


  constructor(private activatedRoute:ActivatedRoute) { 
   this.activatedRoute.params.subscribe((params)=>{

    // const  interVal=params;
    
    // this.userid=interVal['userid'];
    // this.loanid=interVal['loanid'];
    this.loanid=params['loanid'];
    this.userid=params['userid'];

    console.log(params);

   })

  }

  ngOnInit(): void {
  }

}
