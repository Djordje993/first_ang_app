import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usernameInput: String = "";
  passwordInput: String = "";
  showSignUp=false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    
  }

  get currentUser(){
    return {
      name: sessionStorage.getItem("username"),
      email: sessionStorage.getItem("email")
    }
  }

  handleLogin(){
    this.loginService.postLogin(
      this.usernameInput, 
      this.passwordInput
      ).subscribe((res)=>{
        if(res.error){
          console.error(res.error);
          return;
        }
        console.log(res.data);
        sessionStorage.setItem("username", res.data.usr_username);
        sessionStorage.setItem("email", res.data.usr_email);
        this.usernameInput="";
        this.passwordInput="";
      });
  }

  logout(){
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("email");
  }

}
