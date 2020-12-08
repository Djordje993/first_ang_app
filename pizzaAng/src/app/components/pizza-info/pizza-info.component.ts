import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pizza-info',
  templateUrl: './pizza-info.component.html',
  styleUrls: ['./pizza-info.component.scss']
})
export class PizzaInfoComponent implements OnInit {

  @Input() singlePizzaInfo:any;
  @Output() public closeEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {console.log(this.singlePizzaInfo)
  }

  close(){
    this.closeEmitter.emit('');
  }

}
