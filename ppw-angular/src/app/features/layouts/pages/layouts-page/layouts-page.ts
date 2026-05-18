import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Página de referencia visual de layouts con Tailwind CSS.
 * No gestiona estado ni lógica de negocio: solo composición de plantillas.
 */
@Component({
  selector: 'app-layouts-page',
  imports: [],
  templateUrl: './layouts-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutsPage {}
