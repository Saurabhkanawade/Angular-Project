import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'simpleProject';
 

 getName='';

  colvalue=2;
  red='green';
  redcolor='red';
  browncolor='brown';

  img='saurabh.png';
  alt='img not found';

  chooseOption='car';

  enterName='saurabh';
 
  isTrue=true;

  setName='hello this is interpolatioin';

  setNumber=295;
 
  setObject= {
    firstName:'shankar',
    Dob:'06-Jun-2000',
    currentAddress:'Mumbai'
  }





  gn='red ';

  newcontact = 1;
  oldcontact = 10;

  ifTrue=true;
  option='car';
  
  students=[
    {
      firstName:'saurabh',
      Dob:'30-sept-2000',
      currentAddress:'sangamner'
    },
    {
      firstName:'shailesh',
      Dob:'06-nov-2000',
      currentAddress:'pune'
    },
    {
      firstName:'shankar  ',
      Dob:'06-Jun-2000',
      currentAddress:'Mumbai'
    },
    {
      firstName:'Rushi',
      Dob:'24-Oct-1996',
      currentAddress:'Delhi'
    },
  ];
  
  example=
  {
    firstName:'saurabh',
    Dob:'30-sept-2000',
    currentAddress:'sangamner'
  }
  





// ****custom pipes

  employes:any=[
    {
     name:'saurabh',
     gender:'male',
     address:'sangamner',
     dob:'30-sept-2000',
     experience:6
    },
    {
     name:'shankar',
     gender:'male',
     address:'pune',
     dob:'06-june-2000',
     experience:5
    },
    {
     name:'shailesh',
     gender:'male',
     address:'delhi',
     dob:'12-oct-2000',
     experience:9
    },
    {
     name:'jayshree',
     gender:'female',
     address:'pune',
     dob:'09-jan-2000',
     experience:8
    },
    {
     name:'payal',
     gender:'female',
     address:'nashik',
     dob:'10-oct-2000',
     experience:5
    },
    {
     name:'amit',
     gender:'male',
     address:'sangamner',
     dob:'07-dec-2000',
     experience:4
    }
  
  ];


  // here is some event binding methods;

  getMethod(){
    console.log('hello button has clicked'); 
   
  }
   
  getOver(a: any,b: any,c: any){
    //  document.body.innerText='hello this is getover method';
     console.log('on mouse over'+a,b,c);
  }
  getOverNumber(a: number,b:string){
    //  document.body.innerText='hello this is getover method';
     console.log('on mouse over'+a,b);
  }


  // example of the custom piping 

  persons:any=[
  {
    name:'saurabh kanawade',
    address:'hydrabad',
    age:21,
    isWorking:true,
    gender:'male'
  },
  {
    name:'shailesh Karpe',
    address:'banglore',
    age:26,
    isWorking:true,
    gender:'male'
  },
  {
    name:'sagar bhomale',
    address:'chakan',
    age:45,
    isWorking:true,
    gender:'male'
  },
  {
    name:'shankar kandekar',
    address:'mumbai',
    age:21,
    isWorking:true,
    gender:'male'
  },
  {
    name:'amit kanawade',
    address:'nashik',
    age:77,
    isWorking:false,
    gender:'male'
  },
  {
    name:'sagar kanawade',
    address:'delhi',
    age:55,
    isWorking:true,
    gender:'male'
  },
  {
    name:'jayashree walunj',
    address:'pune',
    age:21,
    isWorking:false,
    gender:'female'
  },
]


}
