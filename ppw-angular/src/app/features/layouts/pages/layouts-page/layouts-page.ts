import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Página de demostración de distribuciones de layout con Tailwind CSS.
 *
 * Cada sección del template muestra un patrón de layout distinto
 * (grid de columnas fijas, grid con sidebar, grid auto-fill, flex carrusel,
 * flex wrap, grid con áreas nombradas, etc.) junto con una combinación
 * diferente de efectos visuales (gradiente, sombra, ring) para ilustrar
 * cómo variar la presentación sin salir de las utilidades de Tailwind.
 *
 * El componente no gestiona estado ni lógica de negocio: su única
 * responsabilidad es servir como referencia visual de composición.
 * Por eso no necesita inputs, outputs ni servicios inyectados.
 */
@Component({
  selector: 'app-layouts-page',
  imports: [],
  templateUrl: './layouts-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutsPage {}
