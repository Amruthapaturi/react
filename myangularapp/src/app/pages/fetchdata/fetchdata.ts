import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-fetchdata',
  imports: [CommonModule],
  templateUrl: './fetchdata.html',
  styleUrl: './fetchdata.css',
})
export class Fetchdata implements OnInit{
 users:any []= []

 constructor(private http:HttpClient){}
  
 ngOnInit(): void {
   this.http.get('https://jsonplaceholder.typicode.com/users')
   .subscribe((response)=> { this.users = response})
 }
}
