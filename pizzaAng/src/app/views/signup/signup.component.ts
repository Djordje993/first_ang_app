import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  usernameInput: String= "";
  passwordInput: String= "";
  emailInput: String= "";
  adressInput: String= "";

  @Output() public closeEmitter = new EventEmitter();

  constructor(private signupService: SignupService) { }

  ngOnInit(): void {
  }

  handleSignup(){
    this.signupService.sendSingup(
      this.usernameInput,
      this.passwordInput,
      this.emailInput,
      this.adressInput
    ).subscribe((res)=>{
      console.log(res);
      this.close();
    });
  }

  close(){
    this.closeEmitter.emit('');
  }
  
}
