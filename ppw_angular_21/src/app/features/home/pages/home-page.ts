import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Página de inicio de la aplicación.
 *
 * Punto de entrada principal; incluye RouterLink para habilitar
 * la navegación declarativa hacia otras rutas sin recargar la página.
 */
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section>
      <h1>PPW Angular 21</h1>
      <p>Proyecto incremental listo para crecer.</p>
      <!-- routerLink navega al módulo de perfil usando el router de Angular -->
      <a routerLink="/profile">Ver perfil</a>
    </section>
  `,
})
export class HomePage {}
