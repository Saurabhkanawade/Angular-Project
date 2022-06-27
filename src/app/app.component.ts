import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'simpleProject';

  styleproperty='c1';

  head_demo='hello this is heading';

  isUserIsLoggedIn=true;

  imgUrl='https://yt3.ggpht.com/ytc/AKedOLS4b38pOOO_p1CArN6Vntm7p69884nRkb6nG1VquB71CtSaXDuPcV-FqYPNcHet=s88-c-k-c0x00ffffff-no-rj-mo';
  altText='img failed to load';

  // object={
  //   'name':'saurabh',
  //   'dob':'30-sept-2000',
  //   'address':'sangamener'
  // }


  contacts=[
    {
      'firstName':'Rushikesh',
      'lastName':'Kandekar',
      'dob':'22-nov-2000'
    },
    {
      'firstName':'Saurabh',
      'lastName':'Kanawade',
      'dob':'30-sept-2000'
    },
    {
      'firstName':'Shankar',
      'lastName':'Kandekar',
      'dob':'06-june-2000'
    },
    {
      'firstName':'Shailesh',
      'lastName':'karpe',
      'dob':'14-oct-2000'
    },
    {
      'firstName':'Sagar',
      'lastName':'bhomale',
      'dob':'10-june-1994'
    }
  ]
  
}
