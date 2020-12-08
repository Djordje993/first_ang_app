import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { PizzaInfoComponent } from './components/pizza-info/pizza-info.component';
import { GivemailComponent } from './components/givemail/givemail.component';

import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';

import { LoginService } from './services/login.service';
import { PizzasDataService } from './services/pizzas-data.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    PizzaInfoComponent,
    HomeComponent,
    AboutComponent,
    SignupComponent,
    GivemailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    LoginService,
    PizzasDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
