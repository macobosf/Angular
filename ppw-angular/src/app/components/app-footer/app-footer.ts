import { Component, signal } from '@angular/core';
import { DatePipe, UpperCasePipe, CurrencyPipe, SlicePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, SlicePipe, TitleCasePipe],
  templateUrl: './app-footer.html',
  styleUrl: './app-footer.css',
})
export class AppFooterComponent {
  readonly author = signal('marco cobos');
  readonly currentDate = signal(new Date());
  readonly price = signal(9.99);
  readonly description = signal('plataforma web de practicas con angular y componentes standalone');
  readonly version = signal('v1.0.0 - ppw angular proyecto');
}
