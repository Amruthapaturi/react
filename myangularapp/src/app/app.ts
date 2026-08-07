import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './pages/header/header';
import { Navbar } from './pages/navbar/navbar';
import { Fetchdata } from './pages/fetchdata/fetchdata';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Header , Navbar , Fetchdata],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 title =signal('Welcome to First Angular Class')

 initialState:any = true

 count:number = 0

 Inc(){
  this.count = this.count+2
 }

 handleClick(){
  this.initialState = this.initialState?"Hello Welcome to Event Listeners and functions":"ghdvdsghfghcHAc"
 }

}
