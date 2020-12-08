import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-givemail',
  templateUrl: './givemail.component.html',
  styleUrls: ['./givemail.component.scss']
})
export class GivemailComponent implements OnInit {

  mailInput: String= "";

  @Output() public closeEmitter= new EventEmitter();
  @Output() public giveMailEmitter= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  giveMail(){
    this.giveMailEmitter.emit(this.mailInput);
    this.close();
  }

  close(){
    this.closeEmitter.emit();
  }

}
