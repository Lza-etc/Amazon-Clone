import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NavBar1Component } from './nav-bar1/nav-bar1.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavBar2Component } from './nav-bar2/nav-bar2.component';
import { NavBar3Component } from './nav-bar3/nav-bar3.component';
import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NavBar1Component,
    NavBar2Component,
    NavBar3Component,
    ProductListComponent
  ],
  bootstrap:[
    AppComponent
  ]
})
export class AppModule { }
