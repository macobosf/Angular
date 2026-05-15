import { Component, signal } from '@angular/core';
import { DatePipe, UpperCasePipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { EmailPipe } from './email.pipe';

@Component({
  selector: 'app-footer',
  imports: [DatePipe, UpperCasePipe, SlicePipe, TitleCasePipe, EmailPipe],
  templateUrl: './app-footer.html',
  styleUrl: './app-footer.css',
})
export class AppFooterComponent {
  readonly author = signal('marco cobos');
  readonly currentDate = signal(new Date());
  readonly email = signal('marcocobos15@gmail.com');
  readonly description = signal('Plataforma web con angular y componentes standalone');
  readonly version = signal('v1.0.0 - ppw angular proyecto');
}
