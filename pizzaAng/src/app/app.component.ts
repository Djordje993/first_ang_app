import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  get loginName(){
    if(sessionStorage.getItem("username")){
      return "Loged as: "+sessionStorage.getItem("username");
    }
    return 'LogIn';
  }
}
