import { Component, computed, signal } from '@angular/core';

/**
 * Página de perfil de usuario.
 *
 * Muestra y permite modificar los datos personales del usuario
 * utilizando signals para el estado reactivo y computed para
 * valores derivados sin lógica duplicada.
 */
@Component({
  selector: 'app-profile-page',
  standalone: true,
  templateUrl: './profile-page.html',
})
export class ProfilePage {
  /** Nombre de pila del usuario. */
  readonly firstName = signal('Juan');

  /** Apellido del usuario. */
  readonly lastName = signal('Pérez');

  /** Edad del usuario en años. */
  readonly age = signal(30);

  /** Lista de habilidades técnicas del usuario. */
  readonly skills = signal(['Angular', 'TypeScript', 'HTML']);

  /** Nombre completo derivado de firstName y lastName. */
  readonly fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  /**
   * Categoría etaria derivada de la edad.
   * Se recalcula automáticamente cada vez que age cambia.
   */
  readonly ageCategory = computed(() => {
    const value = this.age();

    if (value < 18) return 'minor';
    if (value < 30) return 'young';
    if (value < 60) return 'adult';
    return 'senior';
  });

  /**
   * Reemplaza los datos personales por un conjunto de ejemplo.
   * Demuestra el uso de set() para actualizar signals individualmente.
   */
  changeData() {
    this.firstName.set('Ana');
    this.lastName.set('González');
    this.age.set(22);
  }
}
