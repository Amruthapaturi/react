import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './pages/header/header';
import { Navbar } from './pages/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Header , Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 title =signal('Welcome to First Angular Class')
}
