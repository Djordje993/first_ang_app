import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SendorderService } from '../../services/sendorder.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  askForMailOpened: Boolean=false;

  @Input() cartData: any;
  @Output() public closeEmitter= new EventEmitter();
  @Output() public removePizzaEmitter= new EventEmitter();
  @Output() public removeAllPizzas= new EventEmitter();

  constructor(private sendorderService: SendorderService) { }

  ngOnInit(): void {
  }

  get fullPrice(){
    let sum=0;
    for(let i=0; i<this.cartData.length; i++){
      sum+=this.cartData[i].pid_price;
    }
    return sum;
  }

  removePizza(idx:any){
    this.removePizzaEmitter.emit(idx);
  }

  toggleAskForMail(){
    this.askForMailOpened=!this.askForMailOpened;
  }

  handleOrder(){
    if(sessionStorage.getItem('email')){
      this.sendOrder(sessionStorage.getItem('email'));
    }
    else{
      this.toggleAskForMail();
    }
  }

  handleMailGiving(email:any){
    this.sendOrder(email);
  }

  sendOrder(email:any){
    let allPizzas=[];
    for(let i=0; i<this.cartData.length; i++){
      allPizzas.push(this.cartData[i].pid_name);
    }
    this.sendorderService.postOrder(
      allPizzas,
      this.fullPrice,
      email
    ).subscribe((res)=>{
      console.log(res);
      this.removeAllPizzas.emit();
    });
  }
  
  close(){
    this.closeEmitter.emit();
  }
}
