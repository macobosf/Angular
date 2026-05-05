import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page';
import { ProfilePage } from './features/profile/pages/profile-page';

/**
 * Definición central de rutas de la aplicación.
 *
 * - Ruta vacía (''):  página de inicio por defecto.
 * - 'profile':        página de perfil de usuario.
 * - '**':             wildcard que redirige cualquier ruta desconocida al inicio,
 *                     evitando pantallas en blanco por URLs inválidas.
 */
export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'profile',
    component: ProfilePage,
  },
  {
    // Captura cualquier ruta no definida y redirige al inicio
    path: '**',
    redirectTo: '',
  },
];
