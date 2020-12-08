import { Component, OnInit } from '@angular/core';
import { PizzasDataService } from '../../services/pizzas-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cartOpened:Boolean = false;
  pizzaInfoOpened:Boolean = false;
  allPizzas:any;
  singlePizzaInfo: any;
  cartData: Array<any>= [];

  constructor(private pizzasDataService: PizzasDataService) { 

  }

  ngOnInit(): void {
    this.handlePizzasData();
  }

  handlePizzasData(){
    this.pizzasDataService.getPizzasData()
      .subscribe((res)=>{
        console.log(res);
        this.allPizzas=res;
      });
  }

  selectSinglePizza(idx: any){
    this.singlePizzaInfo=this.allPizzas[idx];
    this.togglePizzaInfo();
  }
  toggleCart(){
    this.cartOpened=!this.cartOpened;
  }
  togglePizzaInfo(){
    this.pizzaInfoOpened=!this.pizzaInfoOpened;
  }
  addToCart(idx:any){
    this.cartData.push(this.allPizzas[idx]);
  }
  removeFromCart(idx:any){
    this.cartData.splice(idx, 1);
  }
  emptyCart(){
    this.cartData=[];
    this.toggleCart();
  }

}
