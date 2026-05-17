import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from './components/app-header/app-header';
import { AppFooterComponent } from './components/app-footer/app-footer';

@Component({
  selector: 'aplication',
  imports: [RouterOutlet, AppHeader, AppFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'ppw-angular-21';
}
